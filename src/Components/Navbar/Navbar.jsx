import React, { useEffect, useState } from 'react';
import { links } from './NavbarCategoriesData';
import BrandsNavbar from '../../Images/NavbarAssets/BrandsNavbar.png';

import yellowLogo from '../../Images/Logo/yellowLogo.png';
import { GoSearch } from 'react-icons/go';
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import locationPin from '../../Images/NavbarAssets/location.png';
import accountPin from '../../Images/NavbarAssets/account.png';
import cartPin from '../../Images/NavbarAssets/cart.png';

import NavSmLOGO from '../../Images/NavSmLOGO.png';
import LOGO from "../../Images/Png-01.png";
import SEARCH from "../../Images/loupe.png";
import CART from "../../Images/shopping-cart.png";
import LoginPopup from '../Login and Signup/LoginPopup';
import NavLinks from './NavLinks';
import LocationPopUpModel from './LocationPopUp';
import Cart from './Cart';
import axios from 'axios';

import Labrador from '../../Images/StartPage/WelcomeAssets/Dog/labrador.png';
import Dalmatian from '../../Images/StartPage/WelcomeAssets/Dog/dalmatian.png';
import Pomeranian from '../../Images/StartPage/WelcomeAssets/Dog/pomeranian.png';
import Husky from '../../Images/StartPage/WelcomeAssets/Dog/husky.png';
import Indie from '../../Images/StartPage/WelcomeAssets/Dog/indie.png';
import Shihtzu from '../../Images/StartPage/WelcomeAssets/Dog/shihtzu.png';

import Puppy from '../../Images/NavbarAssets/puppy.png';
import Adult from '../../Images/NavbarAssets/adult.png';
import Senior from '../../Images/NavbarAssets/senior.png';


const NavSm = ({ login, cart, location, setSearchVal, serarchFilter }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  // const [openLocation, setOpenLocation] = useState(false);
  // const openLocationmodal = () => setOpenLocation(true);

  const [authUser, setAuthUser] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const handleSearchBar = (props) => {
    setSearchVal(props);
  }

  return (
    <>
      {/* <LocationPopUpModel isOpen={openLocation} setIsOpen={setOpenLocation} /> */}

      <div className="flex fixed bg-white z-50 shadow-xl items-center justify-around h-16 w-full px-1">
        <div className="flex items-center w-[12%] justify-center">
          <Link to="/home">
            <img src={NavSmLOGO}
              alt="LOGO"
              className="h-full w-full scale-125" />
          </Link>
        </div>

        <div className="flex items-center w-[45%] h-8 px-2 justify-between bg-navback rounded-md border border-bordergray">
        <input type="search"
            className="w-full h-full text-gray-600 placeholder:font-light outline-none bg-[#F4F5F5] placeholder-[#A4A3A6]"
            placeholder="Search"
            onChange={(e)=> handleSearchBar(e.target.value)}
          />
          <GoSearch className='text-lg text-[#A4A3A6]' onClick={serarchFilter} />
        </div>

        <div className="h-2/3 w-[33%] flex items-center justify-between gap-3">

          <div className='w-[33%] h-2/3 flex items-center justify-center cursor-pointer'>
            {
              authUser ? (
                <>
                  <div className="relative">

                    <div className='flex justify-center items-center cursor-pointer'
                      onClick={() => setIsDropDownOpen((prev) => !prev)}
                    >
                      <img src='https://media.licdn.com/dms/image/D4D03AQEDTLNoP8Jxpg/profile-displayphoto-shrink_800_800/0/1684957189400?e=1691625600&v=beta&t=1IMB5rcwp-hSlhFx6qFdt_nzp8IKWdaDpyiPfGZADz8' alt='user'
                        className={`flex items-center justify-center border border-black w-8 h-8 rounded-full cursor-pointer`} />
                      {
                        isDropDownOpen && (
                          <>
                            <div className="absolute shadow-lg top-12 right-0 w-24 z-10 bg-white flex flex-col gap-2 border-2 rounded-lg font-paw">
                              <div className='flex flex-col gap-2 pl-2 py-4'>
                                <Link to={"/user/profile"} className='text-sm rounded-md'>My Profile</Link>
                                <Link to={"/user/addresses"} className='text-sm rounded-md'>My Address</Link>
                                <Link to={"/user/orders"} className='text-sm hover:text-white rounded-md'>My Orders</Link>
                                <button className='text-sm text-left'>Sign Out</button>
                              </div>
                            </div>
                          </>
                        )
                      }
                    </div>
                  </div>
                </>
            ) : (
              <>
                <div
                  className="flex items-center justify-center w-full h-full font-paw text-white text-xl rounded-md "
                  onClick={login}
                >
                  <img src={accountPin} className="w-full h-full" alt="account"/>
                </div>
              </>
            )}
          </div>

          <div className="flex flex-col items-center gap-1">
            <img
              src={locationPin}
              alt="locationIcon"
              className="h-4 w-7"
              onClick={location}
            />
            <p className="text-[9px] text-gray-400">
              {localStorage.getItem("pincode")}
            </p>
          </div>

          <div
            className="flex items-center justify-center w-[40%] h-2/3"
            onClick={cart}
          >
            <img src={cartPin} alt="cart" className="w-full h-full" />
          </div>

          {/* HAmburger */}
          <div className='w-[20%]' onClick={() => setIsOpenMenu(!isOpenMenu)} >
            {
              isOpenMenu ? <RxCross2 className='text-3xl font-bold' /> :
                <BiMenu className='text-3xl font-bold' />
            }
          </div>
          <ul className={`md:hidden shadow-2xl bottom-0 top-16 pb-2 rounded-l-xl 
          ${isOpenMenu
              ? 'fixed top-0 right-0 w-[70%] h-[90%] duration-300 bg-purple-50 z-10 ' : 'fixed top-0 right-[-100%] w-[70%] h-[90%] bg-purple-50 z-10 duration-300'}`}>
            <NavLinks />
          </ul>
        </div>
      </div>
    </>
  );
};

// for medium devices/tablets
const NavMd = ({ login, cart, serarchFilter }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [authUser, setAuthUser] = useState(true);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  // const [openLocation, setOpenLocation] = useState(false);
  // const openLocationmodal = () => setOpenLocation(true);
  return (
    <>
      <div className="flex fixed bg-white shadow-lg z-50 items-center justify-around h-24 w-full px-2">
        <div className="flex relative items-center w-1/6 justify-center">
          <Link to="/">
            <img src={LOGO}
              alt="LOGO"
              className="h-24 w-28 scale-150" />
          </Link>
        </div>

        <div className="flex items-center w-[50%] h-1/2 px-2 gap-1 justify-between bg-navback rounded-md border border-bordergray">
          <input type="search"
            className="h-full w-full text-md text-black font-paw outline-none bg-navback placeholder-black"
            placeholder="Search anything for your FURR BABIES....."
          />
          <div className="h-8 w-8">
            <img src={SEARCH}
              alt="searchIcon"
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="h-2/3 w-[27%] flex items-center justify-between">
          {/* <div className="flex items-center justify-center w-1/3 h-2/3 bg-[#5e17eb] font-paw text-white text-3xl   rounded-md">
            <h1 onClick={login}>
              <CgProfile />
            </h1>
          </div> */}

          <div className='w-1/3 h-2/3 flex items-center justify-center'>
            {
              authUser ? (
                <>
                  <div className="relative w-24">

                    <div className='flex gap-1 justify-center items-center'>
                      <img src='https://media.licdn.com/dms/image/D4D03AQEDTLNoP8Jxpg/profile-displayphoto-shrink_800_800/0/1684957189400?e=1691625600&v=beta&t=1IMB5rcwp-hSlhFx6qFdt_nzp8IKWdaDpyiPfGZADz8'
                        className={`flex items-center justify-center border border-black w-12 h-12 rounded-full cursor-pointer`}
                        onClick={() => setIsDropDownOpen((prev) => !prev)} />
                      {
                        isDropDownOpen && (
                          <>
                            <div className="absolute shadow-lg top-8 right-0 w-32 z-10 bg-white flex flex-col gap-2 border-2 rounded-lg font-paw">
                              <div className='flex flex-col gap-2 items-center py-4'>
                                <Link to={"/user/profile"} className='text-md hover:bg-purple-500 px-4 hover:text-white rounded-md py-1'>My Profile</Link>
                                <button className='hover:bg-purple-500 px-4 hover:text-white rounded-md py-1'>Sign Out</button>
                              </div>
                            </div>
                          </>
                        )
                      }
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-center w-full h-full bg-purple-500 font-paw text-white text-3xl rounded-md" onClick={login}>
                    <h1>
                      {/* <CgProfile /> */}
                    </h1>
                  </div>
                </>
              )
            }
          </div>


          <div className="flex items-center justify-center w-[30%] h-12">
            <img src={CART}
              alt="cart"
              className="w-12 cursor-pointer"
              onClick={cart}
            />
          </div>

          <div className='flex cursor-pointer items-center justify-center text-3xl w-[20%]' onClick={() => setIsOpenMenu(!isOpenMenu)} >
            {
              isOpenMenu ? <RxCross2 className='text-5xl font-bold' /> :
                <BiMenu className='text-5xl' />
            }
          </div>

          <ul className={`lg:hidden w-[50%] rounded-l-xl bottom-0 top-24 z-10 py-5 bg-purple-50 shadow-2xl
            ${isOpenMenu
              ? 'fixed top-0 right-0 h-[90%] duration-300' : 'fixed top-0 right-[-100%] h-[90%] duration-700'}`}>
            <NavLinks />
          </ul>
        </div>
      </div>
    </>
  );
};

// for large devices
const NavLg = ({ location, login, cart, setSearchVal, serarchFilter }) => {

  //useState for activating the navbarItem click
  const [navbarDogActive, setNavbarDogActive] = useState(false);
  const [navbarCatActive, setNavbarCatActive] = useState(false);
  const [navbarBrandsActive, setNavbarBrandsActive] = useState(false);
  const [navbarBreedsActive, setNavbarBreedsActive] = useState(false);
  const [navbarLifestageActive, setNavbarLifestageActive] = useState(false);

  const [authUser, setAuthUser] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  //useState for selected item
  const [selectedItem, setSelectedItem] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [userData, setUserData] = useState("");


  const toggleDropdown = (option) => {
    setSelectedItem(option === selectedItem ? null : option);
    setShowDropdown(true);
  };

  const handleSearchBar = (props) => {
    setSearchVal(props);
  }

  const getUserData = async()=>{
    try {
      if (localStorage.getItem("_id")){
        const response = await axios.get(`https://pawpi-back-end.onrender.com/user/${localStorage.getItem("_id")}`);
        if(response.status === 200){
          setUserData(response.data);
          setAuthUser(true);
        }
        else{
          alert("user not found");
        }
      }
    } catch (error) {
    }
  }
  useEffect(()=>{
    getUserData();
  })

  const Breeds=[Labrador, Dalmatian, Pomeranian, Husky, Indie, Shihtzu, Labrador, Dalmatian, Pomeranian, Husky, Indie, Shihtzu]
  const Lifestage=[Puppy, Adult, Senior]

  return (
    <>
      <div className='fixed h-16 text-xs w-screen bg-white flex items-center shadow-xl py-2 px-5 justify-between'>
        <Link to="/home" className='h-16 w-32 p-1'>
          <img
            src={yellowLogo}
            alt='logo'
            className='h-full w-full' />
        </Link>

        <div className="flex items-center px-3 text-sm w-[20%] h-10 justify-between bg-[#F4F5F5] rounded-lg border border-[#D9D9D9]">
          <input type="search"
            className="w-full h-full text-gray-600 placeholder:font-light outline-none bg-[#F4F5F5] placeholder-[#A4A3A6]"
            placeholder="Search"
            onChange={(e)=> handleSearchBar(e.target.value)}
          />
          <GoSearch className='text-lg text-[#A4A3A6]' onClick={serarchFilter} />
        </div>

        <div className='flex h-16 w-[30%] text-sm font-semibold tracking-wide  items-center justify-between'>
          {links.map((item) =>
            <div className={`${item.name === selectedItem ? 'text-yellow-300' : 'text-black'} flex h-full flex-col items-center`}
              key={item.name}
              onMouseEnter={() => toggleDropdown(item.name)}
              onMouseLeave={() => { toggleDropdown(null); setShowDropdown(false) }}
            >
              <Link to={item.id} className='h-full px-4 flex items-center cursor-pointer'>{item.name}</Link>
              {item.name === selectedItem && showDropdown && (
                <>
                  <div className='h-2 w-2 relative -top-3 left-0 rounded-full bg-yellow-300'></div>
                  <div className="absolute text-black left-0 top-14 w-full flex justify-center bg-gradient-to-b from-white to-gray-200 mt-2 py-6 shadow-lg ">
                    {(item.name === "Dog" || item.name === "Cat") &&
                      <div className='h-full w-4/5 flex-wrap flex justify-start'>
                        {item.sublinks.map((subItems) =>
                          <div className='flex my-4 flex-col w-1/5'>
                            <Link to={`/collections/${subItems.sublinksid}`} className='hover:font-extrabold hover:duration-200 duration-200 tracking-wider my-1'>{subItems.Head}</Link>
                            <div className='font-normal text-xs'>{subItems.sublink.map((subSubItems) =>
                              <Link to={`collections/${subSubItems.sublinkid}`} className='flex flex-col hover:underline hover:underline-offset-1'>{subSubItems.name}</Link>)}
                            </div>
                          </div>
                        )}
                      </div>
                    }
                    {item.name === "Brands" &&
                      <div className='w-[88%] h-full flex justify-between'>
                        <div className='w-[70%] xl:h-96 h-80 flex flex-wrap p-6 overflow-y-auto'>
                          {item.sublinks.map((brandDetails)=>
                          <div className='h-full w-full xl:h-[90%] flex-wrap flex items-center justify-between xl:gap-12 gap-5'>
                            {brandDetails.sublink.map((innerItem)=>
                            <div className='h-[28%] w-[30%] xl:h-[28%] xl:w-[18%] flex  items-center justify-center shadow-lg rounded-lg'>
                              <img src={innerItem.logo} 
                              alt={`${innerItem.name}`}
                              className='h-full w-full scale-x-75 scale-y-90 xl:scale-75'
                              />
                          </div>
                            )}
                          </div>)}
                        </div>
                        <div className='w-[28%] h-80 xl:h-96'>
                          <img src={BrandsNavbar} alt='image' className='rounded-xl w-full h-full' />
                        </div>
                      </div>
                    }
                    {item.name === "Breeds" &&
                      <div className='w-[100%] px-[5%] h-60 flex justify-between gap-16 items-center overflow-x-auto'>
                        {Breeds.map((BreedImage)=>
                        <img src={BreedImage} alt={BreedImage} key={BreedImage} className='h-[60%] w-[15%] shadow-xl rounded-xl cursor-pointer bg-gray-50 hover:duration-500 hover:scale-90 duration-500'/>
                        )}
                      </div>
                    }
                    {item.name === "Lifestage" &&
                      <div className='w-[95%] h-60 flex justify-center'>
                        {Lifestage.map((items)=>
                        <img src={items} alt={items} key={items} className='w-[30%] scale-75 cursor-pointer hover:duration-700 duration-700 hover:scale-90' />
                        )}
                      </div>
                    }
                  </div>
                </>
              )}
              {/* {item.name === selectedItem && showDropdown && (
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-1 bg-yellow-500"></span>
            )} */}
            </div>)}
          {/* <div className='flex flex-col items-center' onMouseEnter={()=>{setNavbarDogActive(true)}} onMouseOut={()=>{setNavbarDogActive(false)}}>
            <p className={`${navbarDogActive ? 'text-yellow-300':'text-black'}`}>Dog</p>
            {navbarDogActive && 
            <>
              <img src={yellowDot} alt='activeDot' className='h-2 w-2'/>
              <div className='absolute top-20 left-20 h-10 w-10 bg-red-400 z-50'></div>
              <div className='bg-green-400 z-20 h-32 w-32 absolute top-48 left-20'></div>
              
              </>
            }
          </div> */}
          {/* <div className='flex flex-col items-center' onMouseEnter={()=>{setNavbarCatActive(true)}} onMouseOut={()=>{setNavbarCatActive(false)}}>
            <p className={`${navbarCatActive ? 'text-yellow-300':'text-black'}`}>Cat</p>
            {navbarCatActive &&
              <img src={yellowDot} alt='activeDot' className='h-2 w-2' />
            }
          </div>
          <div className='flex flex-col items-center' onMouseEnter={()=>{setNavbarBrandsActive(true)}} onMouseOut={()=>{setNavbarBrandsActive(false)}}>
            <p className={`${navbarBrandsActive ? 'text-yellow-300':'text-black'}`}>Brands</p>
            {navbarBrandsActive &&
              <img src={yellowDot} alt='activeDot' className='h-2 w-2' />
            }
          </div>
          <div className='flex flex-col items-center' onMouseEnter={()=>{setNavbarBreedsActive(true)}} onMouseOut={()=>{setNavbarBreedsActive(false)}}>
            <p className={`${navbarBreedsActive ? 'text-yellow-300':'text-black'}`}>Breeds</p>
            {navbarBreedsActive &&
              <img src={yellowDot} alt='activeDot' className='h-2 w-2' />
            }
          </div>
          <div className='flex flex-col items-center' onMouseEnter={()=>{setNavbarLifestageActive(true)}} onMouseOut={()=>{setNavbarLifestageActive(false)}}>
            <p className={`${navbarLifestageActive ? 'text-yellow-300':'text-black'}`}>Lifestage</p>
            {navbarLifestageActive &&
              <img src={yellowDot} alt='activeDot' className='h-2 w-2' />
            }
          </div> */}

        </div>

        <div className='flex h-10 w-[20%] text-sm font-semibold tracking-wide px-3 items-center justify-between'>
          <div className='flex flex-col items-center gap-1'>
          <img
            src={locationPin}
            alt='locationIcon'
            className='h-8 w-8'
            onClick={location} />
            <p className='text-xs text-gray-400'>
            {localStorage.getItem("pincode")}
            </p>
          </div>
          

          <div className=''>
            {
              authUser ? (
                <>
                  <div className="relative w-full">
                    <div className='flex gap-1 justify-center items-center' onMouseLeave={() => setIsDropDownOpen(false)}>
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWk8uZf12aY_Sc1TWTOi5ha_4R6E4zUq28AWKGff7iAX5_pFSizOvu1nBeff56OqrovZY&usqp=CAU'
                        className={`flex hover:scale-125 hover:duration-500 items-center justify-center border border-black w-10 h-10 rounded-full cursor-pointer`}
                        alt=''
                        onMouseEnter={() => setIsDropDownOpen(true)}
                      />

                      {
                        isDropDownOpen && (
                          <>
                            <div className="absolute shadow-lg top-10 right-0 w-40 z-20 bg-white flex flex-col gap-3 p-2 border-2 rounded-lg font-paw">
                              <Link to={"/user/profile"} className='text-lg hover:text-purple-500  hover:border-white border-blue-100 rounded-xl pl-1'>My Profile</Link>
                              <Link to={"/user/profile"} className='text-lg hover:bg-purple-500 hover:text-white  hover:border-white border-blue-100 rounded-xl px-2'>My Profile</Link>
                              <Link to={"/user/profile"} className='text-lg hover:bg-purple-500 hover:text-white border-l-8 hover:border-white border-blue-100 rounded-r-xl pl-1'>My Profile</Link>
                              <Link to={"/user/profile"} className='text-lg hover:bg-purple-500 hover:text-white border-l-8 hover:border-white border-blue-100 rounded-r-xl pl-1'>My Profile</Link>
                              <Link to={"/user/profile"} className='text-lg hover:bg-purple-500 hover:text-white border-l-8 hover:border-white border-blue-100 rounded-r-xl pl-1'>My Profile</Link>
                              <p className='text-lg cursor-pointer hover:bg-purple-500 hover:text-white border-l-8 hover:border-white border-blue-100 rounded-r-xl pl-1' onClick={()=>{setAuthUser(false); localStorage.clear()}}>Log Out</p>
                            </div>
                          </>
                        )
                      }
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <img
                    src={accountPin}
                    alt='locationIcon'
                    className='h-8 w-8'
                    onClick={login} />
                </>
              )
            }
          </div>

          <img
            src={cartPin}
            alt='locationIcon'
            className='h-8 w-8'
            onClick={cart} />
        </div>
        {/* <div className='py-2 w-3/5 -z-10 flex'>
          <NavbarCategories />
        </div> */}
      </div>
      {/* <div className="w-full flex fixed flex-col z-10 shadow-lg bg-white items-center h-24 pt-1"> 
        <div className="flex items-center justify-around px-6 py-2 h-3/5 w-full">
          <div className="w-1/5 h-24 flex mt-6 items-center pt-4">
            <Link to="/" className="cursor-pointer w-full">
              <img src={LOGO}
                alt="logo"
                className="w-full h-full"
              />
            </Link>
          </div>

          <div className="flex items-center w-1/2 h-full px-4 mx-2 gap-2 justify-between bg-navback rounded-lg border  border-bordergray">
            <input type="search"
              className="h-full w-full text-md text-black font-paw outline-none bg-navback placeholder-black"
              placeholder="Search anything for your FURR BABIES....."
            />
            <div className="h-7 w-7">
              <img src={SEARCH}
                alt="searchIcon"
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="flex items-center justify-around h-full w-1/4">
            <div className="flex items-center justify-center h-full w-1/3">
              <div className='flex gap-1 justify-center cursor-pointer outline-none hover:text-purple-500 items-center' onClick={location}>
                <span className="font-paw text-2xl">
                  Jaipur
                </span>
                <TbChevronDown className='text-center text-2xl' />
              </div>
            </div>
*}

            <div className='w-[27%] h-full'>
              {
                authUser ? (
                  <>
                    <div className="relative w-full">
                      <div className='flex gap-1 justify-center items-center' onMouseLeave={() => setIsDropDownOpen(false)}>
                        <img src='https://media.licdn.com/dms/image/D4D03AQEDTLNoP8Jxpg/profile-displayphoto-shrink_800_800/0/1684957189400?e=1691625600&v=beta&t=1IMB5rcwp-hSlhFx6qFdt_nzp8IKWdaDpyiPfGZADz8'
                          className={`flex hover:scale-125 hover:duration-500 items-center justify-center border border-black w-10 h-10 rounded-full cursor-pointer`} 
                          onMouseEnter={() => setIsDropDownOpen(true)}
                          />

                        {
                          isDropDownOpen && (
                            <>
                              <div className="absolute shadow-lg top-10 right-0 w-40 z-20 bg-white flex flex-col gap-3 p-2 border-2 rounded-lg font-paw">
                                <Link to={"/user/profile"} className='text-lg hover:text-purple-500  hover:border-white border-blue-100 rounded-xl pl-1'>My Profile</Link>
                                <Link to={"/user/profile"} className='text-lg hover:bg-purple-500 hover:text-white  hover:border-white border-blue-100 rounded-xl px-2'>My Profile</Link>
                                <Link to={"/user/profile"} className='text-lg hover:bg-purple-500 hover:text-white border-l-8 hover:border-white border-blue-100 rounded-r-xl pl-1'>My Profile</Link>
                                <Link to={"/user/profile"} className='text-lg hover:bg-purple-500 hover:text-white border-l-8 hover:border-white border-blue-100 rounded-r-xl pl-1'>My Profile</Link>
                                <Link to={"/user/profile"} className='text-lg hover:bg-purple-500 hover:text-white border-l-8 hover:border-white border-blue-100 rounded-r-xl pl-1'>My Profile</Link>
                                <Link to={"/user/profile"} className='text-lg hover:bg-purple-500 hover:text-white border-l-8 hover:border-white border-blue-100 rounded-r-xl pl-1'>My Profile</Link>
                              </div>
                            </>
                          )
                        }
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center justify-center w-full h-full bg-[#5e17eb] font-paw text-white text-3xl rounded-xl cursor-pointer hover:scale-110 hover:duration-500" onClick={login}>
                      <h1>
                        Profile
                      </h1>
                    </div>
                  </>
                )
              }
            </div>

            <div className="flex items-center justify-center w-[20%]">
              <img src={CART}
                alt="cart"
                className="w-12  cursor-pointer"
                onClick={cart}
              />
            </div>
          </div>
        </div> */}


      {/* </div>  */}
    </>
  );
};

const Navbar = () => {
  const [openLocation, setOpenLocation] = useState(false);
  const [open, setOpen] = useState(false);
  const [openLogin, setIsLogin] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [show, setShow] = useState(true);
  const [searchVal, setSearchVal] = useState('');

  const openLocationmodal = () => setOpenLocation(true);
  const openLoginPopUp = () => setIsLogin(true);
  const openCartPopUp = () => setOpen(true);

  
  const ControlNavbar = () => {
    const currentScrollPos = window.scrollY
    if (currentScrollPos > prevScrollPos) {
      setShow(false)
    }
    else {
      setShow(true)
    }
    // setPrevScrollPos(currentScrollPos)
  }

  const serarchFilter = async()=>{
    try {
      const response = await axios.post("https://pawpi-back-end.onrender.com/product/search", { searchString: searchVal});
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    if(!localStorage.getItem("pincode"))
    openLocationmodal()
  },[])

  useEffect(() => {
    let previousScrollPosition = 0;
    let currentScrollPosition = 0;

    window.addEventListener('scroll', function (e) {
      currentScrollPosition = window.pageYOffset;

      if (previousScrollPosition < currentScrollPosition) {
        setShow(false);
      } else {
        setShow(true);
      }

      previousScrollPosition = currentScrollPosition;
    });
  }, []);

  return (
    <>
      <LoginPopup isOpen={openLogin} setIsOpen={setIsLogin} />
      <Cart open={open} setOpen={setOpen} />
      <nav>

        <div className="lg:hidden z-10 mb-16 overflow-hidden">
          <NavSm login={openLoginPopUp} serarchFilter={serarchFilter} location={openLocationmodal} cart={openCartPopUp} searchVal={searchVal} setSearchVal={setSearchVal} />
        </div>


        {/* <div className="hidden md:flex lg:hidden mb-24 z-10 overflow-hidden ">
          <NavMd login={openLoginPopUp} cart={openCartPopUp} />
        </div> */}


        <div className={`hidden transition-all ease-in-out lg:flex z-10 overflow-hidden ${show ? "fixed top-0 duration-200" : "fixed top-[-100%] duration-1000"}`}>
          <LocationPopUpModel isOpen={openLocation} setIsOpen={setOpenLocation} />

          <NavLg location={openLocationmodal} serarchFilter={serarchFilter} login={openLoginPopUp} cart={openCartPopUp} searchVal={searchVal} setSearchVal={setSearchVal} />
        </div>

      </nav>
    </>
  )
}
export default Navbar;