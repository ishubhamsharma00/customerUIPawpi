import React from 'react'
import LOGO from "../../Images/order overview/logo.png";
import user from "../../Images/registration page/user.png"
import Email from "../../Images/registration page/email.png"
import Whatsapp from "../../Images/registration page/whatsapp.png"
import Key from "../../Images/registration page/key.png"
import BgImg from "../../Images/registration page/bg img.png"
import Cartoon from "../../Images/registration page/happy cartoon.png"

const Signup = () => {
  return (
    <section className='flex'>
      {/* Image side */}
      <div className='bg-[#EFF3FC] h-screen w-[60%]  bg-gradient-to-br from-[#EFF3FC] to-[#EFF3FC] rounded-br-[20%]'>
        <div className="relative">
          <img
            src={BgImg}
            alt="BackgroundImage"
            className="w-full h-auto"
          />
          <img
            src={Cartoon}
            alt="Overlayimage"
            className="absolute top-96 left-80 z-10"
          />
        </div>
      </div>



      {/* Register side  */}
      <div className='bg-red-300 h-full w-[40%] mx-auto  my-32'>
        <div className='w-full h-[100vh] bg-white p-32'>

          <div className='items-center justify-center  mx-20   w-[90%]'>
            <img src={LOGO} alt="Logo" className='items-center justify-center mx-16 my-3  ' />
            <h1 className=' font-Raleway font-bold text-5xl text-[#3C4D64]  '>Register Yourself!</h1>
            <p className='font-Nunito text-[16px] font-normal ml-12 text-[#3C4D64] py-3'>see what is going on with your business</p>
          </div>
          {/* ..... */}

          <form className="w-[90%] mx-auto  border  bg-[#3C4D64] border-[#3C4D64] rounded-xl mb-4 shadow-xl hover:shadow-none focus:outline-none focus:shadow-outline-blue focus:border-blue-60">
            <div className="flex items-center ">
              <img src={user} alt="Card Logo" className="w-8 h-6 p-1  mx-2" />
              <input
                type="text"
                className="w-full border-none  font-Nunito text-black rounded-r-xl font-bold outline-none p-3"
                placeholder="Pet Parent Name"
              />
            </div>
          </form>
          <form className="w-[90%] mx-auto  border  bg-[#3C4D64] border-[#3C4D64] rounded-xl mb-4 shadow-xl hover:shadow-none focus:outline-none focus:shadow-outline-blue focus:border-blue-60">
            <div className="flex items-center ">
              <img src={Email} alt="EmailLogo" className="w-8 h-6 p-1 mx-2" />
              <input
                type="text"
                className="w-full border-none  font-Nunito text-black rounded-r-xl font-bold outline-none p-3"
                placeholder="Email"
              />
            </div>
          </form>
          <form className="w-[90%] mx-auto  border  bg-[#3C4D64] border-[#3C4D64] rounded-xl mb-4 shadow-xl hover:shadow-none focus:outline-none focus:shadow-outline-blue focus:border-blue-60">
            <div className="flex items-center ">
              <img src={Whatsapp} alt="WhatsappLogo" className="w-8 h-6 p-1  mx-2" />
              <input
                type="text"
                className="w-full border-none  font-Nunito text-black rounded-r-xl font-bold outline-none p-3"
                placeholder="WhatsApp Number"
              />
            </div>
          </form>
          <form className="w-[90%] mx-auto  border  bg-[#3C4D64] border-[#3C4D64] rounded-xl mb-4 shadow-xl hover:shadow-none focus:outline-none focus:shadow-outline-blue focus:border-blue-60">
            <div className="flex items-center   ">
              <img src={Key} alt="KeyLogo" className="w-8 h-6 p-1   items-center justify-center mx-2" />
              <input
                type="text"
                className="w-full border-none  font-Nunito text-black rounded-r-xl font-bold outline-none p-3"
                placeholder="Password"
              />
            </div>
          </form>
          <button className="bg-[#3C4D64] w-[90%] mx-auto text-white p-4 mt-8 font-Raleway font-bold text-2xl flex items-center justify-center rounded-2xl">
            <p>Register</p>
          </button>
        </div>

      </div>
    </section>
  )
}

export default Signup