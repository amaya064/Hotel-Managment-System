import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Pay() {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookingData, room } = location.state || {}; // Retrieve data passed from BookingNow

  if (!bookingData || !room) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl font-semibold text-gray-600">
          No booking details available. Please go back and fill out the booking form.
        </p>
        <button
          className="p-3 bg-red-500 text-white rounded-lg hover:opacity-95 mt-3"
          onClick={() => navigate(-1)}
        >
          Back to Booking
        </button>
      </div>
    );
  }

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    
    // Collect all necessary data, excluding payment details.
    const bookingDetails = {
      regularPrice: bookingData.regularPrice,
      bedrooms: bookingData.bedrooms,
      numberOfRooms: bookingData.numberOfRooms,
      contactNumber: bookingData.contactNumber,
      address: bookingData.address,
    };
  
    // Debugging: Log the booking details to check if everything is correct.
    console.log("Sending booking details to the backend:", bookingDetails);
    
    try {
      const response = await fetch("/api/booking/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingDetails), // Send only booking details
      });
  
      if (response.ok) {
        alert("Payment successful and booking saved!");
        navigate("/success"); // Redirect to success page after booking
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
        console.error("Error response:", errorData);
      }
    } catch (error) {
      console.error("Error saving booking:", error);
      alert("An error occurred while saving your booking. Please try again.");
    }
  };
  
  
  
  

  
  

  return (
    <main className="p-3 flex justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 w-full max-w-lg">
        {/* Booking Details */}
        <h1 className="text-3xl font-semibold text-center mb-6">Payment</h1>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">{room.name}</h2>
          <p className="text-gray-600 mb-2">{room.description}</p>
          <p className="text-lg text-gray-800">
            Regular Price: <strong>${bookingData.regularPrice}</strong>
          </p>
          <p className="text-lg text-gray-800">
            Nights: <strong>{bookingData.bedrooms}</strong>
          </p>
          <p className="text-lg text-gray-800">
            Rooms: <strong>{bookingData.numberOfRooms}</strong>
          </p>
          <p className="text-lg text-gray-800">
            Contact: <strong>{bookingData.contactNumber}</strong>
          </p>
          <p className="text-lg text-gray-800">
            Address: <strong>{bookingData.address}</strong>
          </p>
        </div>

        {/* Payment Form */}
        <form onSubmit={handlePaymentSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            pattern="[0-9]{16}"
            maxLength="16"
            title="Card number should be a 16-digit number."
            required
            className="border p-3 rounded-lg"
          />
          <input
            type="text"
            name="cardName"
            placeholder="Name on Card"
            required
            className="border p-3 rounded-lg"
          />
          <input
            type="text"
            name="expiryDate"
            placeholder="MM/YY"
            pattern="(0[1-9]|1[0-2])\/\d{2}"
            title="Expiry date should be in MM/YY format."
            required
            className="border p-3 rounded-lg"
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            pattern="[0-9]{3,4}"
            maxLength="4"
            title="CVV should be a 3 or 4-digit number."
            required
            className="border p-3 rounded-lg"
          />
          <button
            type="submit"
            className="p-3 bg-green-500 text-white rounded-lg hover:opacity-95"
          >
            Pay Now
          </button>
        </form>
        <button
          type="button"
          onClick={() => navigate(-1)} // Navigate back to the BookingNow page
          className="p-3 bg-red-500 text-white rounded-lg hover:opacity-95 mt-3"
        >
          Cancel
        </button>
      </div>
    </main>
  );
}
