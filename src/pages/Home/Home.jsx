import React from 'react';
import Navbar from '../../components/header/navbar';
import Slider from '../../components/slider/slider';
import BrandMarquee from '../../components/marquee/marqee';
import Categories from '../../components/categories/Categories';
import ProductSlide1 from '../../components/products/productSlide1';
import ProductSlide2 from '../../components/products/ProductSlide2';
import ProductSlide3 from '../../components/products/productSlide3';
import ProductSlide4 from '../../components/products/productSlide4';
import ReviewSlider from '../../components/reviews/reviews';
import Footer from '../../components/footer/footer';


const Home = () => {
  return (
    <div>
      
      <BrandMarquee></BrandMarquee>
      <Slider></Slider>
      <Categories></Categories>
      <ProductSlide1></ProductSlide1>
      <ProductSlide2></ProductSlide2>
      <ProductSlide3></ProductSlide3>
      <ProductSlide4></ProductSlide4>
      <ReviewSlider></ReviewSlider>
      
    </div>
  );
}

export default Home;
