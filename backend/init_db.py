import sys
import os

# Add parent directory to path to allow importing backend module
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from flask import Flask
from backend.config import Config
from backend.database import db, init_db
from backend.models.models import TeamMember, Service, Project, Insight, Job

def seed_database():
    app = Flask(__name__)
    app.config.from_object(Config)
    init_db(app)

    with app.app_context():
        # Clear existing data
        db.drop_all()
        db.create_all()

        print("Seeding database with initial EMC data...")

        # 1. Team Members
        m1 = TeamMember(
            name="Chinmay Tripathy",
            role="Chief Executive Officer",
            department="Leadership",
            photo="assets/images/ct_no_bg.png",
            bio="Founder and CEO of Ecometrix Consultants. Lead environmental engineer specializing in water supply, urban infrastructure & GIS platforms.",
            quote="When people come first and meaningful impact leads the way, the numbers follow."
        )
        m2 = TeamMember(
            name="Priyanka Sahu",
            role="Head - GIS & Digital Solutions",
            department="GIS & IT",
            photo="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
            bio="Leads enterprise geospatial mapping, drone survey processing and WebGIS smart governance portals.",
            quote="Spatial data turns complex urban problems into clear decisions."
        )
        db.session.add_all([m1, m2])

        # 2. Services
        s1 = Service(
            slug="water-supply",
            title="Water Supply",
            subtitle="Reliable, Inclusive and Sustainable Water Supply Solutions",
            image="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80",
            quote="Safe water. Healthier communities. Stronger cities.",
            description="We provide end-to-end consultancy services for planning, design, implementation and management of water supply systems.",
            capabilities=[
                {"title": "Source Assessment & Feasibility", "icon": "search"},
                {"title": "Distribution Network (24x7 Systems)", "icon": "droplet"},
                {"title": "Network Design & Hydraulic Modelling", "icon": "monitor"}
            ],
            stats=[
                {"number": "40+", "label": "Cities Supported"},
                {"number": "8M+", "label": "People Impacted"}
            ]
        )
        db.session.add(s1)

        # 3. Projects
        p1 = Project(
            title="24x7 Drink from Tap Water Systems",
            category="Water Supply",
            location="Bhubaneswar & Cuttack, Odisha",
            image="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80",
            short_desc="Landmark 24x7 high pressure tap water supply infrastructure across major Odisha cities.",
            client="Housing & Urban Development Dept, Govt of Odisha",
            period="2020 - 2024",
            value="₹ 450 Crore",
            capacity="250 MLD",
            beneficiaries="1.2 Million",
            overview="Complete hydraulic modelling, NRW reduction, DMA structuring and smart metering.",
            scope="Hydraulic network modelling, DMA creation, SCADA telemetry integration.",
            highlights=["First state in India to implement 100% 24x7 drink-from-tap standard."],
            impact="Provides safe, continuous tap water directly to citizens.",
            quote="Safe 24x7 drinking water straight from the tap."
        )
        db.session.add(p1)

        # 4. Insights
        i1 = Insight(
            title="The Role of GIS in Smarter Urban Planning",
            type="Article",
            category="GIS & IT",
            date="05 SEP 2026",
            author="Priyanka Sahu",
            image="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
            summary="How spatial data is transforming infrastructure planning and municipal governance.",
            content="Spatial analytics enable city authorities to visualize infrastructure networks layer-by-layer..."
        )
        db.session.add(i1)

        # 5. Jobs
        j1 = Job(
            title="Project Engineer - Water Supply",
            department="Engineering",
            location="Bhubaneswar, Odisha",
            type="Full-time",
            posted_date="12 Sep 2026",
            description="Support design and supervision of 24x7 urban water supply projects.",
            responsibilities=["Prepare DPRs and hydraulic network models using EPANET."],
            requirements=["B.Tech/M.Tech in Civil / Environmental Engineering."]
        )
        db.session.add(j1)

        db.session.commit()
        print("Database seeded successfully!")

if __name__ == '__main__':
    seed_database()
