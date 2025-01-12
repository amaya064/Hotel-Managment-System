import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Pay() {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookingData, room } = location.state || {};

  if (!bookingData || !room) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
        <p className="text-2xl font-semibold text-gray-700 mb-4">
          No booking details available.
        </p>
        <button
          className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-500 shadow-md"
          onClick={() => navigate(-1)}
        >
          Back to Booking
        </button>
      </div>
    );
  }

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();

    const paymentDetails = {
      cardNumber: e.target.cardNumber.value,
      cardName: e.target.cardName.value,
      expiryDate: e.target.expiryDate.value,
      cvv: e.target.cvv.value,
    };

    const bookingDetails = {
      name: bookingData.name,
      email: bookingData.email,
      regularPrice: bookingData.regularPrice,
      bedrooms: bookingData.bedrooms,
      numberOfRooms: bookingData.numberOfRooms,
      contactNumber: bookingData.contactNumber,
      address: bookingData.address,
      paymentDetails,
    };

    try {
      const response = await fetch("http://localhost:3000/api/booking/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingDetails),
      });

      if (response.ok) {
        alert("Payment successful and booking confirmed!");
        navigate("/");
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error submitting payment:", error);
      alert("An error occurred during payment. Please try again.");
    }
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Payment Details
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">{room.name}</h2>
          <p className="text-gray-600 mt-2">{room.description}</p>
          <div className="mt-4 space-y-2 text-gray-800">
            <p>
              <span className="font-semibold">Price:</span> ${bookingData.regularPrice}
            </p>
            <p>
              <span className="font-semibold">Customer Name:</span> {bookingData.name}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {bookingData.email}
            </p>
            <p>
              <span className="font-semibold">Nights:</span> {bookingData.bedrooms}
            </p>
            <p>
              <span className="font-semibold">Rooms:</span> {bookingData.numberOfRooms}
            </p>
            <p>
              <span className="font-semibold">Amenities:</span> {bookingData.amenities}
            </p>
            <p>
              <span className="font-semibold">Contact:</span> {bookingData.contactNumber}
            </p>
            <p>
              <span className="font-semibold">Address:</span> {bookingData.address}
            </p>
          </div>
        </div>

        <form onSubmit={handlePaymentSubmit} className="space-y-6">
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            pattern="[0-9]{10}"
            maxLength="10"
            required
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <select
            name="cardName"
            required
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="" disabled selected>
              Select Bank
            </option>
            <option value="BOC">BOC</option>
            <option value="HNB">HNB</option>
            <option value="Peoples bank">Peoples bank</option>
          </select>
          <input
            type="month"
            name="expiryDate"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            pattern="[0-9]{3,4}"
            maxLength="4"
            required
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Pay Now
          </button>
        </form>

        <button
          type="button"
          onClick={() => navigate(-1)}
          className="w-full mt-4 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Cancel
        </button>
      </div>
    </main>
  );
}
