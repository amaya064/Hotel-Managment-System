import React from "react";

const relaxingFacilities = [
  {
    title: "Pool Facilities",
    description:
      "Relax by our luxurious pool area, featuring comfortable loungers, refreshing drinks, and a stunning view. Our pool is perfect for a leisurely swim or a peaceful day under the sun.",
    image: "src/images/photo12.png",
    imagePosition: "right",
  },
  {
    title: "Gym Facilities",
    description:
      "Stay fit during your stay with our state-of-the-art gym facilities. Equipped with modern machines, free weights, and personal trainers available on request.",
    image: "src/images/photo11.png",
    imagePosition: "left",
  },
  {
    title: "Sport Facilities",
    description:
      "Engage in various sports activities including tennis, basketball, and more. Our sports facilities are designed to offer fun and fitness for all age groups.",
    image: "src/images/photo13.png",
    imagePosition: "right",
  },
  {
    title: "Relaxing Area",
    description:
      "Unwind in our serene relaxing area, designed for ultimate comfort. Enjoy soft seating, soothing music, and tranquil surroundings to rejuvenate your mind and body.",
    image: "src/images/photo2.png", // Corrected the missing comma here
    imagePosition: "left",
  },
];

export default function Relaxing() {
  return (
    <main className="bg-gray-100 min-h-screen py-12 px-6 lg:px-20">
      {/* Page Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Relaxing Facilities</h1>
        <p className="text-lg text-gray-600">
          Discover our range of relaxing and recreational facilities to enhance your stay.
        </p>
      </section>

      {/* Facilities Section */}
      <section className="space-y-12">
        {relaxingFacilities.map((facility, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-8 ${
              facility.imagePosition === "right" ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <img
              src={facility.image}
              alt={facility.title}
              className="w-full lg:w-1/2 h-auto rounded-lg shadow-lg"
            />

            {/* Description */}
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{facility.title}</h2>
              <p className="text-gray-600 leading-relaxed">{facility.description}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
