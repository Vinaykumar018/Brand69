import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import gymItems from "../../data/gym.json";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import "swiper/css/pagination";

const ProductSlide1 = () => {
  const [contactVisible, setContactVisible] = useState({});

  const toggleContact = (productId) => {
    setContactVisible((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-poppins">
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Gym Collection
        </h2>
        <p className="text-base text-gray-500">
          Premium workout gear designed for performance and style
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="pb-12"
      >
        {gymItems.map((product) => (
          <SwiperSlide key={product.id} className="pb-10">
            <div
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-[420px] w-full max-w-[280px] mx-auto relative"
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

              {/* Contact Info with WhatsApp and Call Buttons */}
              {contactVisible[product.id] && (
                <div className="absolute inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 animate-fadeIn">
                  <div className="text-center space-y-3">
                    <a
                      href="https://wa.me/9336713280"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all"
                    >
                      <svg
                        className="w-6 h-6 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.134.563 4.215 1.626 6.062L0 24l6.094-1.594A11.951 11.951 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22.102c-1.891 0-3.744-.482-5.38-1.398l-.386-.205-3.608.945.964-3.522-.205-.386a9.956 9.956 0 01-1.497-5.53C2.898 6.468 7.363 2 12 2s9.102 4.468 9.102 10c0 5.531-4.465 10-9.102 10zm5.566-6.928c-.31-.155-1.833-.904-2.117-.998-.283-.094-.49-.155-.696.155-.206.31-.798.998-.975 1.203-.176.206-.352.232-.662.077-.31-.155-1.308-.482-2.496-1.54-1.833-1.627-2.99-3.633-3.34-4.243-.352-.62-.037-1.627.155-1.913.176-.258.413-.413.619-.516.206-.103.413-.103.619.052.206.154.798.672.975.904.176.232.206.413.103.672-.103.258-.31.645-.516.904-.206.258-.258.413-.052.672.206.258.904 1.102 1.936 1.782 1.032.681 1.936.904 2.496 1.032.516.103 1.032.052 1.418-.206.413-.258.904-.619 1.006-.904.103-.258.103-.516 0-.672z" />
                      </svg>
                      <span>WhatsApp: 9336713280</span>
                    </a>
                    <a
                      href="tel:9336713280"
                      className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-all"
                    >
                      <svg
                        className="w-6 h-6 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.2 2.2zm4.48-5.27c-.32-.11-.68.06-.79.38l-.57 1.71c-.11.32.06.68.38.79l2.49.83c.32.11.68-.06.79-.38l.57-1.71c.11-.32-.06-.68-.38-.79l-2.49-.83zm5.66 2.83c-.32-.11-.68.06-.79.38l-.57 1.71c-.11.32.06.68.38.79l2.49.83c.32.11.68-.06.79-.38l.57-1.71c.11-.32-.06-.68-.38-.79l-2.49-.83z" />
                      </svg>
                      <span>Call: 9336713280</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* View All Button */}
      <div className="text-center mt-12">
        <Link to="/gym" className="bg-indigo-600 text-white px-8 py-3 rounded-full font-medium hover:bg-indigo-700 transition-all shadow-md">
          View All Gym Products
        </Link>
      </div>
    </div>
  );
};

export default ProductSlide1;