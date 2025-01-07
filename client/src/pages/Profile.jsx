import React, { useState } from "react";

export default function Profile() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("https://via.placeholder.com/100");
  const [list, setList] = useState([
    {
      id: 1,
      username: "defaultUser",
      password: "defaultPass",
    },
  ]);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdate = (id) => {
    const updatedList = list.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          username: username || item.username, // Retain old username if the new one is not provided
          password: password || item.password, // Retain old password if the new one is not provided
        };
      }
      return item;
    });
    setList(updatedList);
    setUsername("");
    setPassword("");
    console.log("Updated:", { id, username, password });
  };

  const handleDelete = (id) => {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
    console.log("Deleted item with ID:", id);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="max-w-4xl mx-auto p-6 bg-gray-50 shadow-lg rounded-lg mt-6">
        {/* Profile Picture */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={avatar}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-gray-200 object-cover"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="mt-4 text-sm text-gray-600"
          />
          <h1 className="text-2xl font-bold text-gray-800 mt-4">Profile</h1>
        </div>

        {/* Form */}
        <form className="space-y-4 mb-6">
          <div>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
            />
          </div>

          <div>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
        </form>

        {/* Buttons */}
        <div className="flex justify-center space-x-4 mb-6">
          <button
            type="button"
            onClick={() => handleUpdate(1)} // Always update the first account (ID = 1)
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 disable:opacity-80"
          >
            Update
          </button>
          <button
            type="button"
            onClick={() => handleDelete(1)} // Always delete the first account (ID = 1)
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-400"
          >
            Delete Account
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 bg-gray-800 text-white py-6">
        <div className="text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Our Hotel. All Rights Reserved.
          </p>
          <p className="text-sm mt-2">
            Follow us on:{" "}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Facebook
            </a>{" "}
            |{" "}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Twitter
            </a>{" "}
            |{" "}
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
