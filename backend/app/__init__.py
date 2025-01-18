from flask import Flask

def create_app():
    app = Flask(__name__)
    app.config.from_pyfile('../.env')
    
    # Import and register blueprints here
    from .routes import main
    app.register_blueprint(main)

    return app
