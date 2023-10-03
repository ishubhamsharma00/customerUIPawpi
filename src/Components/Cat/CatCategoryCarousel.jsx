import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Food from '../../Images/DogsPage/food.png';
import Chews from '../../Images/DogsPage/chews.png';
import Toys from "../../Images/DogsPage/toys.png";
import BeddingAndMats from "../../Images/DogsPage/beddingandmats.png";
import Groom from "../../Images/DogsPage/groom.png";
import WalkEssentials from "../../Images/DogsPage/walkessentials.png"
import { PetNextArrow, PetPrevArrow } from "../HeroCarousal/ArrowCarousel";


const CatCategoryCarousel = () => {
 
    const settingsLg = {
      arrows: true,
      dots:false,
      infinite: true,
      speed: 1000,
      slidesToShow: 6,
      slidesToScroll: 4,
      autoplay : true,
      pauseOnHover: true,
      nextArrow:<PetNextArrow/>,
      prevArrow:<PetPrevArrow/>,
    };
    const settingsMd = {
      arrows: false,
      dots:false,
      infinite: true,
      speed: 1000,
      slidesToShow: 5,
      slidesToScroll: 3,
      autoplay : true,
      pauseOnHover: true,
    };
    const settingsSm = {
      arrows: false,
      dots:false,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplay : true,
      pauseOnHover: true,
    };

    const DogCategoryDetails=[
        Food,Chews,Toys,BeddingAndMats,Groom,WalkEssentials,
        
    ];

    return (
    <>
    <div className="hidden lg:contents">
      <Slider {...settingsLg}>
      {
        DogCategoryDetails.map((data)=>(
              <div className="h-48 w-full px-1">
                  <div className="h-full w-full flex items-center justify-center ">
                      <img src={data} 
                      alt="EverythingForDog"
                      className="h-44 w-44  rounded-full"
                      />
                  </div>
              </div>
        ))
      }
      </Slider>
    </div>

    <div className="hidden md:contents lg:hidden">
      <Slider {...settingsMd}>
      {
        DogCategoryDetails.map((data)=>(
              <div className="h-28 w-auto mb-12">
                  <div className="h-full w-full flex items-center justify-center">
                      <img src={data} 
                      alt="EverythingForPet"
                      className="h-24 w-auto"
                      />
                  </div>
              </div>
        ))
      }
      </Slider>
    </div>

    <div className="md:hidden lg:hidden">
      <Slider {...settingsSm}>
      {
        DogCategoryDetails.map((data)=>(
              <div className="h-20 w-auto ">
                  <div className="h-full w-full flex items-center justify-center">
                      <img src={data} 
                      alt="EverythingForDog"
                      className="h-16 w-auto"
                      />
                  </div>
              </div>
        ))
      }
      </Slider>
    </div>
    </>
  );
};
export default CatCategoryCarousel;