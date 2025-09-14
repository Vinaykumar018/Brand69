import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Gym Wear",
      image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=80",
      link: "/category/gym"
    },
    {
      id: 2,
      name: "Anime",
      image: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWUlMjB0ZWUlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=80",
      link: "/category/anime"
    },
    {
      id: 3,
      name: "Customized",
      image: "https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3VzdG9taXplZCUyMHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=80",
      link: "/category/customized"
    },
    {
      id: 4,
      name: "Oversized",
      image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG92ZXJzaXplZCUyMHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=80",
      link: "/category/oversized"
    },
    {
      id: 5,
      name: "Graphic Tees",
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdyYXBoaWMlMjB0ZWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=80",
      link: "/category/graphic-tees"
    },
    {
      id: 6,
      name: "Casual",
      image: "https://images.unsplash.com/photo-1506634572416-48cdfe530110?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNhc3VhbCUyMHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=80",
      link: "/category/casual"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 tracking-wide">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
            Discover our diverse collection of trendy and comfortable clothing
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-10">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.link}
              className="group flex flex-col items-center text-center transition-all duration-500 hover:scale-105"
            >
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mb-5 rounded-full overflow-hidden shadow-xl bg-white p-2 border-4 border-white group-hover:border-purple-300 transition-all duration-500">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full"></div>
              </div>
              <h3 className="font-semibold text-gray-700 group-hover:text-purple-600 transition-colors duration-500 text-base sm:text-lg tracking-wide">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;