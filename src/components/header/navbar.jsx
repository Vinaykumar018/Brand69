import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Menu, X, Home, User, Mail, Shirt } from 'lucide-react';
import { useToggle } from '../../context/ToggleContext'; // Adjust path as needed

const Navbar = () => {
  const { isMenuOpen, toggleMenu, isDarkMode, toggleTheme } = useToggle();

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 ${
          isDarkMode ? 'bg-gray-900 text-white' : 'bg-black text-yellow-400'
        } shadow-md transition-colors duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center text-black font-bold">
                  L6
                </div>
                <span className="ml-2 text-xl font-bold">LevelSix9</span>
              </Link>
            </div>

            {/* Categories */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {[
                  { name: 'Gym', path: '/gym' },
                  { name: 'Anime', path: '/anime' },
                  { name: 'Customized', path: '/customized' },
                  { name: 'Oversized', path: '/oversized' },
                ].map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${
                      isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-yellow-500 hover:text-black'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right side menu */}
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6 space-x-2">
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-full ${
                    isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-yellow-500 hover:text-black'
                  } transition duration-300`}
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <Link
                  to="/about"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${
                    isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-yellow-500 hover:text-black'
                  }`}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${
                    isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-yellow-500 hover:text-black'
                  }`}
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className={`p-2 rounded-md ${
                  isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-yellow-500 hover:text-black'
                } focus:outline-none transition duration-300`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isMenuOpen && (
          <div
            className={`md:hidden ${
              isDarkMode ? 'bg-gray-800' : 'bg-black text-yellow-400'
            } shadow-lg transition-colors duration-300`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { name: 'Gym', path: '/gym' },
                { name: 'Anime', path: '/anime' },
                { name: 'Customized', path: '/customized' },
                { name: 'Oversized', path: '/oversized' },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-yellow-500 hover:text-black'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
                <Link
                  to="/about"
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-yellow-500 hover:text-black'
                  }`}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-yellow-500 hover:text-black'
                  }`}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Bottom Mobile Navigation */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-40 ${
          isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-black text-yellow-400'
        } shadow-lg border-t border-gray-200 dark:border-gray-700 transition-colors duration-300`}
      >
        <div className="flex justify-around items-center h-16">
          <Link
            to="/"
            className="flex flex-col items-center justify-center hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300"
          >
            <Home size={20} />
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link
            to="/products"
            className="flex flex-col items-center justify-center hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300"
          >
            <Shirt size={20} />
            <span className="text-xs mt-1">Products</span>
          </Link>
          <Link
            to="/about"
            className="flex flex-col items-center justify-center hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300"
          >
            <User size={20} />
            <span className="text-xs mt-1">About</span>
          </Link>
          <Link
            to="/contact"
            className="flex flex-col items-center justify-center hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300"
          >
            <Mail size={20} />
            <span className="text-xs mt-1">Contact</span>
          </Link>
          <button
            onClick={toggleTheme}
            className="flex flex-col items-center justify-center hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            <span className="text-xs mt-1">Theme</span>
          </button>
        </div>
      </div>

      {/* Add padding to content to account for fixed navbars */}
      <div className="pt-16 pb-16 md:pb-0"></div>
    </>
  );
};

export default Navbar;