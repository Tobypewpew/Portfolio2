from flask import Blueprint, render_template
# Defines the blueprint of the urls
views = Blueprint('views', __name__)


@views.route('/')
def calculator():
    return render_template("calculator.html")