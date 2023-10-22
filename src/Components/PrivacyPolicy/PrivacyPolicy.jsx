
import PrivacyPolicyImg from "../../Images/Privacy Policy/privacypolicy.png"
import Text from "../../Images/Privacy Policy/privacypolicytext.png"
import BGImg from "../../Images/FAQ/bgimg.png"

import React from 'react'

const PrivacyPolicy = () => {
  return (<>
    <div className='  md:h-[40vh] lg:h-[55vh] xl:h-[70vh]  w-screen bg-[#FDF2EC] mx-auto mt-24'>
      <div className="relative">
        <img
          src={Text}
          alt="BackgroundImage"
          className=" absolute  md:top-16 md:left-12  lg:left-12 z-10 md:w-[40%] hover:animate-bounce  h-auto"
        />
        <img
          src={PrivacyPolicyImg}
          alt="Overlayimage"
          className="absolute md:top-0 md:right-0 z-10 lg:top-0 lg:right-0 h-auto md:w-[50%]"
        />
      </div>
    </div>
    <div className=" p-8" style={{ backgroundImage: `url(${BGImg})` }}>
      <p className=" text-2xl  font-Raleway font-bold m-4 text-black"> Heading 1</p>
      <p className="font-Raleway font-semibold text-xl m-4 text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis n ostrud exercitation ullamco laboris.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. </p>

      <p className=" text-2xl  font-Raleway font-bold m-4 text-black"> Heading 2</p>
      <p className="font-Raleway font-semibold text-xl m-4 text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. </p>

      <p className=" text-2xl  font-Raleway font-bold m-4 text-black"> Heading 2</p>
      <p className="font-Raleway font-semibold text-xl m-4 text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. </p>

      <p className=" text-2xl  font-Raleway font-bold m-4 text-black"> Heading 4</p>
      <p className="font-Raleway font-semibold text-xl m-4 text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. </p>
    </div>

  </>

  )
}

export default PrivacyPolicy
