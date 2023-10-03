import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Product1 from '../../Images/BestSellingProducts/Product1.png';
import Product2 from '../../Images/BestSellingProducts/Product2.png';
import Product3 from '../../Images/BestSellingProducts/Product3.png';
import Product4 from '../../Images/BestSellingProducts/Product4.png';
import Product5 from '../../Images/BestSellingProducts/Product5.png';
import {AiFillStar} from 'react-icons/ai';
import {BiRupee} from 'react-icons/bi';
import { ProductNextArrow, ProductPrevArrow } from "../HeroCarousal/ArrowCarousel";
import { Link } from "react-router-dom";

const BestSellingCarousel = () => {
 
    const settingsLg = {
      arrows: true,
      dots:false,
      infinite: true,
      speed: 800,
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplay : true,
      pauseOnHover: true,
      swipeToSlide:true,
      nextArrow:<ProductNextArrow/>,
      prevArrow:<ProductPrevArrow/>,
    };
    const settingsMd = {
        arrows: false,
        dots:false,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay : true,
        pauseOnHover: true,
        swipeToSlide:true,
        nextArrow:<ProductNextArrow/>,
        prevArrow:<ProductPrevArrow/>,
      };
    const settingsSm = {
        arrows: false,
        dots:false,
        infinite: true,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll:2,
        autoplay : true,
        pauseOnHover: true,
        swipeToSlide:true,
        nextArrow:<ProductNextArrow/>,
        prevArrow:<ProductPrevArrow/>,
      };

     const BestSellingCardDetails=[

        {
           id: 123,
           name: "Product 1",
           description: "Lorem ipsum dolor sit",
           reviews: "5,789",
           price: "1,244.00",
           image: Product1,
           mrp:"2525",
        },

        {
           id: 123,
           name: "Product 2",
           description: "Lorem ipsum dolor sit",
           reviews: "5,789",
           price: "1,244.00",
           image: Product2,
           mrp:"2525",
        },

        {
           id: 123,
           name: "Product 3",
           description: "Lorem ipsum dolor sit",
           reviews: "5,789",
           price: "1,244.00",
           image: Product3,
           mrp:"2525",
        },

        {
           id: 123,
           name: "Product 4",
           description: "Lorem ipsum dolor sit",
           reviews: "5,789",
           price: "1,244.00",
           image: Product4,
           mrp:"2525",
        },

        {
           id: 123,
            name: "Product 5",
            description: "Lorem ipsum dolor sit",
            reviews: "5,789",
            price: "1,244.00",
            image: Product5,
            mrp:"2525",
        },

        {
           id: 123,
            name: "Product 6",
            description: "Lorem ipsum dolor sit",
            reviews: "5,789",
            price: "1,244.00",
            image: Product3,
            mrp:"2525",
        },
    ];
    return (
    <>
    <div className="hidden lg:contents">
        <Slider {...settingsLg}>
        {
        BestSellingCardDetails.map((data)=>(
            <Link to={`/products/${data.id}`} className="h-full cursor-pointer w-full">
                <div className="h-full w-full flex flex-col justify-center items-center cursor-pointer ">
                    <div className="h-44 rounded-3xl w-44 flex items-center">
                        <div className="h-full w-full flex items-center justify-center rounded-3xl bg-[#FAF9F9]">
                            <img src={data.image} 
                            alt="BestSellingProducts"
                            className="h-32 w-auto transition ease-in-out delay-75 duration-500 hover:scale-125"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-col mt-6">
                            <h1 className="text-xl font-paw font-semibold">{data.name}</h1>
                            <h1 className="text-gray-500 font-paw text-lg font-semibold">{data.description}</h1>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="flex">
                                <AiFillStar className="text-yellow-300 text-xl"/>
                                <AiFillStar className="text-yellow-300 text-xl"/>
                                <AiFillStar className="text-yellow-300 text-xl"/>
                                <AiFillStar className="text-yellow-300 text-xl"/>
                                <AiFillStar className="text-yellow-300 text-xl"/>
                            </div>
                            <h1 className="text-gray-500 font-paw text- font-semibold">{data.reviews}</h1>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex items-center mt-1">
                                <BiRupee className="text-xl"/>
                                <h1 className="text-xl font-caveatB">{data.price}</h1>
                            </div>
                            <div className="flex items-center text-gray-500 mt-1">
                                    <BiRupee className="text-md "/>
                                    <h1 className="text-xs font-caveatB line-through">{data.mrp}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        ))
        }
        </Slider>
    </div>

    <div className="hidden md:contents lg:hidden">
        <Slider {...settingsMd}>
        {
        BestSellingCardDetails.map((data)=>(
            <Link to={`/products/${data.id}`} className="h-full flex flex-col w-full px-8">
                <div className="h-36 rounded-3xl w-full flex items-center">
                    <div className="h-full w-full flex items-center justify-center rounded-3xl bg-[#FAF9F9]">
                        <img src={data.image} 
                        alt="BestSellingProducts"
                        className="h-32 w-auto"
                        />
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col mt-6">
                        <h1 className="text-xl font-paw font-semibold">{data.name}</h1>
                        <h1 className="text-gray-500 font-paw text-md font-semibold">{data.description}</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex">
                            <AiFillStar className="text-yellow-300 text-xl"/>
                            <AiFillStar className="text-yellow-300 text-xl"/>
                            <AiFillStar className="text-yellow-300 text-xl"/>
                            <AiFillStar className="text-yellow-300 text-xl"/>
                            <AiFillStar className="text-yellow-300 text-xl"/>
                        </div>
                        <h1 className="text-gray-500 font-paw text- font-semibold">{data.reviews}</h1>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex items-center mt-1">
                            <BiRupee className="text-xl"/>
                            <h1 className="text-xl font-caveatB">{data.price}</h1>
                        </div>
                        <div className="flex items-center text-gray-500 mt-1">
                                <BiRupee className="text-md "/>
                                <h1 className="text-md font-caveatB line-through">{data.mrp}</h1>
                        </div>
                    </div>
                </div>
            </Link>
        ))
        }
        </Slider>
    </div>

    <div className="md:hidden lg:hidden block">
        <Slider {...settingsSm}>
        {
        BestSellingCardDetails.map((data)=>(
            <Link to={`/products/${data.id}`} className="h-full flex flex-col w-full px-2">
                <div className="flex justify-center items-center flex-col">
                    <div className="h-32 rounded-3xl w-32 flex items-center ">
                        <div className="h-full w-full flex items-center justify-center rounded-md bg-[#FAF9F9]">
                            <img src={data.image} 
                            alt="BestSellingProducts"
                            className="h-28 w-auto"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col pl-3">
                        <div className="flex flex-col mt-6">
                            <h1 className="text-sm font-paw font-semibold">{data.name}</h1>
                            <h1 className="text-gray-500 font-paw text-xs font-semibold">{data.description}</h1>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex">
                                <AiFillStar className="text-yellow-300 text-sm"/>
                                <AiFillStar className="text-yellow-300 text-sm"/>
                                <AiFillStar className="text-yellow-300 text-sm"/>
                                <AiFillStar className="text-yellow-300 text-sm"/>
                                <AiFillStar className="text-yellow-300 text-sm"/>
                            </div>
                            <h1 className="text-gray-500 font-paw text-xs font-semibold">{data.reviews}</h1>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex items-center mt-1">
                                <BiRupee className="text-sm"/>
                                <h1 className="text-sm font-caveatB">{data.price}</h1>
                            </div>
                            <div className="flex items-center text-gray-500 mt-1">
                                <BiRupee className="text-xs"/>
                                <h1 className="text-xs font-caveatB line-through">{data.mrp}</h1>
                            </div>
                        </div>
                   </div>
                </div>
            </Link>
        ))
        }
        </Slider>
    </div>
    </>
  );
};
export default BestSellingCarousel;