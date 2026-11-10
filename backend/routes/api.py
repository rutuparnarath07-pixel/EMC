import os
from flask import Blueprint, jsonify, request
from backend.database import db
from backend.models.models import (
    TeamMember, Service, Project, Insight, Job, 
    ContactSubmission, JobApplication, NewsletterSubscriber
)

api_bp = Blueprint('api', __name__, url_prefix='/api')

# TEAM ENDPOINTS
@api_bp.route('/team', methods=['GET'])
def get_team():
    dept = request.args.get('department')
    query = TeamMember.query
    if dept and dept != 'All':
        query = query.filter_by(department=dept)
    members = query.all()
    return jsonify([m.to_dict() for m in members])

@api_bp.route('/team/<int:member_id>', methods=['GET'])
def get_team_member(member_id):
    member = TeamMember.query.get_or_404(member_id)
    return jsonify(member.to_dict())

# SERVICES ENDPOINTS
@api_bp.route('/services', methods=['GET'])
def get_services():
    services = Service.query.all()
    return jsonify([s.to_dict() for s in services])

@api_bp.route('/services/<slug_or_id>', methods=['GET'])
def get_service(slug_or_id):
    if slug_or_id.isdigit():
        service = Service.query.get_or_404(int(slug_or_id))
    else:
        service = Service.query.filter_by(slug=slug_or_id).first_or_404()
    return jsonify(service.to_dict())

# PROJECTS ENDPOINTS
@api_bp.route('/projects', methods=['GET'])
def get_projects():
    cat = request.args.get('category')
    query = Project.query
    if cat and cat != 'All':
        query = query.filter_by(category=cat)
    projects = query.all()
    return jsonify([p.to_dict() for p in projects])

@api_bp.route('/projects/<int:project_id>', methods=['GET'])
def get_project(project_id):
    project = Project.query.get_or_404(project_id)
    return jsonify(project.to_dict())

# INSIGHTS ENDPOINTS
@api_bp.route('/insights', methods=['GET'])
def get_insights():
    query = Insight.query
    insights = query.order_by(Insight.id.desc()).all()
    return jsonify([i.to_dict() for i in insights])

@api_bp.route('/insights/<int:insight_id>', methods=['GET'])
def get_insight(insight_id):
    insight = Insight.query.get_or_404(insight_id)
    return jsonify(insight.to_dict())

# JOBS ENDPOINTS
@api_bp.route('/jobs', methods=['GET'])
def get_jobs():
    jobs = Job.query.filter_by(is_active=True).all()
    return jsonify([j.to_dict() for j in jobs])

@api_bp.route('/jobs/<int:job_id>', methods=['GET'])
def get_job(job_id):
    job = Job.query.get_or_404(job_id)
    return jsonify(job.to_dict())

# FORM SUBMISSIONS
@api_bp.route('/contact', methods=['POST'])
def submit_contact():
    data = request.get_json() or {}
    if not data.get('name') or not data.get('email') or not data.get('message'):
        return jsonify({'error': 'Name, email, and message are required.'}), 400

    submission = ContactSubmission(
        name=data.get('name'),
        email=data.get('email'),
        phone=data.get('phone'),
        organization=data.get('organization'),
        subject=data.get('subject'),
        message=data.get('message')
    )
    db.session.add(submission)
    db.session.commit()
    return jsonify({'status': 'success', 'message': 'Contact form submitted successfully.'}), 201

@api_bp.route('/jobs/apply', methods=['POST'])
def apply_job():
    data = request.get_json() or {}
    if not data.get('full_name') or not data.get('email'):
        return jsonify({'error': 'Full name and email are required.'}), 400

    app = JobApplication(
        job_id=data.get('job_id'),
        job_title=data.get('job_title'),
        full_name=data.get('full_name'),
        email=data.get('email'),
        phone=data.get('phone'),
        experience=data.get('experience'),
        cover_letter=data.get('cover_letter')
    )
    db.session.add(app)
    db.session.commit()
    return jsonify({'status': 'success', 'message': 'Job application submitted successfully.'}), 201

@api_bp.route('/newsletter/subscribe', methods=['POST'])
def subscribe_newsletter():
    data = request.get_json() or {}
    email = data.get('email')
    if not email:
        return jsonify({'error': 'Email is required.'}), 400

    existing = NewsletterSubscriber.query.filter_by(email=email).first()
    if not existing:
        sub = NewsletterSubscriber(email=email)
        db.session.add(sub)
        db.session.commit()

    return jsonify({'status': 'success', 'message': 'Subscribed successfully.'}), 200

# GLOBAL SEARCH ENDPOINT
@api_bp.route('/search', methods=['GET'])
def global_search():
    query_str = request.args.get('q', '').strip()
    if not query_str or len(query_str) < 2:
        return jsonify([])

    results = []

    # Search Services
    services = Service.query.filter(
        (Service.title.ilike(f'%{query_str}%')) | (Service.description.ilike(f'%{query_str}%'))
    ).all()
    for s in services:
        results.append({
            'type': 'Service',
            'title': s.title,
            'description': s.subtitle or s.description[:100],
            'url': f'services.html'
        })

    # Search Projects
    projects = Project.query.filter(
        (Project.title.ilike(f'%{query_str}%')) | (Project.short_desc.ilike(f'%{query_str}%')) | (Project.location.ilike(f'%{query_str}%'))
    ).all()
    for p in projects:
        results.append({
            'type': 'Project',
            'title': p.title,
            'description': f"{p.location} - {p.short_desc[:90]}",
            'url': f'projects.html'
        })

    # Search Team
    team = TeamMember.query.filter(
        (TeamMember.name.ilike(f'%{query_str}%')) | (TeamMember.role.ilike(f'%{query_str}%'))
    ).all()
    for t in team:
        results.append({
            'type': 'Team',
            'title': t.name,
            'description': f"{t.role} - {t.department}",
            'url': 'teams.html'
        })

    return jsonify(results[:10])

# VISITOR COUNTER ENDPOINT
COUNTER_FILE_PATH = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'visitor_count.json')

@api_bp.route('/visitor-counter', methods=['GET'])
def get_visitor_counter():
    import json
    initial_count = 57896
    current_count = initial_count
    
    try:
        if os.path.exists(COUNTER_FILE_PATH):
            with open(COUNTER_FILE_PATH, 'r') as f:
                data = json.load(f)
                current_count = data.get('count', initial_count)
        else:
            current_count = initial_count
    except Exception:
        current_count = initial_count

    # Increment by +5 for each page visit session
    current_count += 5

    try:
        os.makedirs(os.path.dirname(COUNTER_FILE_PATH), exist_ok=True)
        with open(COUNTER_FILE_PATH, 'w') as f:
            json.dump({'count': current_count}, f)
    except Exception as e:
        print(f"Error saving visitor counter: {e}")

    formatted_count = f"{current_count:,}"
    return jsonify({
        'count': current_count,
        'formatted': formatted_count,
        'status': 'success'
    })

# ==========================================================================
# AI CHATBOT & INTERACTIVE ASSISTANT API ENDPOINTS
# ==========================================================================

@api_bp.route('/chat', methods=['POST'])
def ai_chat():
    data = request.get_json() or {}
    user_msg = (data.get('message') or '').strip().lower()
    
    if not user_msg:
        return jsonify({
            'response': 'Hello! Welcome to Ecometrix Consultants Pvt. Ltd. How can I assist you today?',
            'options': ["Company Info", "Our Services", "Apply for Job / Upload CV", "Schedule Visit / Meeting"]
        }), 200

    # Knowledge Base Intent Matching Engine
    if any(w in user_msg for w in ['about', 'company', 'ecometrix', 'emc', 'who are you', 'overview', 'history']):
        reply = (
            "**Ecometrix Consultants Pvt. Ltd. (EMC)** is a premier ISO 9001:2015 certified infrastructure and environmental technical consultancy headquartered in Bhubaneswar, Odisha.\n\n"
            "• **Established**: 2015 in Bhubaneswar\n"
            "• **Footprint**: 8 Regional Offices across 20+ States & UTs in India\n"
            "• **Impact**: 40 Million+ lives impacted & ₹400 Billion+ infrastructure engineered\n"
            "• **Team**: 350+ multidisciplinary engineers, environmental scientists, and urban planners.\n\n"
            "How would you like to proceed?"
        )
        options = ["Our Services", "Leadership Team", "Form: Schedule Visit / Meeting", "Form: Apply for Job"]

    elif any(w in user_msg for w in ['service', 'domain', 'water', 'energy', 'building', 'health', 'climate', 'what do you do']):
        reply = (
            "EMC specializes in 5 core domain areas:\n\n"
            "1. **Integrated Water Resource Management**: 24x7 smart water supply grids, sewage treatment, river basin rejuvenation.\n"
            "2. **Renewable Energy & Green Transition**: Solar parks, wind grid integration, carbon footprint reduction roadmaps.\n"
            "3. **Buildings & Institutional Infrastructure**: Smart green buildings, educational campuses, structural engineering.\n"
            "4. **Healthcare Infrastructure**: Hospital campus master planning, medical equipment placement & utility engineering.\n"
            "5. **Climate Adaptation & Systems**: Disaster resilience modeling, coastal protection & ESIA impact studies."
        )
        options = ["Form: Schedule Visit / Meeting", "Form: Apply for Job / Upload CV", "Contact Info"]

    elif any(w in user_msg for w in ['ceo', 'chinmay', 'tripathy', 'leader', 'advisor', 'management', 'sanjeev', 'otaguro', 'gopesh', 'satapathy', 'parida']):
        reply = (
            "**EMC Leadership & Distinguished Advisors**:\n\n"
            "• **Chinmay Tripathy** — Chief Executive Officer (CEO), Environmental Engineer & Water Reformer.\n"
            "• **Sanjeev Kumar Das** — Mentor-in-Chief (35+ yrs PHED & utility experience).\n"
            "• **Ryuji Otaguro** — Advisor, International Infrastructure (Ex World Bank, JICA, ADB).\n"
            "• **Gopesh Shrivastava** — Advisor, Business Development & Client Relations.\n"
            "• **Sachidananda Satapathy** — Advisor, Environment & Climate Change (40+ yrs policy leader).\n"
            "• **Basanta Kumar Parida** — Advisor, Water & Urban Infrastructure (Former Chief Engineer, Govt of Odisha)."
        )
        options = ["Form: Schedule Visit / Meeting", "Form: Apply for Job / Upload CV", "Contact Leadership"]

    elif any(w in user_msg for w in ['job', 'career', 'hiring', 'cv', 'resume', 'apply', 'work', 'intern', 'vacancy', 'opening']):
        reply = (
            "We are always looking for passionate engineers, environmental scientists, planners, and project managers!\n\n"
            "You can submit your CV and application details directly right here using our interactive job seeker form."
        )
        options = ["Form: Apply for Job / Upload CV", "Company Overview", "Contact HR"]

    elif any(w in user_msg for w in ['visit', 'meeting', 'meet', 'appointment', 'office', 'collaboration', 'formal', 'partner']):
        reply = (
            "We welcome partners, clients, and collaborators to visit our corporate headquarters or schedule a formal discussion!\n\n"
            "📍 **Headquarters**: DCB 119, 1st Floor, DLF Cybercity, Patia, Bhubaneswar – 751024, Odisha, India\n\n"
            "You can request a formal meeting or office visit directly using our scheduling form."
        )
        options = ["Form: Schedule Visit / Meeting", "Company Info", "Contact Info"]

    elif any(w in user_msg for w in ['contact', 'address', 'phone', 'email', 'location', 'bhubaneswar', 'office']):
        reply = (
            "**Ecometrix Corporate Contact Information**:\n\n"
            "📍 **Head Office**: DCB 119, 1st Floor, DLF Cybercity, Chandaka Industrial Estate, Patia, Bhubaneswar – 751024, Odisha, India\n"
            "📞 **Phone**: +91 674 2973849\n"
            "✉️ **Email**: info@ecometrix.co.in\n"
            "🌐 **Website**: www.ecometrix.co.in"
        )
        options = ["Form: Schedule Visit / Meeting", "Form: Apply for Job / Upload CV", "Our Services"]

    else:
        reply = (
            f"Thank you for reaching out! Regarding your inquiry on '{data.get('message')}', Ecometrix Consultants provides technical engineering, environmental consulting, and infrastructure development services across India.\n\n"
            "How can I assist you further today?"
        )
        options = ["Company Overview", "Our Services", "Form: Apply for Job / Upload CV", "Form: Schedule Visit / Meeting"]

    return jsonify({
        'response': reply,
        'options': options,
        'status': 'success'
    }), 200

@api_bp.route('/chatbot/meeting-request', methods=['POST'])
def chatbot_meeting_request():
    data = request.get_json() or {}
    name = data.get('name')
    email = data.get('email')
    if not name or not email:
        return jsonify({'error': 'Name and email are required for scheduling a meeting.'}), 400

    sub = ContactSubmission(
        name=name,
        email=email,
        phone=data.get('phone', ''),
        organization=data.get('organization', 'Partner/Visitor'),
        subject=f"Meeting Request: {data.get('purpose', 'Formal Discussion')}",
        message=f"Meeting Request Details:\nPurpose: {data.get('purpose')}\nPreferred Date: {data.get('preferred_date')}\nPreferred Time: {data.get('preferred_time')}\nNotes: {data.get('notes', '')}"
    )
    db.session.add(sub)
    db.session.commit()
    
    meeting_ref = f"EMC-MEET-{sub.id + 1000}"
    return jsonify({
        'status': 'success',
        'message': f"Meeting request confirmed! Reference ID: {meeting_ref}. Our team will contact you shortly at {email}.",
        'ref_id': meeting_ref
    }), 201

@api_bp.route('/chatbot/job-application', methods=['POST'])
def chatbot_job_application():
    data = request.get_json() or {}
    name = data.get('full_name')
    email = data.get('email')
    if not name or not email:
        return jsonify({'error': 'Full name and email are required.'}), 400

    app = JobApplication(
        job_title=data.get('domain', 'General Application / Chatbot'),
        full_name=name,
        email=email,
        phone=data.get('phone', ''),
        experience=data.get('experience', 'Not Specified'),
        cover_letter=f"Application Domain: {data.get('domain')}\nCV File: {data.get('cv_file_name', 'Attached')}\nNotes: {data.get('cover_note', '')}"
    )
    db.session.add(app)
    db.session.commit()

    app_ref = f"EMC-JOB-{app.id + 5000}"
    return jsonify({
        'status': 'success',
        'message': f"CV and Application received! Reference ID: {app_ref}. Thank you {name}, our HR department will review your profile shortly.",
        'ref_id': app_ref
    }), 201


