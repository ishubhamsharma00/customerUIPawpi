import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import CardDetails from '../Dog/DogCardDetail';
import CatSuppliesBanner from "../../Images/Cats Page/CatSupplies.png";
import MeowImage from "../../Images/Cats Page/Meow.png";

import Sort from "../Sort/sort";
import CatCategoryCarousel from '../Cat/CatCategoryCarousel';
import Filterbar from '../FilterSidebar/Filterbar';

const Cat = () => {
  
  return (
    <div className="w-full h-full ">
    {/* cat image banner */}
    <div className="w-full h-full ">
      <img
        src={CatSuppliesBanner}
        alt="CatSuppliesBanner"
        className="h-4/5 rounded m-auto"
      />
    </div>

    {/* Dog Category Carousel*/}
    <CatCategoryCarousel />

  
    <div className="flex h-full w-full px-4">
    {/* FILTER SECTION*/}
    <div className=" hidden  lg:block h-full w-[20%] ">
            <Filterbar />
          </div>

      <div className="h-full w-[80%] px-4  m-auto">
        <h1 className="font-paw">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Praesentium eveniet rem quis corrupti pariatur recusandae nulla,
        </h1>

        {/* Sort section */}
        <div className="my-2 mx-2">
          <Sort />
        </div>

        {/* product lists */}
        <div className=" grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-8 py-3 px-2">
          {CardDetails.map((data) => (
            <div className="h-full flex flex-col  cursor-pointer w-full  items-center justify-center bg-[#FAF9F9] outline-none border-2 rounded-xl ">
              <div className="h-40 rounded-3xl w-full flex mt-3 px-2">
                <div className="h-full w-full flex items-center justify-center scale-110    ">
                  <img
                    src={data.image}
                    alt="BestSellingProducts"
                    className="h-32 w-auto transitionease-in-out delay-75 duration-500 hover:scale-125"
                  />
                </div>
                <div className="w-6 h-6 ">
                  <FaHeart className="h-full w-full hover:scale-125 hover:text-red-500  text-gray-400 hover:duration-200" />
                </div>
              </div>
              <div className="flex flex-col p-3">
                <div className="flex flex-col ">
                  <h1 className="text-md font-paw font-semibold">
                    {data.name}
                  </h1>
                  <h1 className="text-gray-500 font-paw text-md font-semibold">
                    {data.description}
                  </h1>
                </div>
                <div className="flex items-center mt-2 gap-4">
                  <div className="flex">
                    <AiFillStar className="text-yellow-300 text-xl" />
                    <AiFillStar className="text-yellow-300 text-xl" />
                    <AiFillStar className="text-yellow-300 text-xl" />
                    <AiFillStar className="text-yellow-300 text-xl" />
                    <AiFillStar className="text-yellow-300 text-xl" />
                  </div>
                  <h1 className="text-gray-500 font-paw text- font-semibold">
                    {data.reviews}
                  </h1>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center mt-1">
                    <BiRupee className="text-xl" />
                    <h1 className="text-xl font-caveatB">{data.price}</h1>
                  </div>
                  <div className="flex items-center text-gray-500 mt-1">
                    <BiRupee className="text-md " />
                    <h1 className="text-xs font-caveatB line-through ">
                      {data.mrp}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cat Banner */}
        <div className="w-full h-full  px-2">
      <img
        src={MeowImage}
        alt="CatMeowBanner"
        className="h-4/5 w-[100%] rounded m-auto"
      />
    </div>
    {/*  Product List*/}
    <div className=" grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-8 py-3 px-2">
          {CardDetails.map((data) => (
            <div className="h-full flex flex-col  cursor-pointer w-full  items-center justify-center bg-[#FAF9F9] outline-none border-2 rounded-xl ">
              <div className="h-40 rounded-3xl w-full flex mt-3 px-2">
                <div className="h-full w-full flex items-center justify-center scale-110    ">
                  <img
                    src={data.image}
                    alt="BestSellingProducts"
                    className="h-32 w-auto transitionease-in-out delay-75 duration-500 hover:scale-125"
                  />
                </div>
                <div className="w-6 h-6 ">
                  <FaHeart className="h-full w-full hover:scale-125 hover:text-red-500  text-gray-400 hover:duration-200" />
                </div>
              </div>
              <div className="flex flex-col p-3">
                <div className="flex flex-col ">
                  <h1 className="text-md font-paw font-semibold">
                    {data.name}
                  </h1>
                  <h1 className="text-gray-500 font-paw text-md font-semibold">
                    {data.description}
                  </h1>
                </div>
                <div className="flex items-center mt-2 gap-4">
                  <div className="flex">
                    <AiFillStar className="text-yellow-300 text-xl" />
                    <AiFillStar className="text-yellow-300 text-xl" />
                    <AiFillStar className="text-yellow-300 text-xl" />
                    <AiFillStar className="text-yellow-300 text-xl" />
                    <AiFillStar className="text-yellow-300 text-xl" />
                  </div>
                  <h1 className="text-gray-500 font-paw text- font-semibold">
                    {data.reviews}
                  </h1>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center mt-1">
                    <BiRupee className="text-xl" />
                    <h1 className="text-xl font-caveatB">{data.price}</h1>
                  </div>
                  <div className="flex items-center text-gray-500 mt-1">
                    <BiRupee className="text-md " />
                    <h1 className="text-xs font-caveatB line-through ">
                      {data.mrp}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  </div>

);
};



export default Cat;