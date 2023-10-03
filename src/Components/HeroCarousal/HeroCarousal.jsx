import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import YellowBanner from '../../Images/YellowBanner.png';
import Banner2 from '../../Images/Banner2.png';
import Banner4 from '../../Images/Banner 4.png';
import Banner5 from '../../Images/Banner 5.png';
import Banner6 from '../../Images/Banner 6.png';
import { NextArrow, PrevArrow } from "./ArrowCarousel";



const HeroCarousal = () => {
 
    const settingsLg = {
      arrows: true,
      dots:true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay : true,
      pauseOnHover: true,
      swipeToSlide:true,
      nextArrow:<NextArrow/>,
      prevArrow:<PrevArrow/>,
    };

    const settingsSm = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay : true,
      pauseOnHover: true,
      swipeToSlide:true,
      nextArrow:<NextArrow/>,
      prevArrow:<PrevArrow/>,
    };

 const HeroCarouselData=[
        YellowBanner,Banner2,Banner5,Banner4,Banner6]
  return (
    <>
    <div className="hidden lg:contents outline-none">
      <Slider {...settingsLg}>
      {
        HeroCarouselData.map((data)=>(
          <Link to={'/dog'} className="h-96 w-full ">
            <img className="h-full w-full scale-y-110 cursor-pointer " src={data} alt="CarouselImage" /></Link>
        ))
      }
      </Slider>
    </div>

    <div className="md:hidden outline-none">
      <Slider {...settingsSm}>
      {
        HeroCarouselData.map((data)=>(
        <Link to={'/dog'} className="h-48 w-full ">
            <img className="h-full w-full" src={data} alt="CarouselImage" /></Link>
        ))
      }
      </Slider>
    </div>

    <div className="hidden md:contents lg:hidden outline-none">
      <Slider {...settingsSm}>
      {
        HeroCarouselData.map((data)=>(
          <Link to={'/dog'} className="h-80 w-full ">
            <img className="h-full w-full" src={data} alt="CarouselImage" /></Link>
        ))
      }
      </Slider>
    </div>

    </>
  );
};
export default HeroCarousal;