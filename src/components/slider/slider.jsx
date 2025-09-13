import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
  const sliderImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Fashion Collection",
      title: "Summer Collection 2023",
      description: "Discover our new summer arrivals"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Casual Wear",
      title: "Casual Essentials",
      description: "Comfort meets style in our casual collection"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1566206091558-7f218b696731?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Formal Collection",
      title: "Elegant Formal Wear",
      description: "Perfect outfits for special occasions"
    }
  ];

  return (
    <div className="w-full px-2 sm:px-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-56 sm:h-64 md:h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg"
      >
        {sliderImages.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            <img 
              src={slide.src} 
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white p-2 sm:p-4 text-center">
              <h2 className="text-lg sm:text-2xl md:text-4xl font-bold mb-1 sm:mb-2">
                {slide.title}
              </h2>
              <p className="text-sm sm:text-base md:text-xl mb-2 sm:mb-4">
                {slide.description}
              </p>
              <button className="bg-white text-gray-800 text-xs sm:text-sm md:text-base px-3 sm:px-6 py-1 sm:py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Shop Now
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
