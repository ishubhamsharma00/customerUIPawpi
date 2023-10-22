import React from 'react'
import Img1 from "../../Images/AboutUs/manwithdog.png"
import Img2 from "../../Images/AboutUs/womanwithcat.png"
import Img3 from "../../Images/AboutUs/catdog.png"
import dog from "../../Images/AboutUs/dog.png"
import cat from "../../Images/AboutUs/cat.png"




const AboutUs = () => {
  return (<>
    <div className="hidden sm:block container max-w-full mx-auto items-center justify-center absolute ">

      <div className='bg-[#FCDD58] w-[100%] sm:h-[40vh] h-full flex  '>
        <div className='text-white font-Raleway font-bold w-[50%] pl-10 py-10'>
          <h1 className='text-[400%]'>AboutUs</h1>
          <p className='text-[200%] p'>"Discover Our Story: Unveiling Our Journey and  Commitment</p> </div>
      </div>
      <div className='mx-auto flex mt-20 w-[100%]  relative'>

        <div className=' sm:p-6   font-Ralewayw-[50%]'>
          <h2 className='font-bold sm:text-[40px]' >Complete<span className='text-[#FCDD58]' >Story </span></h2>
          <p className='font-normal sm:w-1/2 sm:text-[16px] sm:py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex. </p>
        </div>
        <img className='sm:hidden lg:block -top-[375px] right-8 xl:-top-[375px] xl:right-[110px] absolute' src={dog} alt="dog" />
        <img className='sm:hidden lg:block  h-36 w-36 -top-[205px] xl:h-52 xl:w-40 right-[412px] xl:-top-[260px] xl:right-[588px] absolute z-50' src={cat} alt="cat" />

          <img className='sm:h-[500px] sm:w-[500px] md:h-[600px] md:w-[300px]  lg:h-[500px] lg:w-[400px] xl:h-[500px] xl:w-[500px] absolute 2xl:-top-56  2xl:right-32  lg:-top-56 md:-top-40 md:right-12 xl:right-32' src={Img1} alt="image" />
        
      </div>

      <div className=' mx-auto flex  '>
        <div>
          <img className="sm:h-[600px] sm:w-[600px] sm:p-6" src={Img2} alt="catwithwomanimage" />
        </div>
        <div className='sm:h-[600px] sm:w-[600px] sm:p-6   font-Raleway'>
          <h2 className='font-bold sm:text-[40px]' >Celebrating Our <span className='text-[#FCDD58]' >Legacy </span></h2>
          <p className='font-normal sm:text-[16px] sm:py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, </p>
        </div>
      </div>

      <div className=' mx-auto flex mt-20'>

        <div className='sm:h-[600px] sm:w-[600px] sm:p-6   font-Raleway'>
          <h2 className='font-bold sm:text-[40px]' >Passion,Purpose  <span className='text-[#FCDD58]' >& Progress </span></h2>
          <p className='font-normal sm:text-[16px] sm:py-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utst laborum. Lorem ipsum dolor sit amet, </p>
        </div>
        <div>
          <img className="sm:h-[600px] sm:w-[600px] sm:p-6" src={Img3} alt="catdogimage" />
        </div>
      </div>
    </div>

    {/* for smaller screen  */}
    <div className='bg-[#FCDD58] w-[100%] h-full mx-auto flex sm:hidden'>
      <div className=' text-white font-Raleway font-bold  w-[50%] pl-10 py-16'>
        <h1 className='text-3xl  '>About Us </h1>
        <p className='text-xs '>"Discover Our Story: Unveiling Our Journey and  Commitment</p>
      </div>
      <div className='w-[50%]' >
        <img className=' items-center justify-center my-6 p-6 ' src={Img1} alt="dogwithmanimage" />
      </div>
    </div>

    <div className=' sm:hidden  font-Raleway px-4'>
      <h1 className='font-bold  mt-2 text-3xl  text-center'>Complete <span className='text-[#FCDD58]'>Story</span></h1>
      <p className='font-normal mt-2 text-sm '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex. </p>
    </div>
    <img className=' sm:hidden  px-4 my-8' src={Img2} alt="catandwomanimage" />
    <div className=' sm:hidden font-Raleway px-4'>
      <h1 className='font-bold  mt-2 text-2xl  text-center'>Celebrating Our <span className='text-[#FCDD58]'>Legacy</span></h1>
      <p className='font-normal mt-2 text-sm '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex. </p>
    </div>
    <img className=' sm:hidden px-4 my-8' src={Img3} alt="catandwomanimage" />
    <div className=' sm:hidden font-Raleway px-4'>
      <h1 className='font-bold  mt-2 text-2xl  text-center'>Passion,Purpose<span className='text-[#FCDD58]'>& Progress</span></h1>
      <p className='font-normal mt-2 text-sm '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex. </p>
    </div>
  </>
  )
}

export default AboutUs;