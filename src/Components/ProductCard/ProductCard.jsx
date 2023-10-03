import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
import {FaHeart} from "react-icons/fa";
import Dog from '../Dog/Dog';
const ProductCard = (data) => {
  return (
    <>
    
                <div className="h-full flex flex-col  cursor-pointer w-full  items-center justify-center bg-[#FAF9F9] outline-none border-2 rounded-xl ">
                 
                  <div className="h-40 rounded-3xl w-full flex mt-3 px-2">
                    <div className="h-full w-full flex items-center justify-center">
                      <img
                        src={data.image}
                        alt="DogProducts"
                        className="h-32 w-auto transitionease-in-out delay-75 duration-500 hover:scale-125"
                      />
                    </div>
                    <div className="w-6 h-6 "  >
                      <FaHeart className="h-full w-full hover:scale-125 text-gray-400 hover:duration-200"/>
                    </div>
                  </div>
                  <div className="flex w-full flex-col p-3">
                    <div className="flex flex-col ">
                      <h1 className="text-md font-paw font-semibold">
                        {data.name}
                      </h1>
                      <h1 className="text-gray-500 font-paw text-md line-clamp-2 hover:line-clamp-none font-semibold">
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
       
    </>
  )
}

export default ProductCard