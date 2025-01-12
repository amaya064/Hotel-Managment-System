import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/users/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userEmail', formData.email);
        setMessage('Sign-in successful!');
        navigate('/');
      } else {
        setMessage(data.message || 'Invalid credentials');
      }
    } catch (error) {
      setMessage('Error during sign-in.');
      console.error('Error:', error);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-4"
      style={{
        background: 'linear-gradient(135deg, rgb(34, 34, 34), rgb(48, 48, 48))',
      }}
    >
      {/* Sign-In Card */}
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-2xl border border-gray-200">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
          >
            Sign In
          </button>
        </form>

        {message && (
          <div className="mt-4 text-center">
            <p
              className={`text-lg font-medium ${
                message.includes('successful') ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {message}
            </p>
          </div>
        )}

        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{' '}
          <a
            href="/sign-up"
            className="text-blue-600 font-medium hover:underline"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
