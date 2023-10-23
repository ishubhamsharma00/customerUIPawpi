import React from 'react'
import { Link } from 'react-router-dom';
import instagram from "../../Images/Footer Images/insta.png"
import whatsapp from "../../Images/Footer Images/whatsapp.png"
import thankyou from "../../Images/Thankyou/thank.png"
const Thankyou = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <img
                src={thankyou}  // Replace with your image URL
                alt="Centered Image"
                className="w-32 h-32 md:w-96 md:h-96 lg:w-96 lg:h-96 mb-4"
            />
            <div className="text-center">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">We sincerely appreciate your order and look forward to serving you again.</h1>
                <p className="text-lg md:text-xl lg:text-2xl mt-2"><span className=' text-[#FFC801] font-bold font-Raleway '>Order ID:</span> 1234567890</p>
                <p className="text-lg md:text-xl lg:text-2xl mt-2">We express our heartfelt gratitude for choosing our products/services. Your support is invaluable, and we look forward to continuing to meet your needs with excellence.</p>
            </div>
            <div className=" flex mt-4 space-x-4">
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
            <div className='flex items-center my-8  gap-8'>
                 <Link to="/contactus" className="lg:hover:text-[#5e17eb] lg:hover:underline">Contact Us</Link>
             <Link to="/privacypolicy" className="lg:hover:text-[#5e17eb] lg:hover:underline">Privacy Policy</Link>
             <Link to="/termsofservice" className="lg:hover:text-[#5e17eb] lg:hover:underline">Terms Of Service</Link>
             </div>
            <p className="mt-4 text-gray-500 text-sm lg:text-base">
                &copy; {new Date().getFullYear()}Copyright 2023 Pawpi. All Rights Reserved
            </p>
        </div>
        // <div className='w-full h-full  mx-auto '>
        //     <img src={thankyou} alt="image" />
        //     <p>We sincerely appreciate your order and look forward to serving you again.</p>
        //     <h2>Order ID: 1234567890</h2>
        //     <p>We express our heartfelt gratitude for choosing our products/services. Your support is invaluable, and we look forward to continuing to meet your needs with excellence.</p>
        //     <Link to="/" className="lg:hover:text-[#F97B22] lg:hover:underline text-[#F97B22]">HomePage</Link>
        //     <div className=' flex  gap-8'>
        //     <Link to="https://www.instagram.com/gopawpi">
        //         <div className='text-white  w-[29px] h-[29px]'>
        //             <img src={instagram} alt="instagram img" />
        //         </div>
        //     </Link>
        //     <Link to="www.whatsapp.com">
        //         <div className='text-white  w-[29px] h-[29px]'>
        //             <img src={whatsapp} alt="instagram img" />
        //         </div>
        //     </Link>
        //     </div>

        //     <div className='flex items-center   gap-8'>
        //     <Link to="/contactus" className="lg:hover:text-[#5e17eb] lg:hover:underline">Contact Us</Link>
        //     <Link to="/privacypolicy" className="lg:hover:text-[#5e17eb] lg:hover:underline">Privacy Policy</Link>
        //     <Link to="/termsofservice" className="lg:hover:text-[#5e17eb] lg:hover:underline">Terms Of Service</Link>
        //     </div>
        //   <p>Copyright 2023 Pawpi. All Rights Reserved</p>

        // </div>

    )
}

export default Thankyou
