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
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: "url('src/images/photo3.png')", // Replace with the path to your background photo
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-white shadow-xl rounded-lg max-w-lg w-full p-8 mx-auto mt-10">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Profile Details</h1>
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
              Update
            </button>
          </div>
          <div className="text-center mt-4">
            <button
              className="bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700 transition duration-300"
              onClick={handleLogout}
            >
              LOGOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
