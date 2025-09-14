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
      src: "https://www.bewakoof.com/blog/wp-content/uploads/2023/11/Oversized-t-shirt.jpg",
      alt: "Fashion Collection",
      title: "Summer Collection 2023",
      description: "Discover our new summer arrivals"
    },
    {
      id: 2,
      src: "https://www.underratedclub.com/cdn/shop/articles/SEO_Banners-Skinny_banner_1_-min_9f54855c-ee26-4c07-b12f-d646c178a242.jpg?v=1734591528&width=1100",
      alt: "Casual Wear",
      title: "Casual Essentials",
      description: "Comfort meets style in our casual collection"
    },
    {
      id: 3,
      src: "https://skream.in/cdn/shop/articles/REGULA_1__SKREAM_BEAM_OVERSIZED_T-SHIRT_Skream.in.webp?v=1709143945",
      alt: "Formal Collection",
      title: "Elegant Formal Wear",
      description: "Perfect outfits for special occasions"
    }
  ];

  return (
    <div className="w-full px-2 sm:px-4">
      <Swiper
        modules={[ Autoplay]}
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
          
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
