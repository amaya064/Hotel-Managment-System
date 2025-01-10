import React from "react";

export default function Events() {
  return (
    <main className="relative bg-gray-100 min-h-screen py-12 px-6 lg:px-20">
      {/* Full-screen background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover brightness-75"
        src="src/videos/Events.mp4" // Replace with your video URL
        autoPlay
        muted
        loop
        playsInline
        aria-label="Background Video"
      ></video>

      {/* Content section */}
      <section className="relative z-10 text-center">
        <h1 className="text-4xl font-bold text-white mb-6 mt-6">
          Events at Our Hotel
        </h1>
      </section>

      {/* Paragraph Section */}
      <section className="relative z-10 text-center">
        <div className="bg-gray-500 text-white p-6 rounded-lg max-w-3xl mx-auto">
          <p className="text-lg mt-4">
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
        </div>
      </section>
    </main>
  );
}
