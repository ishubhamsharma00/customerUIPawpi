import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BiRupee, BiSort } from "react-icons/bi";
import { FaFilter, FaHeart } from "react-icons/fa";
import Sort from "../Sort/sort";
import Filterbar from "../FilterSidebar/Filterbar";
import { Link } from "react-router-dom";
import CollectionCategoryCarousel from "./CollectionCategoryCarousel";
import { useProductContext } from "../../context";
import LoadingPage from "../LoadingPage/Loadingpage";
import WoofBanner from '../../Images/DogsPage/woof.png'
import DogSuppliesBanner from '../../Images/DogsPage/dogsupplies.png'


const CollectionComponent = () => {
  const [openSort, setOpenSort] = useState(false);
  const [open, setOpen] = useState(false);

  const { products } = useProductContext();

  const toggleSidebar = () => {
    setOpen(!open);
    if (open) {
      setOpenSort(false);
    }
    if (openSort) {
      setOpenSort(false);
    }
  };

  const handleopenSort = () => {
    setOpenSort(!openSort);
    if (openSort) {
      setOpen(false);
    }
    if (open) {
      setOpen(false);
    }
  };


  if(!products ){
    return(
      <LoadingPage />
    )
  }

  return (
    <>
      <div className={`w-full h-full `}>
        <div className="lg:hidden w-full h-full z-50">
          <button
            className="fixed lg:hidden z-50 bottom-0 left-0 bg-black w-1/2 h-10  flex justify-center items-center font-paw text-yellow-300 text-2xl"
            onClick={handleopenSort}
          >
            <BiSort />
            Sort
          </button>
          <button
            className="fixed lg:hidden z-50 bottom-0 right-0 bg-black w-1/2 h-10  flex justify-center items-center font-paw text-yellow-300 text-2xl"
            onClick={toggleSidebar}
          >
            <FaFilter />
            Filter
          </button>

          {openSort && (
            <div className="hidden md:flex lg:hidden w-full right-0 fixed  bottom-10 justify-center items-end z-50">
              <div
                className="w-full bg-purple-100 rounded-t-xl border-2 border-gray-400 pt-2 overflow-y-scroll max-h-64"
                style={{ maxHeight: "94vh" }}
              >
                <div className="p-4">
                  <Sort />
                </div>
              </div>
            </div>
          )}

          {openSort && (
            <div className="md:hidden w-full right-0 fixed  bottom-10 justify-center items-end z-50">
              <div
                className="w-full bg-purple-100 rounded-t-xl border-2 border-gray-400 pt-2 overflow-y-scroll max-h-64"
                style={{ maxHeight: "94vh" }}
              >
                <div className="p-4">
                  <Sort />
                </div>
              </div>
            </div>
          )}
          {open && (
            <div className="hidden md:flex lg:hidden w-full right-0 fixed  bottom-10 justify-center items-end z-50">
              <div
                className="w-full bg-purple-100 rounded-t-xl border-2 border-gray-400 pt-2 overflow-y-scroll max-h-64"
                style={{ maxHeight: "94vh" }}
              >
                <div className="p-4">
                  <Filterbar />
                </div>
              </div>
            </div>
          )}

          {open && (
            <div className="flex md:hidden  fixed inset-0 bottom-10 justify-center items-end z-50">
              <div
                className="w-full bg-purple-100 rounded-t-lg overflow-y-scroll max-h-64"
                style={{ maxHeight: "94vh" }}
              >

                <div className="p-4">
                  <Filterbar />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="w-full h-[70vh]">
          <img
            src={DogSuppliesBanner}
            alt="DogSuppliesBanner"
            className="w-full h-full"
          />
        </div>

        <div className="md:mx-6 md:mb-6  -z-10 -mt-2">
          <CollectionCategoryCarousel />
        </div>

        <div className="flex h-full w-full px-4">
          <div className="h-full w-[20%] hidden lg:block lg:h-screen lg:sticky lg:top-0 lg:border-y lg:border-black lg:py-2 lg:overflow-y-auto">
            <Filterbar />
          </div>

          <div className="h-full w-full  lg:w-[80%] md:px-4  m-auto">
            <h1 className="font-paw pb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium eveniet rem quis corrupti pariatur recusandae nulla,
            </h1>

            <div className="md:mx-0 my-2 mx-2 hidden lg:block  sticky top-0 h-16 shadow-md w-full p-6 z-10 bg-white ">
              <Sort />
            </div>

            <div className=" grid grid-cols-2 w-full md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-8 py-3">
              { products && products.length > 0 &&  products.map((data, index) => (
                <Link
                  key={index}
                  to={`/products/${data._id}`}
                  className="h-full flex flex-col   cursor-pointer w-full  items-center justify-center bg-[#FAF9F9] outline-none border-2 rounded-xl "
                >
                  <div className="h-40 rounded-3xl w-full flex mt-3 px-2">
                    <div className="h-full w-full flex items-center justify-center scale-110    ">
                      <img
                        src={data.photos[0]}
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
                      <h1 className="text-gray-500 font-paw text-md font-semibold line-clamp-2 hover:line-clamp-none ">
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
                      <h1 className="text-gray-500 font-paw  text- font-semibold">
                        8585
                      </h1>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex items-center mt-1">
                        <BiRupee className="text-xl" />
                        <h1 className="text-xl font-caveatB">{data.Variants[0].MRP}</h1>
                      </div>
                      <div className="flex items-center text-gray-500 mt-1">
                        <BiRupee className="text-md " />
                        <h1 className="text-xs font-caveatB line-through ">
                          {data.Variants[0].MRP}
                        </h1>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
 
            <div className="w-full h-full py-4 lg:py-8">
              <img src={WoofBanner} alt="DogWoofBanner" className="" />
            </div>

            <div className=" grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-8 py-3 px-2">
              {products && products.length > 0 && products.map((data, index) => (
                <Link
                  key={index}
                  to={`/product/${data._id}`}
                  className="h-full flex flex-col  cursor-pointer w-full  items-center justify-center bg-[#FAF9F9] outline-none border-2 rounded-xl "
                >
                  <div className="h-40 rounded-3xl w-full flex mt-3 px-2">
                    <div className="h-full w-full flex items-center justify-center">
                      <img
                        src={data.photos[0]}
                        alt="BestSellingProducts"
                        className="h-32 w-auto transitionease-in-out delay-75 duration-500 hover:scale-125"
                      />
                    </div>
                    <div className="w-6 h-6 ">
                      <FaHeart className="h-full w-full hover:scale-125 hover:text-red-500  text-gray-400 hover:duration-200" />
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
                        4567
                      </h1>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex items-center mt-1">
                        <BiRupee className="text-xl" />
                        <h1 className="text-xl font-caveatB">{data.Variants[0].MRP}</h1>
                      </div>
                      <div className="flex items-center text-gray-500 mt-1">
                        <BiRupee className="text-md " />
                        <h1 className="text-xs font-caveatB line-through ">
                          {data.Variants[0].MRP}
                        </h1>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollectionComponent;
