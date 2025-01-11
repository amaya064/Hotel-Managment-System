import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function BookingNow() {
  const location = useLocation();
  const navigate = useNavigate();
  const { room } = location.state || {};
  const [numberOfRooms, setNumberOfRooms] = useState(1);

  if (!room) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-xl font-semibold text-gray-700">
          No room details available. Please go back and select a room.
        </p>
      </div>
    );
  }

  const totalPrice = numberOfRooms * room.price;

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingData = {
      name: e.target.name.value,
      contactNumber: e.target.contactNumber.value,
      address: e.target.address.value,
      amenities: e.target.amenities.value,
      bedrooms: e.target.bedrooms.value,
      numberOfRooms,
      regularPrice: totalPrice,
    };

    navigate("/pay", { state: { bookingData, room } });
  };

  return (
    <main className="p-6 bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-2xl rounded-xl overflow-hidden w-full max-w-3xl">
        <div className="relative">
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white drop-shadow-lg">
              {room.name}
            </h1>
          </div>
        </div>
        <div className="p-8">
          <p className="text-gray-600 text-lg mb-4">{room.description}</p>
          <p className="text-xl font-semibold text-gray-800 mb-6">
            ${room.price} <span className="text-sm font-normal">/ night</span>
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="border border-gray-300 p-4 rounded-lg focus:ring focus:ring-blue-200"
                required
              />
              <input
                type="tel"
                name="contactNumber"
                placeholder="Contact Number"
                className="border border-gray-300 p-4 rounded-lg focus:ring focus:ring-blue-200"
                pattern="[0-9]{10,15}"
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="border border-gray-300 p-4 rounded-lg focus:ring focus:ring-blue-200"
                required
              />
              <div>
                <label
                  htmlFor="amenities"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Amenities
                </label>
                <select
                  id="amenities"
                  name="amenities"
                  className="border border-gray-300 p-4 rounded-lg w-full focus:ring focus:ring-blue-200"
                  required
                >
                  <option value="" disabled selected>
                    Choose an amenity
                  </option>
                  <option value="Parking Spot">Parking Spot</option>
                  <option value="Furnished">Furnished</option>
                  <option value="Wi-Fi">Wi-Fi</option>
                  <option value="Swimming Pool">Swimming Pool</option>
                  <option value="Gym">Gym</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="number"
                name="bedrooms"
                min="1"
                max="30"
                placeholder="Number of Nights"
                className="border border-gray-300 p-4 rounded-lg focus:ring focus:ring-blue-200"
                required
              />
              <div>
                <label
                  htmlFor="numberOfRooms"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Number of Rooms
                </label>
                <input
                  type="number"
                  id="numberOfRooms"
                  value={numberOfRooms}
                  onChange={(e) => setNumberOfRooms(Number(e.target.value))}
                  min="1"
                  max="10"
                  className="border border-gray-300 p-4 rounded-lg w-full focus:ring focus:ring-blue-200"
                  required
                />
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg font-bold text-gray-800">
                Total Price: ${totalPrice}
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium p-4 rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-300 transition"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
