import React from 'react'
import { Link } from 'react-router-dom';
import Dog from '../../Images/PopularCategoryHomepage/dog.png';
import Cat from '../../Images/PopularCategoryHomepage/cats.png';
import Cloths from '../../Images/PopularCategoryHomepage/cloths.png';
import Food from '../../Images/PopularCategoryHomepage/foods.png';
import Toys from '../../Images/PopularCategoryHomepage/toy.png';
import Garbs from '../../Images/PopularCategoryHomepage/garbs.png';
import Extra from '../../Images/PopularCategoryHomepage/extra.png';
import Bed from '../../Images/PopularCategoryHomepage/beds.png';

const categories = [
  { id: 1, name: 'Dogs', image: Dog, bgColor: 'bg-red-500', bordercolor: "border-red-500" },
  { id: 2, name: 'Cats', image: Cat, bgColor: 'bg-[#AED2FF]', bordercolor: "border-[#AED2FF]" },
  { id: 3, name: 'Food', image: Food, bgColor: 'bg-[#A8DF8E]', bordercolor: "border-[#A8DF8E]" },
  { id: 4, name: 'Toys', image: Toys, bgColor: 'bg-[#C23373]', bordercolor: "border-[#C23373]" },
  { id: 5, name: 'Garbs', image: Garbs, bgColor: 'bg-[#FBD85D]', bordercolor: "border-[#FBD85D]" },
  { id: 6, name: 'Extra', image: Extra, bgColor: 'bg-[#E8D2A6]', bordercolor: "border-[#E8D2A6]" },
  { id: 7, name: 'Bed', image: Bed, bgColor: 'bg-[#BFACE2]', bordercolor: "border-[#BFACE2]" },
];


const PopularCategories = () => {
  return (
    <div className="flex items-center justify-between md:w-[90%] w-full m-auto h-full px-6 md:py-10 py-6 gap-14 md:gap-20 overflow-x-auto">
      {categories.map((category) => (
        <Link to={`/category/${category.name}`} key={category.id}>
          <div className="flex flex-col items-center">
            <div className={`md:h-28 md:w-28 h-24 w-24 rounded-xl ${category.bgColor}`}>
              <img src={category.image} alt={category.name} className="w-full h-full p-2 md:p-4" />
              <div className={`md:h-28 md:w-28 h-24 w-24 relative md:-top-28 -top-24 border rounded-xl ${category.bordercolor} duration-500 rotate-45 hover:rotate-90 hover:duration-500`} />
            </div>
            <p className="text-center font-Raleway font-semibold text-xl md:text-2xl pt-4 md:pt-5">{category.name}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default PopularCategories;