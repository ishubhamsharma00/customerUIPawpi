// import { Fragment } from "react";
// import { Menu, Transition } from "@headlessui/react";
// import { BiChevronDown } from "react-icons/bi";

import { useState } from "react";
import CardDetails from "../Collection/CollectionCardDetail";
// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function Sort() {
  const [price, setprice] = useState(CardDetails);

  const filterPrice = (price) => {
    setprice(
      CardDetails.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <>
      {/* FOR LARGE SCREEN */}
      <div className="hidden lg:flex items-center justify-between flex-wrap w-full ">
        <div className="text-md font-semibold"> Sort By:</div>
        <button
          onClick={() => setprice(price)}
          className="bg-green-400 rounded-xl opacity-75 p-1 ring-green-200 ring text-md font-semibold w-[20%] "
        >
          Relevance
        </button>
        <button
          // onClick={() => filterType("burger")}
          className="bg-green-400 rounded-xl opacity-75 p-1  ring-green-200 ring text-md font-semibold  w-[20%]"
        >
          Popularity
        </button>
        <button
          // onClick={() => filterType("pizza")}
          className="bg-green-400  rounded-xl opacity-75 p-1  ring-green-200 ring text-md font-semibold w-[20%]"
        >
          High to Low
        </button>
        <button
          // onClick={() => filterType("salad")}
          className="bg-green-400  rounded-xl opacity-75 p-1  ring-green-200 ring text-md font-semibold  w-[20%] "
        >
          Low to High
        </button>
      </div>

      {/* // FOR SM AND MD DEVICES // */}
     
      <div className="bottom-0 lg:hidden w-full flex flex-col gap-2 font-paw">
        {/* <h1 className="font-paw font-semibold text-gray-500 text-center justify-center">Sort By</h1> */}
        <div className="text-xl font-semibold m-auto"> Sort By:</div>
        <button
          onClick={() => setprice(price)}
          className="bg-green-400 rounded-xl opacity-75 p-1 ring-green-200 ring text-md font-semibold w-full "
        >
          Relevance
        </button>
        <button
          // onClick={() => filterType("burger")}
          className="bg-green-400 rounded-xl opacity-75 p-1  ring-green-200 ring text-md font-semibold  w-full"
        >
          Popularity
        </button>
        <button
          // onClick={() => filterType("pizza")}
          className="bg-green-400  rounded-xl opacity-75 p-1  ring-green-200 ring text-md font-semibold w-full"
        >
          High to Low
        </button>
        <button
          // onClick={() => filterType("salad")}
          className="bg-green-400  rounded-xl opacity-75 p-1  ring-green-200 ring text-md font-semibold  w-full "
        >
          Low to High
        </button>
      </div>
 
    </>
  );
}
