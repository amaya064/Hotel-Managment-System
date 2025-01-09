import React from 'react';
import { useLocation } from 'react-router-dom';

export default function BookingNow() {
  const location = useLocation();
  const { room } = location.state || {}; // Retrieve the room details passed from Accomodation

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-teal-100 to-green-100">
      <div className="max-w-7xl mx-auto py-12 px-6">
        {room ? (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800">{room.name}</h2>
              <p className="text-gray-600 mt-2">{room.description}</p>
              <p className="text-lg font-semibold text-gray-800 mt-4">
                Price: ${room.price} / night
              </p>
              <div className="mt-6">
                <button className="bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition duration-300">
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p>No room details found</p>
        )}
      </div>
    </div>
  );
}
