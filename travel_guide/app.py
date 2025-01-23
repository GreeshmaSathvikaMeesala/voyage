from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from routes import main as main_routes

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///travel_guide.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Register Blueprints
app.register_blueprint(main_routes)

if __name__ == '__main__':
    app.run(debug=True)
