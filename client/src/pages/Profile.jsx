import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/sign-in"); // Redirect if no token
        return;
      }

      try {
        const response = await fetch("http://localhost:3000/api/users/profile", {
          method: "POST", // POST to validate and fetch profile
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }), // Send token in the body
        });

        if (!response.ok) {
          throw new Error("Failed to fetch profile");
        }

        const data = await response.json();
        setUser(data.user);
      } catch (error) {
        console.error("Error fetching profile:", error);
        navigate("/sign-in"); // Redirect on error
      }
    };

    fetchProfile();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-blue-200 to-teal-200 flex flex-col">
      <div className="bg-white shadow-xl rounded-lg max-w-lg w-full p-8 mx-auto mt-10">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Profile Details
        </h1>
        <div className="border-t-2 border-gray-300 pt-4">
          <div className="mb-4">
            <label className="text-lg font-medium text-gray-700">Username</label>
            <p className="text-xl font-semibold text-gray-800 mt-2">
              {user.username || "N/A"}
            </p>
          </div>
          <div className="mb-6">
            <label className="text-lg font-medium text-gray-700">Email</label>
            <p className="text-xl font-semibold text-gray-800 mt-2">
              {user.email || "N/A"}
            </p>
          </div>
          <div className="text-center">
            <button
              className="bg-indigo-600 text-white py-2 px-6 rounded-full hover:bg-indigo-700 transition duration-300"
              onClick={() => navigate("/sign-in")}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto bg-gray-800 text-white py-6">
        <div className="text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Our Hotel. All Rights Reserved.
          </p>
          <p className="text-sm mt-2">
            Follow us on:{' '}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Facebook
            </a>{' '}
            |{' '}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Twitter
            </a>{' '}
            |{' '}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:underline"
            >
              Instagram
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
