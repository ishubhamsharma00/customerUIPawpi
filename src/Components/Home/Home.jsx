import React, { useState } from "react";
import Brands from "../Brands/Brands";
import Banner2 from "../../Images/Banner2.png";
import BrandBG from "../../Images/brandbackground.jpg";
import PetProfileBanner from "../../Images/petprofilebanner.png";
import { Link } from "react-router-dom";
import ReviewCarousel from "../../Components/ReviewCarousel/ReviewCarousel";
import DogBedbanner from "../../Images/dogbedbanner.png";
import BlueBanner from "../../Images/vet.png";
import HeroCarousal from "../HeroCarousal/HeroCarousal";
import MainCategory from "../MainCategory/MainCategory";
import CategoryDesign from "../CategoryDesign/CategoryDesign";
import BestSellingCarousel from "../BestSellingProducts/BestSellingCarousel";
import EverythingForPetCarousel from "../EverythingForPetCarousel/EverythingForPetCarousel";
import SpecialSubCategory from "../SpecialSubCategory/SpecialSubCategory";

//New development
import MainBanner from '../../Images/MainBanner.png';
import Dog from '../../Images/PopularCategoryHomepage/dog.png';
import Cat from '../../Images/PopularCategoryHomepage/cats.png';
import Cloths from '../../Images/PopularCategoryHomepage/cloths.png';
import Food from '../../Images/PopularCategoryHomepage/foods.png';
import Toys from '../../Images/PopularCategoryHomepage/toy.png';
import Garbs from '../../Images/PopularCategoryHomepage/garbs.png';
import Extra from '../../Images/PopularCategoryHomepage/extra.png';
import Bed from '../../Images/PopularCategoryHomepage/beds.png';

import Redshampoo from "../../Images/Popular Product/shampoo.png"
import Xmint from "../../Images/Popular Product/xmint.png"
import Bowjerky from "../../Images/Popular Product/bowjerky.png"
import BubbleUp from "../../Images/Popular Product/bubbleup.png"

import FideleText from "../../Images/Fideletext.png"
import Fidele1 from "../../Images/fideleadult.png"
import Fidele2 from "../../Images/fidelelargeadult.png"
import Fidele3 from "../../Images/fidelelargepuppy.png"
import Fidele4 from "../../Images/fidelepuppy.png"


import Chews from "../../Images/PopularCategoryHomepage/chews.png"
import BoneToys from "../../Images/PopularCategoryHomepage/bonetoys.png"
import DandruffShampoo from "../../Images/PopularCategoryHomepage/dandruffshampoo.png"
import Leashes from "../../Images/PopularCategoryHomepage/leashes.png"
import Treats from "../../Images/PopularCategoryHomepage/treats.png"

import popularProductsGif from '../../Images/popularProducts.gif';
import appleGif from '../../Images/apple.gif';
import clothGif from '../../Images/cloth.gif';
import pawGif from '../../Images/paw.gif';
import boatGif from '../../Images/boat.gif';

import shampoo from '../../Images/shampoo.png';
import topLeft from '../../Images/topLeft.png';
import topRight from '../../Images/topRight.png';
import left from '../../Images/left.png';

import greenShampoo from '../../Images/greenShampoo.png';
import greenLeft from '../../Images/greenLeft.png';
import greenTopLeft from '../../Images/greenTopLeft.png';
import greenTopRight from '../../Images/greenTopRight.png';

import pinkShampoo from '../../Images/pinkShampoo.png';
import pinkLeft from '../../Images/pinkLeft.png';
import pinkTopLeft from '../../Images/pinkTopLeft.png';
import pinkTopRight from '../../Images/pinkTopRight.png';

import ourValues1 from '../../Images/ourValues1.png';
import ourValues2 from '../../Images/ourValues2.png';
import ourValues3 from '../../Images/ourValues3.png';

import specialProductBanner from '../../Images/specialProductBanner.png';

import Image1 from "../../Images/instafam/image1.png"
import Image2 from "../../Images/instafam/image2.png"
import Image3 from "../../Images/instafam/image3.png"
import Image4 from "../../Images/instafam/image4.png"


import tNeLeft from '../../Images/t&eLeft.png';
import tNeMiddleTop from '../../Images/t&eMiddleTop.png';
import tNeMiddleBottom from '../../Images/t&eMiddleBottom.png';
import tNeRight from '../../Images/t&eRight.png';

import followUs from '../../Images/followUs.png';
import followUsInsta from '../../Images/followUsInsta.png';

//brands
import NUTRO from "../../Images/Brands/nutro.png";
import ROYALCANIN from "../../Images/Brands/royalcanin.png";
import ACANA from "../../Images/Brands/acana.png";
import KONG from "../../Images/Brands/kong.png";
import NULO from "../../Images/Brands/nulo.png";
import AJ from "../../Images/Brands/aj.png";
import HILLS from "../../Images/Brands/hills.png";
import TRIXIE from "../../Images/Brands/trixie.png";
import Marquee from 'react-fast-marquee';
const Home = () => {

  //useState for animation activation
  const [animationActivate, setAnimationActivate] = useState(false);
  const [greenAnimationActivate, setGreenAnimationActivate] = useState(false);
  const [pinkAnimationActivate, setPinkAnimationActivate] = useState(false);




  const brands = [
    {
      id: 1,
      name: NUTRO
    },
    {
      id: 2,
      name: ROYALCANIN
    },
    {
      id: 3,
      name: ACANA
    },
    {
      id: 4,
      name: KONG
    },
    {
      id: 5,
      name: NULO
    },
    {
      id: 6,
      name: AJ
    },
    {
      id: 7,
      name: HILLS
    },
    {
      id: 8,
      name: TRIXIE
    },

  ]

  const data = [
    { id: 1, name: NUTRO, brand: 1, description: 'Description for Product 1', rating: 4.5, price: 2999 },
    { id: 2, name: NUTRO, brand: 1, description: 'Description for Product 2', rating: 4.2, price: 3999 },
    { id: 3, name: NUTRO, brand: 1, description: 'Description for Product 3', rating: 4.8, price: 4999 },
    { id: 4, name: NUTRO, brand: 1, description: 'Description for Product 4', rating: 4.0, price: 1999 },
    { id: 1, name: ROYALCANIN, brand: 2, description: 'Description for Product 1', rating: 4.5, price: 2999 },
    { id: 2, name: ROYALCANIN, brand: 2, description: 'Description for Product 2', rating: 4.2, price: 3999 },
    { id: 3, name: ROYALCANIN, brand: 2, description: 'Description for Product 3', rating: 4.8, price: 4999 },
    { id: 4, name: ROYALCANIN, brand: 2, description: 'Description for Product 4', rating: 4.0, price: 1999 },
    { id: 1, name: ACANA, brand: 3, description: 'Description for Product 1', rating: 4.5, price: 2999 },
    { id: 2, name: ACANA, brand: 3, description: 'Description for Product 2', rating: 4.2, price: 3999 },
    { id: 3, name: ACANA, brand: 3, description: 'Description for Product 3', rating: 4.8, price: 4999 },
    { id: 4, name: ACANA, brand: 3, description: 'Description for Product 4', rating: 4.0, price: 1999 },
    { id: 1, name: KONG, brand: 4, description: 'Description for Product 1', rating: 4.5, price: 2999 },
    { id: 2, name: KONG, brand: 4, description: 'Description for Product 2', rating: 4.2, price: 3999 },
    { id: 3, name: KONG, brand: 4, description: 'Description for Product 3', rating: 4.8, price: 4999 },
    { id: 4, name: KONG, brand: 4, description: 'Description for Product 4', rating: 4.0, price: 1999 },
    { id: 1, name: NULO, brand: 5, description: 'Description for Product 1', rating: 4.5, price: 2999 },
    { id: 2, name: NULO, brand: 5, description: 'Description for Product 2', rating: 4.2, price: 3999 },
    { id: 3, name: NULO, brand: 5, description: 'Description for Product 3', rating: 4.8, price: 4999 },
    { id: 4, name: NULO, brand: 5, description: 'Description for Product 4', rating: 4.0, price: 1999 },
    { id: 1, name: AJ, brand: 6, description: 'Description for Product 1', rating: 4.5, price: 2999 },
    { id: 2, name: AJ, brand: 6, description: 'Description for Product 2', rating: 4.2, price: 3999 },
    { id: 3, name: AJ, brand: 6, description: 'Description for Product 3', rating: 4.8, price: 4999 },
    { id: 4, name: AJ, brand: 6, description: 'Description for Product 4', rating: 4.0, price: 1999 },
    { id: 1, name: HILLS, brand: 7, description: 'Description for Product 1', rating: 4.5, price: 2999 },
    { id: 2, name: HILLS, brand: 7, description: 'Description for Product 2', rating: 4.2, price: 3999 },
    { id: 3, name: HILLS, brand: 7, description: 'Description for Product 3', rating: 4.8, price: 4999 },
    { id: 4, name: HILLS, brand: 7, description: 'Description for Product 4', rating: 4.0, price: 1999 },
    { id: 1, name: TRIXIE, brand: 8, description: 'Description for Product 1', rating: 4.5, price: 2999 },
    { id: 2, name: TRIXIE, brand: 8, description: 'Description for Product 2', rating: 4.2, price: 3999 },
    { id: 3, name: TRIXIE, brand: 8, description: 'Description for Product 3', rating: 4.8, price: 4999 },
    { id: 4, name: TRIXIE, brand: 8, description: 'Description for Product 4', rating: 4.0, price: 1999 },
    // Add more products as needed
  ];



  //useState for active Brand Product selection
  const [activeBrand, setActiveBrand] = useState(1);
  const handleActiveBrand = (option) => {
    setActiveBrand(option);
  }

  // Filter products based on the active brand
  const filteredProducts = data.filter(item => item.brand === activeBrand);

  return (
    <>
      <div className="w-full h-full flex flex-col gap-6">

        {/*HERO-CAROUSEL */}
        <div className="w-full h-full lg:-z-10 outline-none">
          <img src={MainBanner} alt="mainBanner" className="md:h-screen md:w-screen" />
          {/* <HeroCarousal /> */}
        </div>

        {/*POPULAR-CATEGORIES*/}
        <div className="flex items-center justify-between w-[90%] m-auto h-full px-6 py-10 gap-20 overflow-x-auto ">
          <div className="h-28 w-28 bg-red-500 rounded-xl">
            <img src={Dog} alt="dog" className="w-full h-full" />
            <div className="h-28 w-28 relative -top-28 border rounded-xl border-red-500 duration-500 rotate-45 hover:rotate-90 hover:duration-500" ></div>
          </div>
          <div className="h-28 w-28 bg-[#AED2FF] rounded-xl">
            <img src={Cat} alt="dog" className="w-full h-full" />
            <div className="h-28 w-28 relative -top-28 border rounded-xl border-[#AED2FF] duration-500 rotate-45 hover:rotate-90 hover:duration-500" ></div>
          </div>
          <div className="h-28 w-28 bg-[#A8DF8E] rounded-xl">
            <img src={Food} alt="dog" className="w-full h-full" />
            <div className="h-28 w-28 relative -top-28 border rounded-xl border-[#A8DF8E]  duration-500 rotate-45 hover:rotate-90 hover:duration-500" ></div>
          </div>
          <div className="h-28 w-28 bg-[#C23373] rounded-xl">
            <img src={Toys} alt="dog" className="w-full h-full" />
            <div className="h-28 w-28 relative -top-28 border rounded-xl border-[#C23373] duration-500 rotate-45 hover:rotate-90 hover:duration-500" ></div>
          </div>
          <div className="h-28 w-28 bg-[#FBD85D] rounded-xl">
            <img src={Garbs} alt="dog" className="w-full h-full" />
            <div className="h-28 w-28 relative -top-28 border rounded-xl border-[#FBD85D] duration-500 rotate-45 hover:rotate-90 hover:duration-500" ></div>
          </div>
          <div className="h-28 w-28 bg-[#E8D2A6] rounded-xl">
            <img src={Extra} alt="dog" className="w-full h-full" />
            <div className="h-28 w-28 relative -top-28 border rounded-xl border-[#E8D2A6] duration-500 rotate-45 hover:rotate-90 hover:duration-500" ></div>
          </div>
          <div className="h-28 w-28 bg-[#BFACE2] rounded-xl">
            <img src={Bed} alt="dog" className="w-full h-full" />
            <div className="h-28 w-28 relative -top-28 border rounded-xl border-[#BFACE2] duration-500 rotate-45 hover:rotate-90 hover:duration-500" ></div>
          </div>
          <div className="h-28 w-28 bg-red-500 rounded-xl">
            <img src={Toys} alt="dog" className="w-full h-full" />
            <div className="h-28 w-28 relative -top-28 border rounded-xl border-red-500 duration-500 rotate-45 hover:rotate-90 hover:duration-500" ></div>
          </div>
          <div className="h-28 w-28 bg-[#FBD85D] rounded-xl">
            <img src={Garbs} alt="dog" className="w-full h-full" />
            <div className="h-28 w-28 relative -top-28 border rounded-xl border-[#FBD85D] duration-500 rotate-45 hover:rotate-90 hover:duration-500" ></div>
          </div>
        </div>

        {/* Popular Products */}
        <div className="bg-[#3AAFA9] h-full w-full flex flex-col">
          {/* Title */}
          <div className="px-16 flex items-center gap-2 pt-8 ">
            <p className="text-3xl text-white font-bold tracking-wider">Popular Products</p>
            <img src={popularProductsGif} alt="gif" className="h-14 w-14" />
          </div>
          {/* Cards */}
          <div className="flex items-center justify-between m-auto h-full gap-20 w-[90%] py-8 overflow-x-auto">
            <div className="rounded-md bg-white p-6 flex flex-col items-center justify-between gap-4">
              <div>
                <img src={Redshampoo} className="h-44 w-36" />
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="text-[#1D4BEF] w-40 line-clamp-3 text-xs text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, alias!</p>
                <p>@@@@@</p>
                <p className="text-[#7ACB0C]">2100</p>
              </div>
            </div>
            <div className="rounded-md bg-white p-6 flex flex-col items-center justify-between gap-4">
              <div>
                <img src={Xmint} className="h-44 w-36" />
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="text-[#1D4BEF] w-40 line-clamp-3 text-xs text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, alias!</p>
                <p>@@@@@</p>
                <p className="text-[#7ACB0C]">2100</p>
              </div>
            </div>
            <div className="rounded-md bg-white p-6 flex flex-col items-center justify-between gap-4">
              <div>
                <img src={Bowjerky} className="h-44 w-36" />
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="text-[#1D4BEF] w-40 line-clamp-3 text-xs text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, alias!</p>
                <p>@@@@@</p>
                <p className="text-[#7ACB0C]">2100</p>
              </div>
            </div>
            <div className="rounded-md bg-white p-6 flex flex-col items-center justify-between gap-4">
              <div>
                <img src={BubbleUp} className="h-44 w-36" />
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="text-[#1D4BEF] w-40 line-clamp-3 text-xs text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, alias!</p>
                <p>@@@@@</p>
                <p className="text-[#7ACB0C]">2100</p>
              </div>
            </div>
            <div className="rounded-md bg-white p-6 flex flex-col items-center justify-between gap-4">
              <div>
                <img src={Xmint} className="h-44 w-36" />
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="text-[#1D4BEF] w-40 line-clamp-3 text-xs text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, alias!</p>
                <p>@@@@@</p>
                <p className="text-[#7ACB0C]">2100</p>
              </div>
            </div>
          </div>
        </div>

        {/* Brands & Selected Brand's top products */}
        <div className="h-full w-full flex flex-col">
          <div className="w-[90%] overflow-y-hidden px-4 pt-4 m-auto flex items-center justify-between gap-14 overflow-x-auto">
            {brands.map((items) => (
              <img
                src={items.name}
                key={items.id}
                onClick={() => handleActiveBrand(items.id)}
                className={`cursor-pointer duration-500 p-6 pb-3 rounded-t-full h-32 w-40 ${activeBrand === items.id ? 'bg-[#AED2FF] duration-500' : 'bg-white'}`}
              />
            ))}
          </div>
          {/* cards */}
          <div className="w-full h-full bg-[#AED2FF]">
            <div className="w-[90%] flex justify-between flex-wrap items-center h-full m-auto py-14">
              {filteredProducts.map((item) => (
                <div key={item.id} className="flex flex-col items-center gap-1 w-[22%] mb-8 bg-white rounded-lg">
                  <img src={item.name} alt={`Dog ${item.id}`} className="h-48 w-40 p-8" />
                  <p className="text-[#1D4BEF] line-clamp-3 text-xs text-center overflow-hidden max-h-[3.5rem]">{item.description}</p>
                  <p>{item.rating}</p>
                  <p className="text-[#7ACB0C]">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Information Texts */}
        <div className="h-full w-full px-10 flex justify-around items-center">
          <div className="w-[45%] h-full grid grid-cols-2 gap-5">
            <div className="flex flex-col gap-1">
              <img src={appleGif} alt="gif" className="h-12 w-12" />
              <p className="font-semibold">Feed. Frolic.</p>
              <p className="text-xs">etbus maxime saepe vero. Culpa sunt, possimus illo ipsa incidunt sit sequi quam dicta, inventore quo laboriosam modi quisquam doloribus! Possimus, labore. Laudantium mollitia quos rem nostrum vero alias. Quas accusantium minima tempore unde optio corporis recusandae delectus hic, quaerat facere, aspernatur illum odit, eius sit nam labore harum. Asperiores consequuntur porro quisquam dolorem esse ratione a magni, error voluptatibus rem?</p>
            </div>

            <div className="flex flex-col gap-1">
              <img src={clothGif} alt="gif" className="h-12 w-12" />
              <p className="font-semibold">Style. Snuggle.</p>
              <p className="text-xs">etbus maxime saepe vero. Culpa sunt, possimus illo ipsa incidunt sit sequi quam dicta, inventore quo laboriosam modi quisquam doloribus! Possimus, labore. Laudantium mollitia quos rem nostrum vero alias. Quas accusantium minima tempore unde optio corporis recusandae delectus hic, quaerat facere, aspernatur illum odit, eius sit nam labore harum. Asperiores consequuntur porro quisquam dolorem esse ratione a magni, error voluptatibus rem?</p>
            </div>

            <div className="flex flex-col gap-1">
              <img src={boatGif} alt="gif" className="h-12 w-12" />
              <p className="font-semibold">Munch. Mingle.</p>
              <p className="text-xs">etbus maxime saepe vero. Culpa sunt, possimus illo ipsa incidunt sit sequi quam dicta, inventore quo laboriosam modi quisquam doloribus! Possimus, labore. Laudantium mollitia quos rem nostrum vero alias. Quas accusantium minima tempore unde optio corporis recusandae delectus hic, quaerat facere, aspernatur illum odit, eius sit nam labore harum. Asperiores consequuntur porro quisquam dolorem esse ratione a magni, error voluptatibus rem?</p>
            </div>

            <div className="flex flex-col gap-1">
              <img src={pawGif} alt="gif" className="h-12 w-12" />
              <p className="font-semibold">Groom. Jive.</p>
              <p className="text-xs">etbus maxime saepe vero. Culpa sunt, possimus illo ipsa incidunt sit sequi quam dicta, inventore quo laboriosam modi quisquam doloribus! Possimus, labore. Laudantium mollitia quos rem nostrum vero alias. Quas accusantium minima tempore unde optio corporis recusandae delectus hic, quaerat facere, aspernatur illum odit, eius sit nam labore harum. Asperiores consequuntur porro quisquam dolorem esse ratione a magni, error voluptatibus rem?</p>
            </div>
          </div>

          <div className="h-full w-[45%] flex flex-col">
            <p className="font-bold pb-1 text-2xl">"Discover Unlimited Pet Delights!"</p>
            <p className="text-xs tracking-wide leading-relaxed">amet libero consectetur repudiandae reprehenderit nostrum voluptate! Repudiandae quod provident iure deserunt dignissimos cupiditate eum ducimus placeat illum nostrum culpa, iusto quo ut officia dolore doloremque eligendi, eveniet expedita, deleniti repellendus temporibus accusantium. Aliquam ipsum harum labore explicabo aspernatur nihil enim? Beatae fugit dolores, tempora repudiandae assumenda non quasi architecto, commodi temporibus cum vel distinctio aliquam quia, ut harum eaque nulla provident. Animi, obcaecati eligendi excepturi fuga, sequi, autem laboriosam recusandae nam aspernatur quisquam iste a quia ratione quae ex delectus laborum sint laudantium aperiam dolor. Fugit itaque explicabo ea tenetur doloremque magni nemo expedita quidem. In quam autem reprehenderit voluptates possimus tenetur quae ullam voluptatem molestiae, alias magni delectus natus iure! Quasi quia incidunt blanditiis. Ipsam placeat atque veniam fugiat inventore. Placeat tenetur sed, ipsum libero optio, nobis perferendis amet incidunt, tempore dolores natus aspernatur illo. Laborum, hic. Magni ea repellat possimus mollitia nesciunt doloremque repellendus porro animi. Error accusantium distinctio ipsa. Porro, reiciendis! Provident, pariatur eum officiis quos quis exercitationem beatae eligendi cum rem atque ipsa nisi hic iste laborum in alias sunt, facilis nostrum voluptas? Provident aspernatur odit deleniti soluta dolore itaque minus vero distinctio neque quibusdam aut similique autem, iure facilis culpa quis accusamus illum ea doloribus praesentium dolorum id numquam voluptatibus nam? Perferendis maxime, aspernatur sequi voluptatum architecto adipisci commodi debitis ducimus officia id in labore, accusantium earum ipsa eaque vero repudiandae temporibus sunt nihil quidem soluta consequatur. Harum, assumenda! Quo, suscipit perspiciatis, unde ea, reiciendis consequatur eveniet iste molestias nisi porro cum cupiditate dicta modi?</p>
            <button className="w-1/4 rounded-full bg-[#FF6969] p-1 text-white font-semibold py-1 mt-4">Shop Now</button>
          </div>
        </div>


        {/* Popular Sub-Categories */}
        <div className="flex my-6 bg-white gap-2 px-12 flex-col">
          <p className="relative my-4 left-8 font-bold tracking-wide text-2xl">Popular Categories</p>
          <div className="w-[88%] m-auto h-full flex items-center justify-between">
            <div className="flex flex-col items-center">
              <img src={Chews} alt='popularSubCategories' className="bg-[#FF9B82] shadow-xl font-Raleway font-semibold text-xl rounded-lg mb-3 h-32 w-32 p-2" />
              <p className="font-Raleway font-semibold text-xl" >Chews</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={BoneToys} alt='popularSubCategories' className="bg-[#AED2FF] shadow-xl font-Raleway font-semibold text-xl rounded-lg mb-3 h-32 w-32 p-2" />
              <p className="font-Raleway font-semibold text-xl ">Toys</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={Leashes} alt='popularSubCategories' className="bg-[#94dc94] shadow-xl font-Raleway font-semibold text-xl rounded-lg mb-3 h-32 w-32 p-2" />
              <p className="font-Raleway font-semibold text-xl" >Leashes</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={DandruffShampoo} alt='popularSubCategories' className="bg-[#FBD85D] shadow-xl font-Raleway font-semibold text-xl rounded-lg mb-3 h-32 w-32 p-2" />
              <p className="font-Raleway font-semibold text-xl" >Shampoo</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={Treats} alt='popularSubCategories' className="bg-[#FFA1F5] shadow-xl font-Raleway font-semibold text-xl rounded-lg mb-3 h-32 w-32 p-2" />
              <p className="font-Raleway font-semibold text-xl">Treats</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={Chews} alt='popularSubCategories' className="bg-[#FF9B82] shadow-xl font-Raleway font-semibold text-xl rounded-lg mb-3 h-32 w-32 p-2" />
              <p className="font-Raleway font-semibold text-xl">Chews</p>
            </div>
          </div>
        </div>

        {/* Shampoo Animations */}
        <div className="w-full h-full flex">
          <div className="m-auto h-screen w-1/3 relative z-20 overflow-hidden bg-transparent flex items-center justify-center" onMouseEnter={() => setAnimationActivate(true)} onMouseLeave={() => setAnimationActivate(false)} >
            <img src={shampoo} alt="shampooImage" className={`absolute z-10 -right-6 bottom-0 w-[52%] duration-500 ${animationActivate ? 'scale-125 -translate-x-[52px] -translate-y-5 duration-500' : ''}`} />
            <img src={left} alt="left" className={`absolute left-2 bottom-0 w-[64%] duration-500 ${animationActivate ? 'scale-125 translate-x-12 -translate-y-5 duration-500' : ''}`} />
            <img src={topLeft} alt="topLeft" className={`absolute -z-10 -left-5 duration-500 top-0 w-[55%] ${animationActivate ? 'scale-125 translate-x-10 translate-y-5 duration-500' : ''}`} />
            <img src={topRight} alt="topRight" className={`absolute -z-20 -right-4 duration-500 top-0 w-[55%] ${animationActivate ? 'scale-125 -translate-x-10 translate-y-5 duration-500' : ''}`} />
            <div className="absolute left-0 right-0 h-full w-full bg-[#ED1E30] -z-30"></div>
          </div>
          <div className="m-auto h-screen w-1/3 relative z-20 overflow-hidden bg-transparent flex items-center justify-center" onMouseEnter={() => setGreenAnimationActivate(true)} onMouseLeave={() => setGreenAnimationActivate(false)} >
            <img src={greenShampoo} alt="shampooImage" className={`absolute z-10 -right-6 bottom-0 w-[52%] duration-500 ${greenAnimationActivate ? 'scale-125 -translate-x-[52px] -translate-y-5 duration-500' : ''}`} />
            <img src={greenLeft} alt="left" className={`absolute -left-2 bottom-0 w-[64%] duration-500 ${greenAnimationActivate ? 'scale-125 translate-x-8 -translate-y-5 duration-500' : ''}`} />
            <img src={greenTopLeft} alt="topLeft" className={`absolute -z-10 -left-5 duration-500 top-0 w-[55%] ${greenAnimationActivate ? 'scale-125 translate-x-10 translate-y-5 duration-500' : ''}`} />
            <img src={greenTopRight} alt="topRight" className={`absolute -z-20 -right-4 duration-500 top-0 w-[55%] ${greenAnimationActivate ? 'scale-125 -translate-x-10 translate-y-5 duration-500' : ''}`} />
            <div className="absolute left-0 right-0 h-full w-full bg-[#90DA2A] -z-30"></div>
          </div>
          <div className="m-auto h-screen w-1/3 relative z-20 overflow-hidden bg-transparent flex items-center justify-center" onMouseEnter={() => setPinkAnimationActivate(true)} onMouseLeave={() => setPinkAnimationActivate(false)} >
            <img src={pinkShampoo} alt="shampooImage" className={`absolute z-10 -right-1 bottom-0 w-[52%] duration-500 ${pinkAnimationActivate ? 'scale-125 -translate-x-[60px] -translate-y-5 duration-500' : ''}`} />
            <img src={pinkLeft} alt="left" className={`absolute -left-2 bottom-0 w-[64%] duration-500 ${pinkAnimationActivate ? 'scale-125 translate-x-8 -translate-y-5 duration-500' : ''}`} />
            <img src={pinkTopLeft} alt="topLeft" className={`absolute -z-10 -left-5 duration-500 top-0 w-[55%] ${pinkAnimationActivate ? 'scale-125 translate-x-10 translate-y-5 duration-500' : ''}`} />
            <img src={pinkTopRight} alt="topRight" className={`absolute -z-20 -right-4 duration-500 top-0 w-[55%] ${pinkAnimationActivate ? 'scale-125 -translate-x-10 translate-y-5 duration-500' : ''}`} />
            <div className="absolute left-0 right-0 h-full w-full bg-[#F284AB] -z-30"></div>
          </div>
        </div>

        {/* Our Values */}
        <div className="h-full w-[70%] m-auto flex flex-col gap-12 items-center justify-center">
          <p className="text-4xl font-semibold tracking-wide mt-6">Our Values</p>

          <div className="h-full w-full flex items-center justify-around">
            <img src={ourValues1} alt="ourValuesImage1" className="w-[33%] scale-x-110 h-full rounded-md -z-10" />
            <div className="h-full w-[42%]  flex flex-col gap-4">
              <p className="text-2xl tracking-wider pr-6">"Our Compassionate Commitment: Elevating Pet Wellbeing Through Quality Products and Careful Curation."</p>
              <p className="text-sm tracking-wide font-light">At Pawpi, we hold an unwavering commitment to the wellbeing of your beloved pets. Our journey is driven by a deep sense of compassion, ensuring that every product we offer meets the highest standards of quality and safety. We understand the importance of pets in your life, and our dedication to their happiness and health guides every decision we make.</p>
              <div className="flex text-left text-sm items-center justify-between mt-4">
                <div className="flex flex-col gap-1">
                  <p className="text-[#FF3547] font-semibold text-lg">245</p>
                  <p className="text-xs font-thin">Happy Customers</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[#FF3547] font-semibold text-lg">245</p>
                  <p className="text-xs font-thin">Wagging Tails</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[#FF3547] font-semibold text-lg">245</p>
                  <p className="text-xs font-thin">Deliveries</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-full w-full flex items-center justify-around">
            <div className="h-ful text-right w-[42%]  flex flex-col gap-4">
              <p className="text-2xl tracking-wider pl-6">"Dedicated to Sustainability: Crafting Pet Happiness While Caring for Our Planet's Future."</p>
              <p className="text-sm tracking-wide font-light">We believe in more than just pet happiness; we believe in a brighter future for our planet. That's why we are dedicated to sustainability in every aspect of our business. From eco-friendly product choices to responsible sourcing, we're committed to reducing our environmental footprint and contributing to a healthier world for both pets and people.</p>
              <div className="flex text-left text-sm items-center justify-between mt-4">
                <div className="flex flex-col gap-1">
                  <p className="text-[#FF3547] font-semibold text-lg">245</p>
                  <p className="text-xs font-thin">Happy Customers</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[#FF3547] font-semibold text-lg">245</p>
                  <p className="text-xs font-thin">Wagging Tails</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[#FF3547] font-semibold text-lg">245</p>
                  <p className="text-xs font-thin">Deliveries</p>
                </div>
              </div>
            </div>
            <img src={ourValues2} alt="ourValuesImage2" className="w-[33%] scale-x-110 h-full rounded-md -z-10" />
          </div>

          <div className="h-full w-full flex items-center justify-around">
            <img src={ourValues3} alt="ourValuesImage3" className="w-[33%] scale-x-110 h-full rounded-md -z-10" />
            <div className="h-full w-[42%]  flex flex-col gap-4">
              <p className="text-2xl tracking-wider pr-6">"Community Connection: Fostering Relationships, Sharing Knowledge, and Celebrating the Love of Pets."</p>
              <p className="text-sm tracking-wide font-light"> Our pet-loving community isn't just about transactions; it's about building relationships. We're here to foster a sense of connection among pet enthusiasts. Our store is a hub where you can not only find the best products for your pets but also share experiences, knowledge, and the love you have for your furry companions. Together, we celebrate the joy of pet ownership.</p>
              <div className="flex text-left text-sm items-center justify-between mt-4">
                <div className="flex flex-col gap-1">
                  <p className="text-[#FF3547] font-semibold text-lg">245</p>
                  <p className="text-xs font-thin">Happy Customers</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[#FF3547] font-semibold text-lg">245</p>
                  <p className="text-xs font-thin">Wagging Tails</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[#FF3547] font-semibold text-lg">245</p>
                  <p className="text-xs font-thin">Deliveries</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*BANNER-2*/}
        {/* <Link to={'/products/123'} className="lg:h-full lg:scale-y-90 w-full lg:cursor-pointer md:h-80 h-52 lg:scale-100 mt-12">
          <img src={Banner2} alt="Banner2" className="h-full w-full" />
        </Link> */}

        {/*BEST-SELLING-PRODUCTS*/}
        {/* <div className="lg:w-full lg:h-full lg:my-3 my-6">
          <div className="flex flex-col items-center">
            <div className="lg:text-3xl text-xl md:text-2xl lg:font-semibold font-paw lg:cursor-pointer">
              Best Selling Products
            </div>
            <div className="lg:text-3xl text-xl md:text-2xl lg:mb-3 font-caveatB text-[#5e17eb]">
              Loved by pets and pet parents!
            </div>
          </div>
          <div className="lg:mx-32 md:mx-12 mx-6 mt-10">
            <BestSellingCarousel />
          </div>
        </div> */}

        {/*SPECIAL-SUBCATEGORY*/}
        {/* <div className="flex mb-6 items-center flex-col w-full h-full">
          <div className="lg:text-3xl text-xl md:text-2xl lg:font-semibold font-paw lg:cursor-pointer">
            Your pet needs special care!
          </div>
          <div className="lg:text-3xl text-xl md:text-2xl lg:mb-3 font-caveatB text-[#5e17eb]">
            A little love, and some right products.
          </div>
          <div className="grid grid-cols-3 mt-6 lg:gap-4 md:gap-8">
            {SpecialSubCategory.map((data) => (
              <CategoryDesign {...data} />
            ))}
          </div>
        </div> */}

        {/*EVERYTHING-YOUR-PET-NEEDS-BANNER&CAROUSEL*/}
        <div
          className="lg:h-screen w-full h-52 md:h-full md:my-14 my-8 bg-cover bg-bottom"
          style={{ backgroundImage: `url(${BlueBanner})` }}
        >
          <div className="lg:pt-[600px] lg:pb-12 lg:mx-20 md:pt-44 pt-28 md:mx-12 mx-12 -z-50">
            <EverythingForPetCarousel />
          </div>
        </div>

        {/*REVIEW-SLIDER*/}
        <div className="w-[95%] flex flex-col gap-4 text-center m-auto h-full mt-6">
          <p className=" text-3xl  uppercase font-bold font-Raleway tracking-wide">what our customers<br /> said about us</p>
          <p className="w-2/3 m-auto  font-semibold font-Raleway uppercase text-black">"Our customers' voices echo the love and trust they've found in our pet products, shaping our journey with heartfelt testimonials."</p>
          <div className="h-full w-full -z-10">
            <ReviewCarousel />
          </div>
        </div>

        {/* Special Product Banner */}
        <div className="my-4">
          <img src={specialProductBanner} alt="productBanner" className="w-full" />
        </div>

        {/* Toys & Entertainment */}
        <div className="h-full w-[90%] flex flex-col gap-4 py-12 m-auto">
          <div className="flex tracking-wider justify-between h-full w-full">
            <p className="w-[32%] font-semibold h-full uppercase text-3xl">Toys & <br />Entertainment</p>
            <p className="w-[67%] text-right text-2xl">"A Tail-Wagging Wonderland: Explore Our Diverse Selection<br /> of Pet Products and Accessories for Your Furry Friends"</p>
          </div>
          <div className="h-full w-full flex justify-between items-center">
            <div className="w-[32.78%] h-full flex flex-col gap-2">
              <button className="w-1/2 rounded-full bg-[#FF6969] tracking-wider text-xl text-white font-[500] py-5 my-6">SHOP NOW</button>
              <img src={tNeLeft} alt="tNeLeftImage" className="rounded-lg w-full" />
            </div>
            <div className="w-[33.33%] h-full flex flex-col gap-2">
              <img src={tNeMiddleTop} alt="tNeMiddleTopImage" className="rounded-lg w-full" />
              <img src={tNeMiddleBottom} alt="tNeMiddleBottomImage" className="rounded-lg w-full" />
            </div>
            <div className="w-[32.67%] h-full flex flex-col">
              <img src={tNeRight} alt="tNeRightImage" className="rounded-lg w-full" />
            </div>
          </div>
        </div>

        {/* Follow Us */}
        <div className="w-full h-full relative">
          <img src={followUsInsta} alt="followUsImage" className="w-full" />
          <div className="w-[60%] absolute top-[15%] left-[3%]">
            <div className="w-2/3 flex flex-col gap-8 text-center m-auto">
              <p className="text-white drop-shadow-2xl font-Raleway font-semibold text-5xl tracking-wider border-b-8 rounded-full border-white uppercase">Be Our instafam <br /> follow us </p>
              <a href="https://www.instagram.com/gopawpi" target="_blank" className="text-white font-extrabold text-7xl drop-shadow-2xl tracking-widest">@gopawpi</a>
            </div>
            <div className="flex items-center gap-12 mx-4 pt-32 w-full flex-wrap">
              <img src={Image1} className="w-1/5 rounded-lg shadow-xl duration-300 hover:scale-90 hover:duration-300" />
              <img src={Image2} className="w-1/5 rounded-lg shadow-xl duration-300 hover:scale-90 hover:duration-300" />
              <img src={Image3} className="w-1/5 rounded-lg shadow-xl duration-300 hover:scale-90 hover:duration-300" />
              <img src={Image4} className="w-1/5 rounded-lg shadow-xl duration-300 hover:scale-90 hover:duration-300" />
              <img src={Image3} className="w-1/5 rounded-lg shadow-xl duration-300 hover:scale-90 hover:duration-300" />
              <img src={tNeLeft} className="w-1/5 rounded-lg shadow-xl duration-300 hover:scale-90 hover:duration-300" />
              <img src={Image1} className="w-1/5 rounded-lg shadow-xl duration-300 hover:scale-90 hover:duration-300" />
              <img src={tNeLeft} className="w-1/5 rounded-lg shadow-xl duration-300 hover:scale-90 hover:duration-300" />

            </div>
          </div>
        </div>

        {/*DOG-BED-BANNER*/}
        {/* <Link to={'/products/122'} className="lg:h-full w-full lg:cursor-pointer md:h-80 h-52 lg:scale-100 mt-12">
          <img
            src={DogBedbanner}
            alt="DogBedBanner"
            className="h-full w-full"
          />
        </Link> */}



        {/*PET-PROFILE-BANNER*/}
        {/* <Link to="petprofile" className="h-full w-full cursor-pointer">
          <img
            src={PetProfileBanner}
            alt="PetProfileBanner"
            className="md:h-96 lg:h-full h-72"
          />
        </Link> */}

        {/*BRANDS*/}
        <div
          className="h-full w-full bg-center bg-cover bg-fixed "
          style={{ backgroundImage: `url(${BrandBG})` }}
        >
          <Brands />
        </div>
      </div>
    </>
  );
};

export default Home;
