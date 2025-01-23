from flask import Blueprint, jsonify, request
from models import Trip, Booking
from app import db

main = Blueprint('main', __name__)

@main.route('/trips', methods=['GET'])
def get_trips():
    trips = Trip.query.all()
    return jsonify([{ 'id': trip.id, 'destination': trip.destination, 'description': trip.description } for trip in trips])

@main.route('/trips', methods=['POST'])
def add_trip():
    data = request.json
    new_trip = Trip(destination=data['destination'], description=data['description'])
    db.session.add(new_trip)
    db.session.commit()
    return jsonify({'id': new_trip.id, 'destination': new_trip.destination}), 201

@main.route('/bookings', methods=['POST'])
def book_trip():
    data = request.json
    new_booking = Booking(trip_id=data['trip_id'], customer_name=data['customer_name'], customer_email=data['customer_email'])
    db.session.add(new_booking)
    db.session.commit()
    return jsonify({'id': new_booking.id}), 201
