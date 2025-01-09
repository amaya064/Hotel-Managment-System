import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const [email, setEmail] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Get user email from localStorage
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const handleLogout = () => {
    // Remove user data from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    setEmail(null); // Clear email state
    navigate("/sign-in"); // Redirect to sign-in page
  };

  return (
    <header className="bg-gradient-to-r from-white via-gray-100 to-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto p-6 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight">
            <span className="text-indigo-600">Hotel</span>
            <span className="text-gray-700">Management</span>
          </h1>
        </Link>

        {/* Search Bar Section */}
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="w-72 sm:w-96 p-3 pl-12 bg-white text-gray-800 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="absolute top-1/2 transform -translate-y-1/2 right-2 text-gray-600 hover:text-indigo-500 transition duration-300"
          >
            <span className="material-icons">search</span>
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center space-x-8">
          <Link to="/">
            <li className="text-gray-800 font-medium hover:text-indigo-500 transition duration-300">Home</li>
          </Link>
          <Link to="/about">
            <li className="text-gray-800 font-medium hover:text-indigo-500 transition duration-300">About</li>
          </Link>
          {email ? (
            <>
              <li
                className="text-gray-800 font-medium hover:text-indigo-500 transition duration-300 cursor-pointer"
                onClick={() => navigate('/profile')}
              >
                {email}
              </li>
              
            </>
          ) : (
            <Link to="/sign-in">
              <li className="text-gray-800 font-medium hover:text-indigo-500 transition duration-300">Sign In</li>
            </Link>
          )}
        </ul>
      </div>
    </header>
  );
}
