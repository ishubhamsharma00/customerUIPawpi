import React from 'react'
import { Link } from 'react-router-dom';
import instagram from "../../Images/Footer Images/insta.png"
import whatsapp from "../../Images/Footer Images/whatsapp.png"
import thankyou from "../../Images/Thankyou/thank.png"
const Thankyou = () => {
    return (
        <>        <div className="min-h-screen flex flex-col items-center justify-center sm:mx-24   ">
            <img
                src={thankyou}
                alt="Centeredpic"
                className="w-auto h-44 md:w-auto  md:h-44 lg:w-auto lg:h-72 mb-4 "
            />
            <div className="text-center w-[80%] ">
                <h1 className="text-lg md:text-2xl lg:text-3xl font-bold">We sincerely appreciate your order and look forward to serving you again.</h1>
                <p className="text-md md:text-2xl lg:text-4xl mt-6"><span className=' text-[#FFC801] font-bold font-Raleway '>Order ID:</span> 1234567890</p>
                <p className="text-sm md:text-xl lg:text-2xl mt-3">We express our heartfelt gratitude for choosing our products/services. Your support is invaluable, and we look forward to continuing to meet your needs with excellence.</p>
            </div>
            <Link to="/" className="lg:hover:text-[#F97B22] lg:hover:underline mt-5 text-sm md:text-xl lg:text-xl font-semibold text-[#F97B22]">HomePage</Link>

            <div className=" flex mt-6 space-x-4">
                <Link to="https://www.instagram.com/gopawpi">
                    <div className='text-white  w-[29px] h-[29px]'>
                        <img src={instagram} alt="instagram img" />
                    </div>
                </Link>
                <Link to="www.whatsapp.com">
                    <div className='text-white  w-[29px] h-[29px]'>
                        <img src={whatsapp} alt="instagram img" />
                    </div>
                </Link>

            </div>
            <div className='flex items-center my-6  text-center mx-10 gap-8'>
                <Link to="/contactus" className="lg:hover:text-[#5e17eb] lg:hover:underline">Contact Us</Link>
                <Link to="/privacypolicy" className="lg:hover:text-[#5e17eb] lg:hover:underline">Privacy Policy</Link>
                <Link to="/termsofservice" className="lg:hover:text-[#5e17eb] lg:hover:underline">Terms Of Service</Link>
            </div>
            <p className="mt-3  mx-10 text-center text-gray-500 text-sm lg:text-base">
                &copy; {new Date().getFullYear()}Copyright 2023 Pawpi. All Rights Reserved
            </p>
        </div>
           

        </>

    )
}

export default Thankyou
