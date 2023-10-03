// FILTER SIDE BAR FOR LARGE SCREEN //
import React from "react";
import { MdStarRate } from "react-icons/md";
import { BiRupee } from "react-icons/bi";
import BrandFilterSlider from "../Dog/BrandFilterSlider";
import RangeSlider from "../RangeSlider/RangeSlider";

const Filterbar = () => {
  return (
    <>
      {/* FILTER SECTION*/}
      {/* Filter By Rating */}

      <div className="h-full w-full ">
        <h1 className=" lg:text-xl font-semibold font-paw">Filter By Rating</h1>
        <div className="py-3">
          <div className="flex gap-1 items-center justify-between ">
            <div className="flex">
              <input type="radio" name="radio" id="radio" />
              <MdStarRate className="text-yellow-300 lg:text-xl text-sm" />
              <MdStarRate className="text-yellow-300 lg:text-xl text-sm" />
              <MdStarRate className="text-yellow-300 lg:text-xl text-sm" />
              <MdStarRate className="text-yellow-300 lg:text-xl text-sm" />
              <MdStarRate className="text-yellow-300 lg:text-xl text-sm" />
            </div>
            <h1 className="text-md ">(5 star)</h1>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex">
              <input type="radio" name="radio" id="radio" />
              <MdStarRate className="text-yellow-300 text-xl" />
              <MdStarRate className="text-yellow-300 text-xl" />
              <MdStarRate className="text-yellow-300 text-xl" />
              <MdStarRate className="text-yellow-300 text-xl" />
              <MdStarRate className="text-gray-200 text-xl" />
            </div>
            <h1 className="text-md ">(4 star)</h1>
          </div>
          <div className="flex gap-1 items-center justify-between">
            <div className="flex ">
              <input type="radio" name="radio" id="radio" />
              <MdStarRate className="text-yellow-300 text-xl" />
              <MdStarRate className="text-yellow-300 text-xl" />
              <MdStarRate className="text-yellow-300 text-xl" />
              <MdStarRate className="text-gray-200 text-xl" />
              <MdStarRate className="text-gray-200 text-xl" />
            </div>
            <h1 className="text-md">(3 star)</h1>
          </div>
          <div className="flex gap-1 items-center justify-between">
            <div className="flex">
              <input type="radio" name="radio" id="radio" />
              <MdStarRate className="text-yellow-300 text-xl" />
              <MdStarRate className="text-yellow-300 text-xl" />
              <MdStarRate className="text-gray-200 text-xl" />
              <MdStarRate className="text-gray-200 text-xl" />
              <MdStarRate className="text-gray-200 text-xl" />
            </div>
            <h1 className="text-md">(2 star)</h1>
          </div>
          <div className="flex gap-1 items-center justify-between ">
            <div className="flex">
              <input type="radio" name="radio" id="radio" />
              <MdStarRate className="text-yellow-300 text-xl" />
              <MdStarRate className="text-gray-200 text-xl" />
              <MdStarRate className="text-gray-200 text-xl" />
              <MdStarRate className="text-gray-200 text-xl" />
              <MdStarRate className="text-gray-200 text-xl" />
            </div>
            <h1 className="text-md">(1 star)</h1>
          </div>
        </div>

        <div className="border border-y-2 border-x-0 border-slate-300 w-full">
          {/* Filter By Price */}
          <div className="py-3 h-full w-full">
            <h1 className="  text-xl  font-semibold font-paw">
              Filter By Price
            </h1>
            <div className="h-full w-full">
              <RangeSlider className="w-full h-full" />
            </div>
            <div className=" flex font-paw text-xs">
              <span className="text-gray-400 mr-1 ">Price:</span> <BiRupee />
              30 - <BiRupee />
              3000
            </div>
          </div>
        </div>

        {/* Filter By Brand */}
        <div>
          <div>
            <h1 className="font-paw text-xl font-semibold py-3">
              Filter By Brands
            </h1>
          </div>
          <BrandFilterSlider />
        </div>

        <div className="border border-y-2 border-x-0 py-3  border-slate-300">
          {/* Filter By Lifestage */}
          <h1 className="  text-xl font-paw  font-semibold">
            Filter By Lifestage
          </h1>
          <div className="flex gap-1 items-center py-1 font-paw">
            <input type="radio" name="radio" id="radio" />
            <h1 className="text-md ml-3 py-1 ">
              All Stages <span className="ml-3"></span>
            </h1>
          </div>
          <div className="flex gap-1 items-center py-1 font-paw">
            <input type="radio" name="radio" id="radio" />
            <h1 className="text-md  ml-3 py-1 ">
              0-3 Months <span className="ml-3">(Starter)</span>{" "}
            </h1>
          </div>
          <div className="flex gap-1 items-center py-1 font-paw">
            <input type="radio" name="radio" id="radio" />
            <h1 className="text-md ml-3 py-1 ">
              0.3-2 Years <span className="ml-3">(Puppy)</span>
            </h1>
          </div>
          <div className="flex gap-1 items-center py-1 font-paw">
            <input type="radio" name="radio" id="radio" />
            <h1 className="text-md ml-3 py-1 ">
              2 years to So On <span className="ml-3">(Adult)</span>
            </h1>
          </div>
        </div>
      </div>

      {/* FILTER SECTION FOR SMALL  AND MID DEVICE*/}

      {/* Filter By Rating */}
   
    </>
  );
};

export default Filterbar;
