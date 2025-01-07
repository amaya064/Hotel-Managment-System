import { FaSearch, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-800 via-indigo-800 to-purple-700 shadow-lg">
      <div className="max-w-7xl mx-auto p-6 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/">
          <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight flex items-center gap-2">
            <span className="text-blue-200">Hotel</span>
            <span className="text-indigo-300">Management</span>
          </h1>
        </Link>

        {/* Search Bar Section */}
        <form className="relative w-72 sm:w-96">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-3 pl-10 bg-white text-gray-800 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="absolute top-2 right-2 text-gray-600 hover:text-indigo-500 transition duration-300"
          >
            <FaSearch className="text-xl" />
          </button>
        </form>

        {/* Navigation Links */}
        <ul className="flex items-center space-x-6">
          <Link to="/">
            <li className="text-white font-medium hover:text-gray-200 transition duration-300">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="text-white font-medium hover:text-gray-200 transition duration-300">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className="text-white font-medium hover:text-gray-200 transition duration-300">
              Sign In
            </li>
          </Link>
          <Link to="/profile">
            <FaUserCircle className="text-3xl text-white hover:text-indigo-200 transition duration-300" />
          </Link>
        </ul>
      </div>
    </header>
  );
}
