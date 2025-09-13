import React from 'react';
import Navbar from '../../components/header/navbar';
import Slider from '../../components/slider/slider';
import BrandMarquee from '../../components/marquee/marqee';
import Categories from '../../components/categories/Categories';
import ProductSlide from '../../components/products/productSlide';


const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <BrandMarquee></BrandMarquee>
      <Slider></Slider>
      <Categories></Categories>
      <ProductSlide></ProductSlide>
    </div>
  );
}

export default Home;
