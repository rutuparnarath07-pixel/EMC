# ECOMETRIX CONSULTANTS PVT. LTD. (EMC) - CORPORATE WEBSITE

Official production-ready corporate website for **Ecometrix Consultants Pvt. Ltd. (EMC)**, strictly adhering to approved UI reference designs in `/UI` and company profile specifications.

---

## Architecture & Technology Stack

- **Frontend**: HTML5, Vanilla CSS3 (Custom design system with CSS tokens & Google Fonts), Vanilla JavaScript (Modular ES6 architecture).
- **Backend**: Python (Flask REST API architecture).
- **Database**: PostgreSQL (NeonDB hosted database support) with automatic local SQLite fallback (`emc_database.db`).
- **Features**:
  - 11 Complete Corporate Pages matching UI mockups.
  - Accessible Unified Dynamic Modal System (Team profiles, Service details, Tabbed Project Portfolios, Job applications, Global Search).
  - Category filters for Teams, Projects, Insights, and Careers.
  - Interactive Contact Form with backend API validation and success feedback.
  - SEO best practices (Meta tags, OpenGraph, `robots.txt`, `sitemap.xml`).

---

## Project Structure

```
EMC New Website/
├── frontend/
│   ├── index.html          # Home Page
│   ├── about.html          # About Us Page
│   ├── vision.html         # Vision Page
│   ├── mission.html        # Mission Page
│   ├── leadership.html     # Leadership Page
│   ├── teams.html          # Our Teams Page
│   ├── services.html       # Our Services Page
│   ├── projects.html       # Project Portfolio Page
│   ├── insights.html       # Insights & Publications Page
│   ├── careers.html        # Careers Page
│   ├── contact.html        # Contact Us Page
│   ├── robots.txt          # SEO Crawl Directive
│   ├── sitemap.xml         # XML Sitemap
│   ├── css/                # Global & Page-Specific Stylesheets
│   ├── js/                 # Modular JavaScript Interactivity
│   └── assets/             # Brand Logos & Stock Assets
├── backend/
│   ├── app.py              # Flask Application Server Entry Point
│   ├── config.py           # Configuration & DB Connection URI
│   ├── database.py         # SQLAlchemy Setup
│   ├── init_db.py          # Database Seeding Script
│   ├── models/             # SQLAlchemy Database Schema Models
│   └── routes/             # REST API Blueprints (/api/*)
├── requirements.txt        # Python Dependencies
├── .env.example            # Environment Setup Template
└── README.md               # Documentation
```

---

## Running the Project

### Option A: Local Flask Server (Recommended)
1. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```
2. Seed the Database:
   ```bash
   python backend/init_db.py
   ```
3. Run the Flask Server:
   ```bash
   python backend/app.py
   ```
4. Open your browser at `http://localhost:5000`

### Option B: NeonDB / PostgreSQL Setup
Set `DATABASE_URL` in your `.env` file:
```env
DATABASE_URL=postgresql://username:password@ep-sample-123456.us-east-2.aws.neon.tech/emcdb?sslmode=require
```
Then run `python backend/init_db.py` to seed NeonDB.
