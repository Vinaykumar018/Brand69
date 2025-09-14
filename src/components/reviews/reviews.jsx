import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import reviews from "../../data/reviews.json";

const borderStyles = [
  "border-pink-400 bg-gradient-to-br from-pink-50 via-white to-pink-100",
  "border-blue-400 bg-gradient-to-br from-blue-50 via-white to-blue-100",
  "border-green-400 bg-gradient-to-br from-green-50 via-white to-green-100",
  "border-yellow-400 bg-gradient-to-br from-yellow-50 via-white to-yellow-100",
];

const ReviewSlider = () => {
  return (
    <div className="w-full py-6 px-3 sm:px-6 lg:px-10 relative">
      {/* Section Heading */}
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1 font-sans">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
          Honest words from people who love our products.
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={12}
        breakpoints={{
          0: { slidesPerView: 1 },
          480: { slidesPerView: 1.2, spaceBetween: 10 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        navigation={{ prevEl: ".review-prev", nextEl: ".review-next" }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop
        className="pb-10"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={review.id}>
            <div
              className={`flex flex-col items-center p-4 sm:p-5 rounded-xl shadow-md border h-auto min-h-[220px] transition-all duration-300 hover:scale-[1.02] ${borderStyles[index % 4]}`}
            >
              <img
                src={review.image}
                alt={review.name}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full mb-3 object-cover border-2 border-white shadow"
              />
              <h3 className="font-semibold text-sm sm:text-base text-gray-800 mb-1 text-center">
                {review.name}
              </h3>
              <p className="text-center text-gray-700 text-xs sm:text-sm leading-snug italic line-clamp-4">
                “{review.review}”
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    
    </div>
  );
};

export default ReviewSlider;
