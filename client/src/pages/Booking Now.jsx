import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function BookingNow() {
  const location = useLocation();
  const navigate = useNavigate();
  const { room } = location.state || {}; // Retrieve the room details passed from Accommodation
  const [numberOfRooms, setNumberOfRooms] = useState(1); // State for the number of rooms

  if (!room) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl font-semibold text-gray-600">
          No room details available. Please go back and select a room.
        </p>
      </div>
    );
  }

  // Calculate the regular price based on the number of rooms
  const totalPrice = numberOfRooms * room.price;

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingData = {
      name: e.target.name.value,
      contactNumber: e.target.contactNumber.value,
      address: e.target.address.value,
      parkingSpot: e.target["Parking spot"].checked,
      furnished: e.target.Furnished.checked,
      bedrooms: e.target.bedrooms.value,
      numberOfRooms,
      regularPrice: totalPrice,
    };

    navigate("/pay", { state: { bookingData, room } });
  };

  return (
    <main className="p-3 flex justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 w-full max-w-lg">
        {/* Room Details */}
        <h1 className="text-3xl font-semibold text-center mb-6">{room.name}</h1>
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-56 object-cover rounded-lg mb-4"
        />
        <p className="text-gray-600 text-center mb-2">{room.description}</p>
        <p className="text-lg font-semibold text-gray-800 text-center mb-6">
          Price: ${room.price} / night
        </p>

        {/* Book Now Form */}
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border p-3 rounded-lg"
              maxLength="62"
              minLength="10"
              required
            />
            <input
              type="tel"
              name="contactNumber"
              placeholder="Contact Number"
              className="border p-3 rounded-lg"
              pattern="[0-9]{10,15}"
              title="Contact number should only contain numbers and be 10-15 digits long."
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="border p-3 rounded-lg"
              required
            />
            <div className="flex gap-6 flex-wrap">
              <div className="flex gap-2 items-center">
                <input type="checkbox" id="Parking spot" className="w-5" />
                <span>Parking spot</span>
              </div>
              <div className="flex gap-2 items-center">
                <input type="checkbox" id="Furnished" className="w-5" />
                <span>Furnished</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  name="bedrooms"
                  min="1"
                  max="10"
                  required
                  className="p-3 border border-gray-300 rounded-lg"
                />
                <p>Nights</p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  id="numberOfRooms"
                  min="1"
                  max="10"
                  value={numberOfRooms}
                  onChange={(e) => setNumberOfRooms(Number(e.target.value))}
                  required
                  className="p-3 border border-gray-300 rounded-lg"
                />
                <p>Rooms</p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  id="RegularPrice"
                  value={totalPrice}
                  readOnly
                  className="p-3 border border-gray-300 rounded-lg bg-gray-100"
                />
                <div className="flex flex-col items-center">
                  <p>Regular Price</p>
                  <span className="text-xs">($/ night for selected rooms)</span>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="p-3 bg-slate-700 text-white rounded-lg hover:opacity-95 disabled:opacity-80"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => navigate(-1)} // Navigate back to the previous page
              className="p-3 bg-red-500 text-white rounded-lg hover:opacity-95 mt-3"
            >
              Cancel Booking
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
