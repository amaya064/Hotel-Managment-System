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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Video */}
      <div className="relative h-screen bg-black">
        <video
          className="absolute inset-0 w-full h-full object-cover brightness-50"
          src="src/videos/Home.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Background Video"
        ></video>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4 leading-tight">Welcome to Our Hotel</h1>
            <p className="text-xl">
              Discover luxury, comfort, and exceptional service at every turn.
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white py-12 px-6 lg:px-20 text-center">
        <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
          At our hotel, we are committed to providing an unforgettable experience for all
          our guests. Whether you're here for leisure, business, or a special occasion,
          you'll find modern amenities, exceptional hospitality, and a welcoming
          atmosphere that will make your stay truly memorable.
        </p>
      </div>

      {/* Facilities Section */}
      <div className="max-w-6xl mx-auto py-16 px-6 lg:px-20">
        <h2 className="text-4xl font-semibold text-center mb-12 text-gray-800">
          Explore Our Premium Facilities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-12">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              className="bg-white shadow-md rounded-lg overflow-hidden transform transition hover:scale-105 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-0 transition duration-300"></div>
              </div>

              {/* Details */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {facility.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{facility.description}</p>
                <button
                  onClick={() => navigate(facility.link)} // Navigate to the respective facility page
                  className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 transition-all duration-200"
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
