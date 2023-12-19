from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()


class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.String, primary_key=True)
    name = db.Column(db.String, nullable=False)
    passs = db.Column(db.String, nullable=False)
    dob = db.Column(db.String, nullable=False)
    number = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False)
    req = db.Column(db.String, nullable=False)
    




