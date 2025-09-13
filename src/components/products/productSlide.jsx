import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Heart, ShoppingCart, Eye, Star } from 'lucide-react';
import gymItems from '../../data/gym.json'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProductSlide = () => {
  const [wishlist, setWishlist] = useState([]);
  const [imageStatus, setImageStatus] = useState({});

  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  const handleImageError = (productId, imageType) => {
    setImageStatus(prev => ({
      ...prev,
      [`${productId}-${imageType}`]: 'error'
    }));
  };

  const handleImageLoad = (productId, imageType) => {
    setImageStatus(prev => ({
      ...prev,
      [`${productId}-${imageType}`]: 'loaded'
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-['Inter']">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-light text-gray-800 mb-4">Gym Collection</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Premium workout gear designed for performance and style
        </p>
      </div>
      
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="pb-12"
      >
        {gymItems.map((product) => {
          const frontImageStatus = imageStatus[`${product.id}-front`];
          const backImageStatus = imageStatus[`${product.id}-back`];
          
          return (
            <SwiperSlide key={product.id} className="pb-10">
              <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl">
                {/* Product Image Container with Hover Effect */}
                <div className="relative overflow-hidden h-80">
                  {/* Front Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0 ${
                      frontImageStatus === 'error' ? 'hidden' : ''
                    }`}
                    onError={() => handleImageError(product.id, 'front')}
                    onLoad={() => handleImageLoad(product.id, 'front')}
                  />
                  
                  {/* Back Image on Hover */}
                  <img
                    src={product.backImage}
                    alt={product.name}
                    className={`absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      backImageStatus === 'error' ? 'hidden' : ''
                    }`}
                    onError={() => handleImageError(product.id, 'back')}
                    onLoad={() => handleImageLoad(product.id, 'back')}
                  />
                  
                  {/* Fallback if both images fail to load */}
                  {(frontImageStatus === 'error' && backImageStatus === 'error') && (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <div className="text-gray-400 text-center">
                        <ShoppingCart size={40} className="mx-auto mb-2" />
                        <p>Image not available</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-white bg-opacity-95 px-3 py-1.5 rounded-full shadow-sm">
                    <span className="text-xs font-medium text-gray-800 uppercase tracking-wide">
                      {product.category}
                    </span>
                  </div>
                  
                  {/* Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className={`absolute top-4 right-4 p-2.5 rounded-full transition-all duration-300 ${
                      wishlist.includes(product.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white bg-opacity-95 text-gray-600 hover:bg-red-500 hover:text-white'
                    }`}
                  >
                    <Heart size={18} fill={wishlist.includes(product.id) ? 'currentColor' : 'none'} />
                  </button>
                  
                  {/* Quick View Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500 flex items-center justify-center">
                    <button className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 bg-white text-gray-800 px-6 py-3 rounded-full font-medium hover:bg-purple-600 hover:text-white shadow-lg">
                      <Eye size={18} className="inline mr-2" />
                      Quick View
                    </button>
                  </div>
                  
                  {/* Discount Badge */}
                  <div className="absolute bottom-4 left-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    -20%
                  </div>
                </div>
                
                {/* Product Details */}
                <div className="p-5">
                  <div className="flex items-center mb-2">
                    <div className="flex text-amber-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={16}
                          fill={star <= 4 ? 'currentColor' : 'none'}
                          className={star <= 4 ? 'text-amber-400' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-2">(42)</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
                    {product.name}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2 h-10">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-purple-600">
                        ${product.price}
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        ${(product.price * 1.25).toFixed(2)}
                      </span>
                    </div>
                    
                    <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2.5 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg">
                      <ShoppingCart size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      
      {/* View All Button */}
      <div className="text-center mt-12">
        <button className="bg-white border-2 border-purple-500 text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
          View All Gym Products
        </button>
      </div>
    </div>
  );
};

export default ProductSlide;