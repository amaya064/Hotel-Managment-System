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

  const handleLogout = () => {
    // Remove user data from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    navigate("/sign-in"); // Redirect to sign-in page
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-2xl rounded-lg max-w-md w-full p-8">
        <div className="flex justify-center mb-8">
          <img
            src="https://www.w3schools.com/w3images/avatar2.png" // Add a default avatar or dynamic user image
            alt="User Avatar"
            className="w-24 h-24 rounded-full border-4 border-indigo-600"
          />
        </div>
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Profile Details</h1>

        <div className="space-y-6">
          <div className="flex justify-between">
            <label className="text-lg font-medium text-gray-700">Username</label>
            <p className="text-xl font-semibold text-gray-800">
              {user.username || "N/A"}
            </p>
          </div>
          <div className="flex justify-between">
            <label className="text-lg font-medium text-gray-700">Email</label>
            <p className="text-xl font-semibold text-gray-800">
              {user.email || "N/A"}
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <button
            className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition duration-300 w-full mr-2"
            onClick={() => navigate("/sign-in")}
          >
            Update
          </button>
          <button
            className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition duration-300 w-full ml-2"
            onClick={handleLogout}
          >
            LOGOUT
          </button>
        </div>
      </div>
    </div>
  );
}
