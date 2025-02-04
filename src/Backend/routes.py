from flask import request, jsonify
from models import User, ContactUs, db
import bcrypt
import jwt
import datetime

def setup_routes(app):
    @app.route('/', methods=['GET'])
    def home():
        return jsonify({'message': 'Welcome to the API!'})

    @app.route('/auth/signup', methods=['POST'])
    def signup():
        data = request.get_json()
        hashed_password = bcrypt.hashpw(data['password'].encode('utf-8'), bcrypt.gensalt())
        new_user = User(
            username=data['username'],
            email=data['email'],
            password=hashed_password
        )
        db.session.add(new_user)
        db.session.commit()
        return jsonify({'message': 'User created successfully!'}), 201

    @app.route('/auth/login', methods=['POST'])
    def login():
        data = request.get_json()
        user = User.query.filter((User.username == data['email']) | (User.email == data['email'])).first()
        if user and bcrypt.checkpw(data['password'].encode('utf-8'), user.password.encode('utf-8')):
            token = jwt.encode({
                'user_id': user.id,
                'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)
            }, 'secret', algorithm='HS256')
            return jsonify({'token': token}), 200
        return jsonify({'message': 'Invalid credentials!'}), 401

    @app.route('/contact', methods=['POST'])
    def contact():
        data = request.get_json()
        new_contact = ContactUs(
            name=data['name'],
            email=data['email'],
            phone=data['phone'],
            title=data['title'],
            title=data['title'],
            message=data['message']
        )
        db.session.add(new_contact)
        db.session.commit()
        return jsonify({'message': 'Contact form submitted successfully!'}), 201
