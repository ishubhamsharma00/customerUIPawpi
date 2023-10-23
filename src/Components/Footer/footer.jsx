import React from 'react'
import { Link } from 'react-router-dom';
import instagram from "../../Images/Footer Images/insta.png"
import whatsapp from "../../Images/Footer Images/whatsapp.png"
import arrow from "../../Images/Footer Images/arrow.png"
const footer = () => {
    return (
        <>
            <div className="flex flex-col h-full lg:px-32 md:px-14 px-2 font-paw  bg-black  ">
                <div className="flex my-3 justify-between  text-white">
                    <div className="md:w-1/4 w-1/3">
                        <div className="lg:text-2xl md:text-xl text-lg my-3">
                            Information
                        </div>
                        <div className="lg:text-xs md:text-md text-sm flex flex-col ">
                            <Link to="/contactus" className="lg:hover:text-[#5e17eb] lg:hover:underline">Contact Us</Link> 
                            <Link to="/accounts" className="lg:hover:text-[#5e17eb] lg:hover:underline">Accounts</Link>
                            <Link to="/helpandsupport" className="lg:hover:text-[#5e17eb] lg:hover:underline">Help & Support</Link>
                            <Link to="/ordertracking" className="lg:hover:text-[#5e17eb] lg:hover:underline">Order Tracking</Link>
                            <Link to="/orderoverview" className="lg:hover:text-[#5e17eb] lg:hover:underline">Order Overview</Link>


                        </div>
                    </div>

                    <div className="w-1/3">
                        <div className="lg:text-2xl md:text-xl text-lg my-3">
                            Company
                        </div>
                        <div className="lg:text-xs md:text-md text-sm flex flex-col">
                            <Link to="/aboutus" className="lg:hover:text-[#5e17eb] lg:hover:underline">About Us</Link>
                            <Link to="/faq" className="lg:hover:text-[#5e17eb] lg:hover:underline">F.A.Q</Link>
                            <Link to="/privacypolicy" className="lg:hover:text-[#5e17eb] lg:hover:underline">Privacy Policy</Link>
                            <Link to="/thankyou" className="lg:hover:text-[#5e17eb] lg:hover:underline">Thank You</Link>

                            <h3 className='pr-16 text-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere beatae deleniti .</h3>
                            
                            

                        </div>
                    </div>

                    <div className="md:w-1/4 w-1/3">
                        <div className="lg:text-2xl md:text-xl text-lg my-3">
                            Legal
                        </div>
                        <div className="lg:text-xs md:text-md text-sm flex flex-col  ">
                            <Link to="/termsandcondition" className="lg:hover:text-[#5e17eb] lg:hover:underline">Terms & Condition</Link>
                            <Link to="/refundandcancellation" className="lg:hover:text-[#5e17eb] lg:hover:underline">Refund & Cancellation</Link>
                          
                            <Link to="/cookiepolicy " className="lg:hover:text-[#5e17eb] lg:hover:underline">Cookie Policy</Link>
                            <Link to="/offerterms " className="lg:hover:text-[#5e17eb] lg:hover:underline">Offer Terms </Link>
                            <Link to="/phisingandfraud " className="lg:hover:text-[#5e17eb] lg:hover:underline">Phising & Fraud</Link>
                        </div>
                    </div>
                    {/* <div className=" relative flex flex-row ">
                        <Link to="https://www.instagram.com/gopawpi">
                            <div className='text-white absolute top-[30px] left-[40px] w-[29px] h-[29px]'>
                                <img src={instagram} alt="instagram img" />
                            </div>
                        </Link>
                        <Link to="www.whatsapp.com">
                            <div className='text-white w-[29px] h-[29px]   absolute top-[30px] left-[80px] '>
                                <img src={whatsapp} alt="whatsapp img" />
                            </div>
                        </Link>

                    </div>  */}
                  {/* <div className='sm:flex-col '>
                        <div className='w-[190px] h-[120px] bg-[#EDEBFF]  mt-16  rounded-md'>
                            <h3 className='text-black text-sm px-2 py-2 font-normal font-Raleway'>Contact Us </h3>
                            <div className='h-[23px] w-auto px-2 justify-center items-center '  >
                                <input className='outline-none font-Raleway text-xs px-2 h-full w-[80%] rounded-l-md text-black' type="text" placeholder='Your Email Address' />
                                <button className='bg-[#F97B22] h-full  w-[20%] rounded-r-md'>
                                    <img className="w-[15px] h-[8px]  " src={arrow} alt="arrow" />
                                </button>
                            </div>
                            <div className='text-[7px] text-black font-semibold'>
                                <h1 className='px-2 font-extralight leading-[10px] mt-2 font-Raleway'>
                                    "Being a pet parent means you hold the incredible power to shower your fur baby with unconditional love, care, and endless possibilities. Embrace the journey, cherish the bond, and watch your pet's happiness become your greatest reward."</h1>
                            </div>
                        </div>
                    </div> */}
                </div>

                {/* <div className="flex justify-between border-stone-500 border-t-2 md:pr-0 pr-10">
            <Link to="/" className="md:-mt-7 md:-ml-7 -mt-6 -ml-4 w-1/4">
                <div className="lg:h-40 lg:w-44 md:h-32 md:w-36 h-28 w-32">
                    <img src={logoFooter} 
                    alt="footer-logo"
                    className="h-full w-full"
                    />
                </div>
            </Link>

            <div className="flex gap-1 md:-mt-7 -mt-6 pl-3 w-1/3 md:text-lg text-sm items-center">
                <BiCopyright/>
                2023 Pawpi
            </div>

            <div className="flex items-center w-1/4 md:-mt-7 md:gap-5 -mt-6 gap-3">
                <a href="https://www.google.com/" target=" _blank">
                    <FaFacebookF className="lg:cursor-pointer lg:hover:scale-150"/>
                </a>

                <a href="https://www.instagram.com/gopawpi" target=" _blank">
                    <FaInstagram className="lg:cursor-pointer lg:hover:scale-150"/>
                </a>

                <a href="https://twitter.com/iShubhamsharma0" target=" _blank">
                    <FaTwitter className="lg:cursor-pointer ml-1 lg:hover:scale-150"/>
                </a>
            </div>
                 </div> */}




            </div>
        </>
    )
}
export default footer;