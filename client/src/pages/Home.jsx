import React from "react";
import { useNavigate } from "react-router-dom";

// Sample data for demonstration. You can replace it with API data in the future.
const facilities = [
  {
    id: 1,
    title: "Accommodation",
    description:
      "Our rooms are equipped with modern amenities like air conditioning, Wi-Fi, flat-screen TVs, and more for your comfort.",
    image: "src/images/photo1.png",
    link: "/accommodation",
  },
  {
    id: 2,
    title: "Dining",
    description:
      "Enjoy a variety of delicious cuisines prepared by our world-class chefs. From local delicacies to international dishes, we have it all.",
    image: "src/images/photo7.png",
    link: "/dining",
  },
  {
    id: 3,
    title: "Relaxing",
    description:
      "Relax and unwind by our luxurious pool area, featuring a stunning view and a bar serving refreshing drinks.",
    image: "src/images/photo6.png",
    link: "/relaxing",
  },
  {
    id: 4,
    title: "Events",
    description:
      "Experience a warm welcome at our beautifully designed reception area, staffed 24/7 for your convenience.",
    image: "src/images/photo4.png",
    link: "/events",
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Main Content */}
      <div
        className="flex-grow max-w-6xl mx-auto p-6 bg-gray-50 shadow-lg rounded-lg"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }} // Semi-transparent background for content
      >
        {/* Page Header */}
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Welcome to Our Hotel
        </h1>

        {/* Facilities Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              {/* Image */}
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-48 object-cover"
              />

              {/* Details */}
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">
                  {facility.title}
                </h2>
                <p className="text-gray-600 mt-2">{facility.description}</p>

                {/* Button to navigate to the facility page */}
                <button
                  onClick={() => navigate(facility.link)} // Navigate to the respective facility page
                  className="mt-4 w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
