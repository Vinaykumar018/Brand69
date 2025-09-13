import React from 'react';
import { Sun, Moon, Menu, X, Home, User, Mail, Shirt } from 'lucide-react';
import { useToggle } from '../../context/ToggleContext'; // adjust path

const Navbar = () => {
  const { isMenuOpen, toggleMenu, isDarkMode, toggleTheme } = useToggle();

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 ${
          isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
        } shadow-md transition-colors duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                T
              </div>
              <span className="ml-2 text-xl font-bold">TeeFusion</span>
            </div>

            {/* Categories */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['Gym', 'Anime', 'Customized', 'Oversized'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className={`px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${
                      isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Right side menu */}
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6 space-x-2">
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-full ${
                    isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  } transition duration-300`}
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <a
                  href="#"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${
                    isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  About
                </a>
                <a
                  href="#"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${
                    isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className={`p-2 rounded-md ${
                  isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
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
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            } shadow-lg transition-colors duration-300`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Gym', 'Anime', 'Customized', 'Oversized'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
                <a
                  href="#"
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  About
                </a>
                <a
                  href="#"
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Bottom Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white shadow-lg border-t border-gray-200 dark:bg-gray-900 dark:border-gray-700 transition-colors duration-300">
        <div className="flex justify-around items-center h-16">
          <a href="#" className="flex flex-col items-center justify-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
            <Home size={20} />
            <span className="text-xs mt-1">Home</span>
          </a>
          <a href="#" className="flex flex-col items-center justify-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
            <Shirt size={20} />
            <span className="text-xs mt-1">Products</span>
          </a>
          <a href="#" className="flex flex-col items-center justify-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
            <User size={20} />
            <span className="text-xs mt-1">About</span>
          </a>
          <a href="#" className="flex flex-col items-center justify-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
            <Mail size={20} />
            <span className="text-xs mt-1">Contact</span>
          </a>
          <button
            onClick={toggleTheme}
            className="flex flex-col items-center justify-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            <span className="text-xs mt-1">Theme</span>
          </button>
        </div>
      </div>

      {/* Add padding to content to account for fixed navbars */}
      <div className="pt-16 pb-2"></div>
    </>
  );
};

export default Navbar;
