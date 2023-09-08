import flask
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__, template_folder='.')


@app.route('/')
def reg():
    return flask.render_template('templates/reg.html')


@app.route('/template')
def temp():
    return flask.render_template('templates/template.html')
