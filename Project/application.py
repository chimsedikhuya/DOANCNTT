from flask import Flask, render_template, request, redirect, url_for
from models import *

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://postgres:postgres@127.0.0.1:5432/DoAn"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db.init_app(app)


@app.route("/listUser")
def listUser():
    users = User.query.all()
    return render_template("listUser.html", users=users)