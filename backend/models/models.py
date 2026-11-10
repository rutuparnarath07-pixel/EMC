from backend.database import db
from datetime import datetime

class TeamMember(db.Model):
    __tablename__ = 'team_members'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    role = db.Column(db.String(120), nullable=False)
    department = db.Column(db.String(120), nullable=False)
    photo = db.Column(db.String(500))
    bio = db.Column(db.Text)
    quote = db.Column(db.Text)
    is_advisor = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'role': self.role,
            'department': self.department,
            'photo': self.photo,
            'bio': self.bio,
            'quote': self.quote,
            'is_advisor': self.is_advisor
        }

class Service(db.Model):
    __tablename__ = 'services'
    id = db.Column(db.Integer, primary_key=True)
    slug = db.Column(db.String(100), unique=True, nullable=False)
    title = db.Column(db.String(150), nullable=False)
    subtitle = db.Column(db.String(255))
    image = db.Column(db.String(500))
    quote = db.Column(db.Text)
    description = db.Column(db.Text)
    capabilities = db.Column(db.JSON)  # Stores capabilities list
    stats = db.Column(db.JSON)         # Stores metric stats
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            'id': self.id,
            'slug': self.slug,
            'title': self.title,
            'subtitle': self.subtitle,
            'image': self.image,
            'quote': self.quote,
            'description': self.description,
            'capabilities': self.capabilities,
            'stats': self.stats
        }

class Project(db.Model):
    __tablename__ = 'projects'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    category = db.Column(db.String(100), nullable=False)
    location = db.Column(db.String(150))
    image = db.Column(db.String(500))
    gallery = db.Column(db.JSON)
    short_desc = db.Column(db.Text)
    client = db.Column(db.String(150))
    period = db.Column(db.String(50))
    value = db.Column(db.String(100))
    capacity = db.Column(db.String(100))
    beneficiaries = db.Column(db.String(100))
    overview = db.Column(db.Text)
    scope = db.Column(db.Text)
    highlights = db.Column(db.JSON)
    impact = db.Column(db.Text)
    quote = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'category': self.category,
            'location': self.location,
            'image': self.image,
            'gallery': self.gallery,
            'short_desc': self.short_desc,
            'client': self.client,
            'period': self.period,
            'value': self.value,
            'capacity': self.capacity,
            'beneficiaries': self.beneficiaries,
            'overview': self.overview,
            'scope': self.scope,
            'highlights': self.highlights,
            'impact': self.impact,
            'quote': self.quote
        }

class Insight(db.Model):
    __tablename__ = 'insights'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    type = db.Column(db.String(80), nullable=False)
    category = db.Column(db.String(100))
    date = db.Column(db.String(50))
    author = db.Column(db.String(100))
    image = db.Column(db.String(500))
    summary = db.Column(db.Text)
    content = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'type': self.type,
            'category': self.category,
            'date': self.date,
            'author': self.author,
            'image': self.image,
            'summary': self.summary,
            'content': self.content
        }

class Job(db.Model):
    __tablename__ = 'jobs'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(150), nullable=False)
    department = db.Column(db.String(100), nullable=False)
    location = db.Column(db.String(100))
    type = db.Column(db.String(50), default='Full-time')
    posted_date = db.Column(db.String(50))
    description = db.Column(db.Text)
    responsibilities = db.Column(db.JSON)
    requirements = db.Column(db.JSON)
    is_active = db.Column(db.Boolean, default=True)

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'department': self.department,
            'location': self.location,
            'type': self.type,
            'posted_date': self.posted_date,
            'description': self.description,
            'responsibilities': self.responsibilities,
            'requirements': self.requirements
        }

class ContactSubmission(db.Model):
    __tablename__ = 'contact_submissions'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    phone = db.Column(db.String(50))
    organization = db.Column(db.String(150))
    subject = db.Column(db.String(200))
    message = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class JobApplication(db.Model):
    __tablename__ = 'job_applications'
    id = db.Column(db.Integer, primary_key=True)
    job_id = db.Column(db.Integer)
    job_title = db.Column(db.String(150))
    full_name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    phone = db.Column(db.String(50))
    experience = db.Column(db.String(50))
    cover_letter = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class NewsletterSubscriber(db.Model):
    __tablename__ = 'newsletter_subscribers'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    subscribed_at = db.Column(db.DateTime, default=datetime.utcnow)
