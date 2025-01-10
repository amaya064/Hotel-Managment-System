import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Accomodation() {
  const accommodations = [
    {
      id: 1,
      name: 'Deluxe Room',
      description: 'A spacious room with a king-size bed, sea view, and modern amenities.',
      price: 150,
      image: 'src/images/photo8.png', // Replace with actual image path
    },
    {
      id: 2,
      name: 'Suite',
      description: 'An elegant suite with a separate living area and luxurious furnishings.',
      price: 250,
      image: 'src/images/photo9.png', // Replace with actual image path
    },
    {
      id: 3,
      name: 'Standard Room',
      description: 'A cozy room with all the essentials for a comfortable stay.',
      price: 100,
      image: 'src/images/photo10.png', // Replace with actual image path
    },
  ];

  const navigate = useNavigate();

  const handleBooking = (room) => {
    navigate('/bookingnow', { state: { room } });
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-r from-blue-100 via-teal-100 to-green-100"
      style={{
        backgroundImage: "url('src/images/hotel-background.jpg')", // Replace with actual background image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-7xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Accommodations</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accommodations.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
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
                <button
                  className="mt-6 w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
                  onClick={() => handleBooking(room)}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
