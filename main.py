from flask import Flask

app = Flask(__name__)


@app.route('/hello')
def hello():
    return '<h1>Hello world<h1>'


@app.route('/')
def index():
    return 'C://Users//sourc//PycharmProjects//toDoList//template.html'
