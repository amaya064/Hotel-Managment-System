import React from "react";

// Sample data for demonstration. You can replace it with API data in the future.
const facilities = [
  {
    id: 1,
    title: "Accomodation",
    description:
      "Our rooms are equipped with modern amenities like air conditioning, Wi-Fi, flat-screen TVs, and more for your comfort.",
    image: "src/images/photo1.png",
  },
  {
    id: 2,
    title: "Dinning",
    description:
      "Enjoy a variety of delicious cuisines prepared by our world-class chefs. From local delicacies to international dishes, we have it all.",
    image: "src/images/photo7.png",
  },
  {
    id: 3,
    title: "Relaxing",
    description:
      "Relax and unwind by our luxurious pool area, featuring a stunning view and a bar serving refreshing drinks.",
    image: "src/images/photo6.png",
  },
  {
    id: 4,
    title: "Events",
    description:
      "Experience a warm welcome at our beautifully designed reception area, staffed 24/7 for your convenience.",
    image: "src/images/photo4.png",
  },
];

export default function Home() {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        backgroundImage: "url('src/images/photo3.png')", // Corrected the path to match relative paths for static assets
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#fff", // Ensure text contrasts well with the background image
      }}
    >
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
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
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
