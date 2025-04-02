# app.py
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager, create_access_token
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow React to connect
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///uwacu.db"
app.config["JWT_SECRET_KEY"] = "your-secret-key"  # Change in production!

db = SQLAlchemy(app)
jwt = JWTManager(app)

# --- Models ---
class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    price = db.Column(db.Float)
    image = db.Column(db.String(200))  # URL to image

class Lesson(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    description = db.Column(db.Text)
    price = db.Column(db.Float)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True)
    password = db.Column(db.String(200))  # Hash in production!

# --- Routes ---
@app.route("/api/products", methods=["GET"])
def get_products():
    products = Product.query.all()
    return jsonify([{"title": p.title, "price": p.price, "image": p.image} for p in products])

@app.route("/api/lessons", methods=["GET"])
def get_lessons():
    lessons = Lesson.query.all()
    return jsonify([{"title": l.title, "description": l.description, "price": l.price} for l in lessons])

@app.route("/auth/login", methods=["POST"])
def login():
    data = request.get_json()
    user = User.query.filter_by(username=data["username"]).first()
    if user and user.password == data["password"]:  # Insecure! Use bcrypt in production.
        token = create_access_token(identity=user.id)
        return jsonify({"token": token})
    return jsonify({"error": "Invalid credentials"}), 401

@app.route("/auth/signup", methods=["POST"])
def signup():
    data = request.get_json()
    user = User(username=data["username"], password=data["password"])  # Hash in production!
    db.session.add(user)
    db.session.commit()
    return jsonify({"message": "User created"}), 201

if __name__ == "__main__":
    with app.app_context():
        db.create_all()  # Create tables
    app.run(debug=True)