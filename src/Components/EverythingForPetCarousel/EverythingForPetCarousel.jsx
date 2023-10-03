import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Litter from '../../Images/litter.png';
import Food from '../../Images/food2.png';
import Toys from '../../Images/toys2.png';
import Treats from '../../Images/treats.png';
import { PetNextArrow, PetPrevArrow } from "../HeroCarousal/ArrowCarousel";
import { Link } from "react-router-dom";


const EverythingForPetCarousel = () => {
 
    const settingsLg = {
      arrows: true,
      dots:false,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay : true,
      pauseOnHover: true,
      swipeToSlide:true,
      nextArrow:<PetNextArrow/>,
      prevArrow:<PetPrevArrow/>,
    };
    const settingsMd = {
      arrows: false,
      dots:false,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay : true,
      pauseOnHover: true,
      swipeToSlide:true,
    };
    const settingsSm = {
      arrows: false,
      dots:false,
      infinite: true,
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay : true,
      pauseOnHover: true,
      swipeToSlide:true,
    };

    const EverythingForPetDetails=[
        Litter,Food,Toys,Treats,Food,Toys
    ];

    return (
    <>
    <div className="hidden lg:contents">
      <Slider {...settingsLg}>
      {
        EverythingForPetDetails.map((data)=>(
              <Link to={'/product/treats'} className="h-48 w-full px-1">
                  <div className="h-full w-full flex items-center justify-center">
                      <img src={data} 
                      alt="EverythingForPet"
                      className="h-44 w-auto"
                      />
                  </div>
              </Link>
        ))
      }
      </Slider>
    </div>

    <div className="hidden md:contents lg:hidden">
      <Slider {...settingsMd}>
      {
        EverythingForPetDetails.map((data)=>(
              <Link to='/product/treats' className="h-28 w-auto mb-12">
                  <div className="h-full w-full flex items-center justify-center">
                      <img src={data} 
                      alt="EverythingForPet"
                      className="h-24 w-auto"
                      />
                  </div>
              </Link>
        ))
      }
      </Slider>
    </div>

    <div className="md:hidden lg:hidden">
      <Slider {...settingsSm}>
      {
        EverythingForPetDetails.map((data)=>(
              <Link to={'/product/treats'} className="h-20 w-auto ">
                  <div className="h-full w-full flex items-center justify-center">
                      <img src={data} 
                      alt="EverythingForPet"
                      className="h-16 w-auto"
                      />
                  </div>
              </Link>
        ))
      }
      </Slider>
    </div>
    </>
  );
};
export default EverythingForPetCarousel;