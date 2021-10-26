# __init__ file make the folder a python package
# Flask package is for creating websites
from flask import Flask


# used to initialize app - get app started
def create_app():
    app = Flask(__name__)
    # Holds cookie data - key should be kept secret in professional environment
    app.config['SECRET_KEY'] = 'secret'

    from .views import views

    app.register_blueprint(views, url_prefix='/')

    return app
