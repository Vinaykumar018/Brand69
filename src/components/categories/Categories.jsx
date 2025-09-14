import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Gym Wear",
      image:
        "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      link: "/gym",
    },
    {
      id: 2,
      name: "Anime",
      image:
        "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      link: "/anime",
    },
    {
      id: 3,
      name: "Customized",
      image:
        "https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      link: "/customized",
    },
    {
      id: 4,
      name: "Oversized",
      image:
        "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      link: "/oversized",
    },
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 tracking-tight">
            Shop by Category
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-xl mx-auto">
            Explore our stylish collections in every category
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.link}
              className="group flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
            >
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden shadow-md bg-white border-2 border-blue-500 group-hover:border-blue-600 transition-all duration-300">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="mt-3 text-sm sm:text-base font-semibold text-blue-700 group-hover:text-blue-900 transition-colors duration-300">
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
