import os
import sys

# Add parent directory to sys.path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from flask import Flask, send_from_directory
from flask_cors import CORS
from backend.config import Config
from backend.database import init_db
from backend.routes.api import api_bp

def create_app():
    # Set static folder to frontend directory
    frontend_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'frontend'))
    app = Flask(__name__, static_folder=frontend_dir, static_url_path='')
    app.config.from_object(Config)

    # Enable CORS
    CORS(app)

    # Initialize Database
    init_db(app)

    # Register API Blueprint
    app.register_blueprint(api_bp)

    # Static file serving route
    root_assets = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'Assets'))
    @app.route('/Assets/<path:filename>')
    def serve_root_assets(filename):
        return send_from_directory(root_assets, filename)

    @app.route('/')
    def serve_index():
        return send_from_directory(app.static_folder, 'index.html')

    @app.route('/<path:path>')
    def serve_static_page(path):
        if os.path.exists(os.path.join(app.static_folder, path)):
            return send_from_directory(app.static_folder, path)
        return send_from_directory(app.static_folder, 'index.html')

    return app

app = create_app()

if __name__ == '__main__':
    port = int(os.getenv("PORT", 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
