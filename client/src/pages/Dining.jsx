import React from 'react';

export default function Dining() {
  const dishes = [
    {
      name: "Seafood Platter",
      description: "A mix of fresh shrimp, lobster, and scallops, served with lemon butter sauce.",
      price: "$45",
      image: "src/images/photo14.png",
    },
    {
      name: "Sushi Platter",
      description: "A beautifully presented assortment of fresh sushi rolls and sashimi.",
      price: "$40",
      image: "src/images/photo15.png",
    },
    {
      name: "Lobster Thermidor",
      description: "A rich and creamy lobster dish baked to perfection with cheese and herbs.",
      price: "$50",
      image: "src/images/photo16.png",
    },
  ];

  return (
    <main className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[url('https://via.placeholder.com/1600x600?text=Dining+Experience')] bg-cover bg-center h-[400px] flex items-center justify-center">
        <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center text-white">
        <video
      className="absolute inset-0 w-full h-full object-cover brightness-75"
      src="src/videos/Dining.mp4"
      autoPlay
      muted
      loop
      playsInline
      aria-label="Background Video"
    ></video>
          <h1 className="text-4xl font-bold mb-4">Dining Experience</h1>
          <p className="text-lg">
            Enjoy world-class cuisine in an elegant and relaxing atmosphere.
          </p>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-12 px-6 lg:px-20">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Featured Dishes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                <p className="text-gray-600 mb-4">{dish.description}</p>
                <p className="text-lg font-bold">{dish.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-slate-700 text-white py-12 px-6 lg:px-20">
        <h2 className="text-3xl font-semibold text-center mb-6">Reserve Your Table</h2>
        <p className="text-center mb-8">
          Plan your dining experience with us. Call now to book a table or make inquiries.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button className="bg-white text-slate-700 px-6 py-3 rounded-lg font-semibold hover:opacity-90">
            Call Us: (123) 456-7890
          </button>
          <button className="bg-white text-slate-700 px-6 py-3 rounded-lg font-semibold hover:opacity-90">
            Send Inquiry
          </button>
        </div>
      </section>
    </main>
  );
}
