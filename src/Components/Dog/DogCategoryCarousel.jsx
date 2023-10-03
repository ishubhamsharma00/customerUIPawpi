import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import DogCategoryDetails from "./DogCategoryDetails";
import { PetNextArrow, PetPrevArrow } from "../HeroCarousal/ArrowCarousel";
import { Link } from "react-router-dom";

const DogCategoryCarousel = () => {
 
    const settingsLg = {
      arrows: true,
      dots:false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
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
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay : true,
      pauseOnHover: true,
    };
    const settingsSm = {
      arrows: false,
      dots:false,
      infinite: true,
      speed: 800,
      slidesToShow: 3,
      slidesToScroll: 2,
      autoplay : true,
      pauseOnHover: true,
    };

    return (
    <>
    <div className="hidden lg:contents">
      <Slider {...settingsLg}>
      {
        DogCategoryDetails.map((data)=>(
              <div className="h-60 w-full pt-20 pl-12 pr-12">
                <Link to={`/dogs/${data.id}`} className="h-full w-full">
                  <div className="h-32 w-32 rounded-3xl relative" style={{backgroundColor:data.backgroundColor}}>
                    <div className="uppercase absolute top-24 left-1 z-20 text-xl font-archivoBlack text-gray-800 font-semibold drop-shadow-lg shadow-white transform -skew-y-3">
                      {data.name}
                    </div>
                  </div>
                  <img src={data.image} 
                      alt="EverythingForPet"
                      className="h-36 w-32 z-10 relative left-5 -top-40 hover:animate-pulse"
                    />
                </Link>
              </div>
        ))
      }
      </Slider>
    </div>

    <div className="hidden md:contents lg:hidden">
      <Slider {...settingsMd}>
      {
        DogCategoryDetails.map((data)=>(
          <div className="h-56 w-full pt-16 pl-10 pr-12">
          <Link to={`/dogs/${data.id}`} className="h-full w-full">
            <div className="h-28 w-32 rounded-3xl relative" style={{backgroundColor:data.backgroundColor}}>
              <div className="uppercase absolute top-20 left-1 z-20 text-lg font-archivoBlack text-gray-800 font-semibold drop-shadow-lg shadow-white transform -skew-y-3">
                {data.name}
              </div>
            </div>
            <img src={data.image} 
                alt="EverythingForPet"
                className="h-32 w-28 z-10 relative left-5 -top-36"
              />
          </Link>
        </div>
        ))
      }
      </Slider>
    </div>

    <div className="md:hidden">
      <Slider {...settingsSm}>
      {
        DogCategoryDetails.map((data)=>(
          <div className="h-52 w-full pt-14 mt-6 mx-3">
          <Link to={`/dogs/${data.id}`} className="h-full w-full">
            <div className="h-24 w-28 rounded-3xl relative" style={{backgroundColor:data.backgroundColor}}>
              <div className="uppercase absolute top-14 left-1 z-20 text-md font-archivoBlack text-gray-800 drop-shadow-lg shadow-white transform -skew-y-3">
                {data.name}
              </div>
            </div>
            <img src={data.image} 
                alt="EverythingForPet"
                className="h-24 w-20 z-10 relative left-8 -top-32"
              />
          </Link>
        </div>
        ))
      }
      </Slider>
    </div>
    </>
  );
};
export default DogCategoryCarousel;