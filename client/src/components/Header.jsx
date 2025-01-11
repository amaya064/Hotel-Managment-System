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
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight flex items-center space-x-3">
            <span className="text-indigo-600 text-5xl">
              <i className="fas fa-hotel"></i> {/* Hotel icon */}
            </span>
            <span className="text-indigo-700">INO</span>
            <span className="text-gray-800">Holiday</span>
          </h1>
        </Link>

        {/* Navigation Links with Icons */}
        <ul className="flex items-center space-x-8">
          <Link to="/">
            <li className="flex items-center text-gray-800 font-medium hover:text-indigo-500 transition duration-300">
              <i className="fas fa-home mr-2"></i> Home
            </li>
          </Link>
          <Link to="/about">
            <li className="flex items-center text-gray-800 font-medium hover:text-indigo-500 transition duration-300">
              <i className="fas fa-info-circle mr-2"></i> About
            </li>
          </Link>
          {email ? (
            <>
              <li
                className="flex items-center text-gray-800 font-medium hover:text-indigo-500 transition duration-300 cursor-pointer"
                onClick={() => navigate('/profile')}
              >
                <i className="fas fa-user mr-2"></i> {email}
              </li>
            </>
          ) : (
            <Link to="/sign-in">
              <li className="flex items-center text-gray-800 font-medium hover:text-indigo-500 transition duration-300">
                <i className="fas fa-sign-in-alt mr-2"></i> Sign In
              </li>
            </Link>
          )}
        </ul>
      </div>
    </header>
  );
}
