import React, { useEffect, useState } from 'react';

export default function Order() {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBookings = async () => {
      const email = localStorage.getItem('userEmail'); // Retrieve the email of the signed-in user
      try {
        const response = await fetch(`http://localhost:3000/api/booking/${email}`);
        const data = await response.json();

        if (response.ok) {
          setBookings(data); // Set bookings if fetch is successful
        } else {
          setError(data.message || 'Failed to fetch bookings.');
        }
      } catch (err) {
        setError('An error occurred while fetching bookings.');
        console.error('Error:', err);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-semibold text-center mb-6">Your Bookings</h2>

      {error && (
        <p className="text-red-500 text-center mb-4">{error}</p>
      )}

      {bookings.length === 0 && !error ? (
        <p className="text-gray-500 text-center">No bookings found.</p>
      ) : (
        <ul className="space-y-4">
          {bookings.map((booking) => (
            <li key={booking._id} className="p-4 bg-white shadow rounded">
              <h3 className="text-xl font-semibold">{booking.name}</h3>
              <p>Price: ${booking.regularPrice}</p>
              <p>Bedrooms: {booking.bedrooms}</p>
              <p>Rooms: {booking.numberOfRooms}</p>
              <p>Contact: {booking.contactNumber}</p>
              <p>Address: {booking.address}</p>
              <p className="text-gray-500 text-sm">Booked on: {new Date(booking.createdAt).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
