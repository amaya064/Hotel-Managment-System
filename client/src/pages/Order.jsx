import React, { useEffect, useState } from 'react';
import { FaHome, FaBed, FaPhone, FaMapMarkerAlt, FaCalendarAlt, FaDollarSign } from 'react-icons/fa';

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
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-teal-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Your Orders</h1>
          <p className="text-lg mb-6">Manage your bookings and view important details.</p>
        </div>
      </section>

      {/* Booking List Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {error && (
            <p className="text-red-500 text-center mb-4">{error}</p>
          )}

          {bookings.length === 0 && !error ? (
            <p className="text-gray-500 text-center">No bookings found.</p>
          ) : (
            <ul className="space-y-6">
              {bookings.map((booking) => (
                <li key={booking._id} className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300">
                  <h3 className="text-xl font-semibold text-indigo-700 mb-2">{booking.name}</h3>

                  {/* Price */}
                  <div className="flex items-center text-gray-600 mb-2">
                    <FaDollarSign className="mr-2" />
                    <span>Price: ${booking.regularPrice}</span>
                  </div>

                  {/* Bedrooms */}
                  <div className="flex items-center text-gray-600 mb-2">
                    <FaBed className="mr-2" />
                    <span>Bedrooms: {booking.bedrooms}</span>
                  </div>

                  {/* Rooms */}
                  <div className="flex items-center text-gray-600 mb-2">
                    <FaHome className="mr-2" />
                    <span>Rooms: {booking.numberOfRooms}</span>
                  </div>

                  {/* Contact Number */}
                  <div className="flex items-center text-gray-600 mb-2">
                    <FaPhone className="mr-2" />
                    <span>Contact: {booking.contactNumber}</span>
                  </div>

                  {/* Address */}
                  <div className="flex items-center text-gray-600 mb-4">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>Address: {booking.address}</span>
                  </div>

                  {/* Booked Date */}
                  <p className="text-gray-500 text-sm">
                    <FaCalendarAlt className="mr-2" />
                    Booked on: {new Date(booking.createdAt).toLocaleDateString()}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Decorative Section */}
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">
            Explore More Services
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            From room bookings to special offers, check out more of our services that may interest you.
          </p>
          <a
            href="https://www.booking.com/"
            className="bg-teal-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-teal-600 transition duration-300"
          >
            Explore Now
          </a>
        </div>
      </section>
    </div>
  );
}
