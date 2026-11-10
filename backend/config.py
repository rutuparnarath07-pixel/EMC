import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SECRET_KEY = os.getenv("SECRET_KEY", "emc_corporate_secret_key_2026")
    DATABASE_URL = os.getenv("DATABASE_URL")
    
    # Use NeonDB / PostgreSQL if DATABASE_URL is set, otherwise default to local SQLite
    if DATABASE_URL:
        # Fix potential postgres:// uri issue in older heroku/neon links
        if DATABASE_URL.startswith("postgres://"):
            DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql://", 1)
        SQLALCHEMY_DATABASE_URI = DATABASE_URL
    else:
        BASE_DIR = os.path.abspath(os.path.dirname(__file__))
        SQLALCHEMY_DATABASE_URI = f"sqlite:///{os.path.join(BASE_DIR, 'emc_database.db')}"
        
    SQLALCHEMY_TRACK_MODIFICATIONS = False
