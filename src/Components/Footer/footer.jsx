import React from 'react'
import logoFooter from "../../Images/logoFooter.png";
import {BiCopyright} from 'react-icons/bi';
import {FaFacebookF,FaInstagram,FaTwitter} from 'react-icons/fa';
import { Link } from 'react-router-dom';


const footer = () => {
  return (
    <>
    <div className="flex flex-col h-full w-full lg:px-32 md:px-14 px-2 font-paw bg-yellow-400">
        <div className="flex my-3 justify-between">
            <div className="md:w-1/4 w-1/3">
                <div className="lg:text-2xl md:text-xl text-lg my-3">
                    Information
                </div>
                <div className="lg:text-lg md:text-md text-sm flex flex-col">
                    <Link to="/support/contact" className="lg:hover:text-[#5e17eb] lg:hover:underline">Contact us</Link>
                    <Link to="/user/profile" className="lg:hover:text-[#5e17eb] lg:hover:underline">Accounts</Link>
                    <Link to="/support/helpandsupport" className="lg:hover:text-[#5e17eb] lg:hover:underline">Help & Support</Link>
                    <Link to="/support/partnerwithus" className="lg:hover:text-[#5e17eb] lg:hover:underline">Partner with us</Link>
                    <Link to="/support/ridewithus" className="lg:hover:text-[#5e17eb] lg:hover:underline">Ride with us</Link>
                </div>
            </div>

            <div className="w-1/3">
                <div className="lg:text-2xl md:text-xl text-lg my-3">
                    Company
                </div>
                <div className="lg:text-lg md:text-md text-sm flex flex-col">
                    <Link to="/support/aboutus" className="lg:hover:text-[#5e17eb] lg:hover:underline">About us</Link>
                    <Link to="/support/team" className="lg:hover:text-[#5e17eb] lg:hover:underline">Team</Link>
                    <div className="w-4/5 pt-4 justify-start">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae?
                    </div>
                </div>
                <a href="https://lordicon.com/">Icons by Lordicon.com</a>
            </div>

            <div  className="md:w-1/4 w-1/3">
                <div className="lg:text-2xl md:text-xl text-lg my-3">
                    Legal
                </div>
                <div className="lg:text-lg md:text-md text-sm flex flex-col">
                    <Link to="/support/termsandconditions" className="lg:hover:text-[#5e17eb] lg:hover:underline">Terms & Conditions</Link>
                    <Link to="/support/refundandcancellation" className="lg:hover:text-[#5e17eb] lg:hover:underline">Refund & Cancellation</Link>
                    <Link to="/support/privacypolicy" className="lg:hover:text-[#5e17eb] lg:hover:underline">Privacy Policy</Link>
                    <Link to="/support/cookiepolicy" className="lg:hover:text-[#5e17eb] lg:hover:underline">Cookie Policy</Link>
                    <Link to="/support/offerterms" className="lg:hover:text-[#5e17eb] lg:hover:underline">Offer Terms</Link>
                    <Link to="/support/phisingandfraud" className="lg:hover:text-[#5e17eb] lg:hover:underline">Phising & Fraud</Link>

                </div>
            </div>
        </div>

        <div className="flex justify-between border-stone-500 border-t-2 md:pr-0 pr-10">
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
                <a href="https://www.facebook.com" target=" _blank">
                    <FaFacebookF className="lg:cursor-pointer lg:hover:scale-150"/>
                </a>

                <a href="https://www.instagram.com/gopawpi" target=" _blank">
                    <FaInstagram className="lg:cursor-pointer lg:hover:scale-150"/>
                </a>

                <a href="https://twitter.com" target=" _blank">
                    <FaTwitter className="lg:cursor-pointer ml-1 lg:hover:scale-150"/>
                </a>
            </div>
        </div>
    </div>
    </>
  )
}
export default footer;