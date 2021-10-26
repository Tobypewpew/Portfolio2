from flask import Blueprint
# Defines the blueprint of the urls
views = Blueprint('views', __name__)


@views.route('/')
def home():
    return "<h1>Test</h1>"