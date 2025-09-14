import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-yellow-400 py-8 px-4 sm:px-6 lg:px-8 font-poppins">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Brand Info */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 text-yellow-300">LevelSix9</h2>
          <p className="text-sm text-gray-300 mb-3">
            Stay Bold, Stay Stylish ✨
            We print & sell premium T-shirts designed for you.
          </p>
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Owned by LevelSix9
          </p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-yellow-300">Shop Categories</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link to="/anime" className="hover:text-yellow-500 transition-colors">
                Anime
              </Link>
            </li>
            <li>
              <Link to="/customized" className="hover:text-yellow-500 transition-colors">
                Customized
              </Link>
            </li>
            <li>
              <Link to="/oversized" className="hover:text-yellow-500 transition-colors">
                Oversized
              </Link>
            </li>
            <li>
              <Link to="/gym" className="hover:text-yellow-500 transition-colors">
                Gym
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-yellow-300">Contact Us</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a
                href="mailto:katiyarabhishek040@gmail.com"
                className="hover:text-yellow-500 transition-colors"
              >
                katiyarabhishek040@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+9186046 03379"
                className="flex items-center gap-2 hover:text-yellow-500 transition-colors"
              >
                <FaPhoneAlt /> +91 86046 03379
              </a>
            </li>
            <li className="text-gray-300">
              Kakwan Road Crossing, near Ganesh Hospital
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-yellow-300">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a
              href="https://www.instagram.com/levelsix9?igsh=MWJ4eXhhbDQ5aGJvMw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/levelsix9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://wa.me/9186046 03379"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition-colors"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line slogan */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
        Stay Bold • Stay Stylish • LevelSix9 Clothing
      </div>
    </footer>
  );
};

export default Footer;