import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full bg-gray-100 min-h-screen font-poppins">
      {/* Hero Section */}
      <div className="bg-black text-yellow-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Contact LevelSix9</h1>
          <p className="text-base sm:text-lg text-yellow-300 max-w-2xl mx-auto">
            Stay Bold • Stay Stylish • LevelSix9 Clothing
          </p>
          <p className="text-sm sm:text-base text-gray-300 mt-2">
            We're here to help! Reach out with any questions or feedback.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-yellow-400 text-xl" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">Email</p>
                  <a
                    href="mailto:katiyarabhishek040@gmail.com"
                    className="text-yellow-600 hover:text-yellow-500 transition-colors"
                  >
                    katiyarabhishek040@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-yellow-400 text-xl" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">Phone</p>
                  <a
                    href="tel:+9186046 03379"
                    className="text-yellow-600 hover:text-yellow-500 transition-colors"
                  >
                    +91 86046 03379
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-yellow-400 text-xl" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">Address</p>
                  <p className="text-gray-600">Kakwan Road Crossing, near Ganesh Hospital</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaInstagram className="text-yellow-400 text-xl" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">Follow Us</p>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="https://www.instagram.com/levelsix9?igsh=MWJ4eXhhbDQ5aGJvMw%3D%3D&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-pink-500 transition-colors"
                    >
                      <FaInstagram className="text-xl" />
                    </a>
                    <a
                      href="https://www.facebook.com/levelsix9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-500 transition-colors"
                    >
                      <FaFacebookF className="text-xl" />
                    </a>
                    <a
                      href="https://wa.me/9186046 03379"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-green-500 transition-colors"
                    >
                      <FaWhatsapp className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-800">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-800">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-black text-yellow-400 px-6 py-3 rounded-full font-medium hover:bg-yellow-400 hover:text-black transition-all shadow-md"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-8">
        <Link
          to="/"
          className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-full font-medium hover:bg-yellow-500 transition-all shadow-md"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Contact;