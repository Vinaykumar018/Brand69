import React from "react";
import { Link } from "react-router-dom";
import { FaTshirt, FaInstagram, FaFacebookF, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const About = () => {
  return (
    <div className="w-full bg-gray-100 min-h-screen font-poppins">
      {/* Hero Section */}
      <div className="bg-black text-yellow-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">About LevelSix9</h1>
          <p className="text-base sm:text-lg text-yellow-300 max-w-2xl mx-auto">
            Stay Bold • Stay Stylish • LevelSix9 Clothing
          </p>
        </div>
      </div>

      {/* Brand Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Founded with a passion for self-expression, LevelSix9 is more than just a clothing brand—it's a lifestyle. We believe in empowering individuals to embrace their unique style through high-quality, custom-printed T-shirts. Based at Kakwan Road Crossing, near Ganesh Hospital, we craft apparel that resonates with boldness and creativity.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-yellow-400 text-black rounded-xl py-8 px-6 mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-sm sm:text-base max-w-2xl mx-auto">
            At LevelSix9, we aim to redefine streetwear by offering premium T-shirts that blend comfort, style, and individuality. Our slogan, <span className="font-semibold">Stay Bold • Stay Stylish</span>, drives us to create clothing that makes you stand out, whether you're hitting the gym, vibing with anime, or rocking a custom design.
          </p>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8">Our Collections</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Gym", path: "/gym", desc: "Gear up with performance-driven workout apparel." },
              { name: "Anime", path: "/anime", desc: "Celebrate your favorite anime with vibrant designs." },
              { name: "Customized", path: "/customized", desc: "Create your own unique T-shirt masterpiece." },
              { name: "Oversized", path: "/oversized", desc: "Embrace bold, relaxed fits for ultimate style." },
            ].map((category) => (
              <div
                key={category.name}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <FaTshirt className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{category.desc}</p>
                <Link
                  to={category.path}
                  className="inline-block bg-black text-yellow-400 px-4 py-2 rounded-full font-medium hover:bg-yellow-400 hover:text-black transition-all"
                >
                  Shop {category.name}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">Get in Touch</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:katiyarabhishek040@gmail.com"
                  className="text-yellow-600 hover:text-yellow-500 transition-colors"
                >
                  katiyarabhishek040@gmail.com
                </a>
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Address:</span> Kakwan Road Crossing, near Ganesh Hospital
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-semibold">Phone:</span>{" "}
                <a
                  href="tel:+919336713280"
                  className="text-yellow-600 hover:text-yellow-500 transition-colors"
                >
                  +91 9336713280
                </a>
              </p>
              <div className="flex justify-center gap-4 text-xl mt-4">
                <a
                  href="https://www.instagram.com/levelsix9?igsh=MWJ4eXhhbDQ5aGJvMw%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-500 transition-colors"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.facebook.com/levelsix9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://wa.me/919336713280"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-500 transition-colors"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link
            to="/"
            className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-full font-medium hover:bg-yellow-500 transition-all shadow-md"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;