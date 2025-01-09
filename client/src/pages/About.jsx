import React from "react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <section
        className="flex-grow flex flex-col items-center justify-center"
        style={{
          fontFamily: "'Roboto', sans-serif",
          backgroundImage: "url('src/images/photo3.png')", // Replace with your full background photo path
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="max-w-4xl rounded-lg shadow-lg overflow-hidden"
          style={{
            margin: "2rem",
            borderRadius: "16px",
            position: "relative",
          }}
        >
          {/* Background Image inside the box */}
          <div
            className="w-full h-full absolute top-0 left-0"
            style={{
              backgroundImage: "url('src/images/photo2.png')", // Replace with your box background photo path
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: -1,
            }}
          ></div>

          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            style={{
              zIndex: 0,
            }}
          ></div>

          {/* Content */}
          <div
            className="p-8 relative text-white"
            style={{
              zIndex: 1,
              backdropFilter: "blur(4px)",
            }}
          >
            {/* Header */}
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">About Us</h1>
              <p className="text-lg">
                Discover who we are and what makes us the perfect choice for your stay.
              </p>
            </div>

            {/* Introduction */}
            <section className="mt-8">
              <p className="text-justify leading-relaxed">
                Welcome to{" "}
                <strong className="text-red-400">Our Hotel Management Site</strong>! 
                We specialize in offering seamless solutions for all your hotel management needs. 
                Our platform is designed with a commitment to delivering excellence, 
                ensuring your stay or hotel operations are as smooth as possible. 
              </p>
            </section>

            {/* Mission and Vision */}
            <section className="mt-10">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold">Our Mission</h2>
                <p className="mt-2 leading-relaxed">
                  To provide exceptional experiences by blending cutting-edge technology with 
                  personalized services that make hotel management efficient and enjoyable for all.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Our Vision</h2>
                <p className="mt-2 leading-relaxed">
                  To become the go-to platform for hospitality solutions, empowering hoteliers to 
                  deliver world-class services while simplifying operations.
                </p>
              </div>
            </section>

            {/* Our Story */}
            <section className="mt-10">
              <h2 className="text-2xl font-semibold">Our Story</h2>
              <p className="mt-2 leading-relaxed">
                Our journey began in 2010, when a team of passionate individuals came together 
                with the vision of transforming the hospitality industry. From humble beginnings, 
                we have grown to serve thousands of hotels and guests worldwide. 
              </p>
            </section>

            {/* Call to Action */}
            <section className="mt-10 text-center">
              <h2 className="text-2xl font-semibold">Get in Touch</h2>
              <p className="mt-2 leading-relaxed">
                We would love to hear from you! For inquiries, collaborations, or feedback, 
                reach out to us at{" "}
                <a
                  href="mailto:info@yourwebsite.com"
                  className="text-blue-300 font-bold hover:underline"
                >
                  info@yourwebsite.com
                </a>
                .
              </p>
            </section>

            {/* Social Media */}
            <div className="mt-10 text-center">
              <h3 className="text-xl font-semibold">Follow Us</h3>
              <div className="flex justify-center space-x-6 mt-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  <i className="fab fa-facebook fa-2x"></i>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-blue-500"
                >
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-600"
                >
                  <i className="fab fa-instagram fa-2x"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
