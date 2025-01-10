import React from "react";

export default function Events() {
  return (
    <main className="bg-gray-100 min-h-screen py-12 px-6 lg:px-20">
      {/* Video Section */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Events at Our Hotel</h1>
        <video
          className="w-full max-w-md mx-auto rounded-lg shadow-lg"
          controls
          src="https://www.w3schools.com/html/mov_bbb.mp4" // Replace with your video URL
        >
          Your browser does not support the video tag.
        </video>
        <p className="text-gray-600 text-lg mt-4">
          At our hotel, we specialize in hosting a wide range of events that cater to diverse needs and
          preferences. From corporate conferences, seminars, and workshops to personal celebrations such as
          weddings, anniversaries, and family reunions, our event spaces are designed to offer the perfect
          setting for every occasion. Our versatile venues can be customized to meet your specific requirements,
          whether you're looking for an intimate gathering or a grand celebration. We provide state-of-the-art
          equipment, high-speed internet, and on-site support to ensure a smooth and successful event. With
          professional event coordinators, chefs offering tailored catering options, and a dedicated team to assist
          you at every step, we guarantee a seamless and memorable experience. Whether you're hosting a corporate
          event or celebrating a personal milestone, we are committed to providing exceptional service and creating
          lasting memories for you and your guests. Every detail, from the decor to the menu, will be meticulously
          planned to reflect your vision and needs.
        </p>
      </section>
    </main>
  );
}
