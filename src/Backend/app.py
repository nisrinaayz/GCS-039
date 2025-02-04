from flask import Flask
from routes import setup_routes
from database import db

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://nisrinaayz:nisrina12@localhost/database'  # Updated with actual credentials
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

with app.app_context():
    db.create_all()

setup_routes(app)

if __name__ == '__main__':
    app.run(debug=True, port=5003)  # Changed port to 5003
