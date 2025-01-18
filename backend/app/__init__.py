from flask import Flask
from dotenv import load_dotenv
import os

def create_app():
    app = Flask(__name__)
    
    # Load environment variables from the .env file
    load_dotenv(dotenv_path='../.env')
    
    # Set configuration variables
    app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'default_secret_key')  # Default as fallback
    app.config['DEBUG'] = os.getenv('DEBUG', 'False').lower() == 'true'  # Convert to boolean
    
    # Import and register blueprints
    from .routes import main
    app.register_blueprint(main)

    return app
