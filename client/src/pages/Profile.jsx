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
    <div className="flex flex-col min-h-screen">
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center">Profile</h1>
        <div className="mt-6">
          <p>
            <strong>Username:</strong> {user.username || "N/A"}
          </p>
          <p>
            <strong>Email:</strong> {user.email || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}
