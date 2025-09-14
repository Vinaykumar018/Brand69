import React, { useState } from "react";
import customizedItems from "../../data/customizedCollection.json";

const ProductDetails3 = () => {
  const [contactVisible, setContactVisible] = useState({});

  const toggleContact = (productId) => {
    setContactVisible((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-poppins">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Customized Collection
        </h2>
        <p className="text-base text-gray-500">
          Explore all premium workout gear in one place.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {customizedItems.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col relative cursor-pointer"
            onClick={() => toggleContact(product.id)}
          >
            {/* Image hover flip */}
            <div className="relative h-56 w-full overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
              />
              <img
                src={product.backImage}
                alt={`${product.name} back`}
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col flex-1 justify-between p-4">
              <div>
                <h3 className="text-lg font-semibold text-indigo-600 truncate">
                  {product.name}
                </h3>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-lg font-semibold text-indigo-600">
                    ₹{product.price || 300}
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    ₹{product.originalPrice || 500}
                  </span>
                </div>
              </div>

              {/* Buy Now Button */}
              <div className="mt-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleContact(product.id);
                  }}
                  className="w-full bg-indigo-600 text-white py-2 rounded-full font-medium hover:bg-indigo-700 transition-all duration-300 shadow-sm"
                >
                  Buy Now
                </button>
              </div>
            </div>

            {/* Contact Info Overlay */}
            {contactVisible[product.id] && (
              <div className="absolute inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 animate-fadeIn">
                <div className="text-center space-y-3">
                  <a
                    href="https://wa.me/86046 03379"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all"
                  >
                    <span className="mr-2">💬</span> WhatsApp: 86046 03379
                  </a>
                  <a
                    href="tel:86046 03379"
                    className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-all"
                  >
                    <span className="mr-2">📞</span> Call: 86046 03379
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails3;
