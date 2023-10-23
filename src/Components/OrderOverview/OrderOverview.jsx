import React from 'react'
import LOGO from "../../Images/order overview/logo.png";
import check from "../../Images/order overview/correct 1.png"
import Item from "../../Images/order overview/pedigree.png";
import UPI from "../../Images/order overview/upi.png";
import Rupay from "../../Images/order overview/Rupay.png";
import At from "../../Images/order overview/at.png";
import User from "../../Images/order overview/user.png";
import Delivery from "../../Images/order overview/delivery.png";
import Location from "../../Images/order overview/location.png";
import Flag from "../../Images/order overview/flag.png";
import Info from "../../Images/order overview/info.png";
import { BiRupee } from "react-icons/bi";
import QuantityInput from "../QuantityInputBox/QuantityInputBox.jsx";
import AddressRadioButtons from '../AddressRadioButton/AddressRadioButtons';


const OrderOverview = () => {
  return (
    <>
  <nav className="p-4 flex flex-col sm:flex-row justify-between items-center border-solid border-b border-[1px] border-[#CDCDCD] mt-6 sm:mt-24">
  <div className="flex items-center space-x-6">
    <img src={LOGO} alt="Logo" className="h-16 w-40" />
    <div className="bg-[#A4A3A6] h-6 w-1"></div>
    <div className="text-[#A4A3A6] font-bold">ORDER OVERVIEW</div>
  </div>
  <div className="flex items-center justify-end sm:w-[50%] space-x-4 font-Raleway font-bold">
    <div><img className='w-6 h-6' src={check} alt="correct mark" /></div>
    <div className="text-black text-base sm:text-[16px]">Information</div>
    <div className='w-[10%] sm:w-[5%] h-1 border-dashed border-b-2 border-[#000]'></div>
    <div className="text-black text-base sm:text-[16px] whitespace-nowrap">Payment Information</div>
    <div className='w-[10%] sm:w-[5%] h-1 border-dashed border-b-2 border-[#000]'></div>
    <div className="text-black text-base sm:text-[16px] whitespace-nowrap">Complete Order</div>
  </div>
</nav>


      <section className='  w-screen h-screen flex mx-auto  '>
        {/* left section */}
        <div className='bg-white h-full w-[100%] md:w-[50%] p-6'>
          <h3 className='font-Raleway text-xl font-bold text-black mx-12 '>Summary Order</h3>
          <p className='font-Raleway font-medium text-[#837E7E] w-[90%] md:w-[50%] mx-12 my-2'>Check your item and select your shipping for better experience.</p>


          {/* main div  for product cart*/}
          <div className='bg-[#F9FAFB] h-96 w-[90%] md:w-[90%] rounded-xl border-[1px] border-[#A4A3A6] mx-auto overflow-y-scroll '>
            <div className='p-4 flex  justify-between'>
              <div className='flex gap-4'>
                <div className='p-2 border-2 border-[#A4A3A6] rounded-md '>
                  <img src={Item} alt="ProductImage" className='h-20 w-20 bg-white' />
                </div>
                <div className='flex flex-col '>
                  <p className='font-Raleway font-medium p-2 text-black  text-lg  '>Pedigree Tuna with Seabass Adult Dog Wet Food - 500gm
                  </p>

                  <div className=' flex flex-wrap gap-2 '>
                    <p className='font-Raleway font-semibold text-black'>
                      <BiRupee className="text-xl" />
                      700.00
                    </p>
                    <p className='line-through text-[#837E7E] '>
                      <BiRupee className="text-xl" />
                      1200.00
                    </p>
                  </div>
                </div>
              </div>
              <QuantityInput />
            </div>
            {/* ... */}
           
            {/* ... */}
            <div className='p-4 flex  justify-between'>
              <div className='flex gap-4'>
                <div className='p-2 border-2 border-[#A4A3A6] rounded-md '>
                  <img src={Item} alt="ProductImage" className='h-20 w-20 bg-white' />
                </div>
                <div className='flex flex-col '>
                  <p className='font-Raleway font-medium p-2 text-black  text-lg  '>Pedigree Tuna with Seabass Adult Dog Wet Food - 500gm
                  </p>

                  <div className=' flex flex-wrap gap-2 '>
                    <p className='font-Raleway font-semibold text-black'>
                      <BiRupee className="text-xl" />
                      700.00
                    </p>
                    <p className='line-through text-[#837E7E] '>
                      <BiRupee className="text-xl" />
                      1200.00
                    </p>
                  </div>
                </div>
              </div>
              <QuantityInput />
            </div>
            {/* ... */}
            <div className='p-4 flex  justify-between'>
              <div className='flex gap-4'>
                <div className='p-2 border-2 border-[#A4A3A6] rounded-md '>
                  <img src={Item} alt="ProductImage" className='h-20 w-20 bg-white' />
                </div>
                <div className='flex flex-col '>
                  <p className='font-Raleway font-medium p-2 text-black  text-lg  '>Pedigree Tuna with Seabass Adult Dog Wet Food - 500gm
                  </p>

                  <div className=' flex flex-wrap  gap-2 '>
                    <p className='font-Raleway font-semibold text-black'>
                      <BiRupee className="text-xl" />
                      700.00
                    </p>
                    <p className='line-through text-[#837E7E] '>
                      <BiRupee className="text-xl" />
                      1200.00
                    </p>
                  </div>
                </div>
              </div>
              <QuantityInput />
            </div>
          </div>

          {/* Discount  code */}
          <div className="w-[90%] my-8 mx-auto p-4 bg-white border border-[#EEE1E1] shadow-md rounded-md flex items-center">
            <div className="flex-1">

              <input
                type="text"
                id="discount-code"
                className="w-full py-2 px-3 mt-1 block sm:text-sm md:text-xl outline-none"
                placeholder="Discount Code"
              />
            </div>
            <button
              className="ml-2 px-3 py-2 text-white bg-black rounded-md hover:bg-black focus:outline-none focus:ring focus:ring-black focus:ring-offset-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* subtotal display start here */}
          <div className='w-[90%]  mx-auto'>
            <div className='flex my-6 justify-between w-full '>
              <div className='flex  gap-4'>
                <h3 className='font-inter font-medium text-2xl'>Subtotal</h3>
                <img src={Info} alt=" Info Icon" className="w-6 h-6 " />
              </div>

              <p className=' flex font-inter font-bold text-2xl text-black'>
                <BiRupee className="text-2xl font-semibold " />
                4200.00
              </p>
            </div>

            <div className='flex mt-4 justify-between w-full  '>
              <h3 className='font-Raleway font-bold text-2xl'>Discount</h3>
              <p className=' flex font-inter font-bold text-2xl text-black'>
                <BiRupee className="text-2xl font-semibold " />
                756.00
              </p>
            </div>
            <div className='flex mt-4 justify-between w-full  '>
              <h3 className='font-Raleway font-bold text-2xl'>Total</h3>
              <p className=' flex font-inter font-bold text-2xl
               text-black'>
                <BiRupee className="text-2xl font-bold " />
                3444.00
              </p>
            </div>
          </div>
          {/* subtotal display ends here */}
          {/* payment modes cards start */}


          <div className='flex  items-center w-[90%] mx-auto my-5'>
            <div className=' font-Raleway font-bold text-xl md:text-xl w-[50%] '>Payment Method :</div>
            <div className=' flex  w-[90%] justify-end gap-5'>
              <div className='px-2 py-5 border-2 border-[#A4A3A6] rounded-md h-16 w-20 bg-white '>
                <img src={UPI} alt="ProductImage" className='h-4 w-16 bg-white hover:cursor-pointer ' />
              </div>
              <div className='px-2  border-2 border-[#A4A3A6] rounded-md h-16 w-20  bg-white'>
                <img src={Rupay} alt="ProductImage" className='h-14 w-20 bg-white hover:cursor-pointer'  />
              </div>
              <div className='px-5 py-4   border-2 border-[#A4A3A6] rounded-md h-16 w-20 bg-white '>
                <img src={Delivery} alt="ProductImage" className='h-9 w-9 bg-white  hover:cursor-pointer' />
              </div>
            </div>

          </div>
          {/* payment modes ends start */}



        </div>
        {/* .....main div  for product cart ends here.... */}



        {/* right section */}
        <div className='bg-[#F9FAFB] h-[90vh] p-6 w-[100%] md:w-[50%]'>
          <h3 className='font-Raleway text-xl font-bold text-black mx-12 '>Payment Details</h3>
          <p className='font-Raleway font-medium text-[#837E7E] w-[90%] md:w-[50%] mx-12 my-2'>complete your purchased item by providing your payment details order.</p>
          <h3 className='font-Raleway text-xl font-bold text-black  my-2 w-[90%] mx-auto '>Name</h3>
          <div>
            <form className="flex items-center border bg-white border-gray-300 p-2 w-[90%]  mx-auto rounded-lg">
              <img src={User} alt="Logo" className="w-6 h-6 p-1 ml-2" />
              <input
                type="text"
                className="flex-grow border-none font-Raleway outline-none p-2"
                placeholder="Enter your Name"
              />
              <img src={check} alt="Checked" className="w-4 h-4" />
            </form>
          </div>

          <h3 className='font-Raleway text-xl font-bold text-black w-[90%] mx-auto my-2'>Email </h3>
          <form className="w-[90%] mx-auto p-2 border bg-white border-gray-300 rounded-lg">
            <div className="flex items-center ">
              <img src={At} alt="Card Logo" className="w-8 h-8 p-1 ml-2" />
              <input
                type="text"
                className="flex-grow border-none  font-Raleway outline-none p-2"
                placeholder="Email"
              />
              <img src={check} alt="Checked" className="w-4 h-4" />
            </div>
          </form>

          <h3 className='font-Raleway text-xl font-bold text-black w-[90%] mx-auto my-2  '>Mobile</h3>
          <div>
            <form className="flex items-center border bg-white border-gray-300 p-2 w-[90%]  mx-auto rounded-lg">
              <img src={Flag} alt="Logo" className="w-6 h-6 mr-2  p-1 ml-2" />
              <input
                type="number"
                className="flex-grow border-none font-Raleway outline-none p-2"
                placeholder="+91-70148633354"
              />
              <img src={check} alt="Checked" className="w-4 h-4" />
            </form>
          </div>
        
          {/* radiobuttons for address start */}
          <div className='w-[90%] mx-12 '>
          <AddressRadioButtons/>
          </div>
         
          {/* radiobuttons for address start */}

          <form className="w-[90%] mx-auto p-2 border border-gray-300 bg-white rounded-lg">
            <div className="flex items-center space-x-4 border-b-2 ">
              <img src={Location } alt="Address Icon" className="w-6 h-6" />
              <div className="border-r border-gray-300 h-10"></div>
              <input
                type="text"
                className="flex-grow border-none outline-none p-2 font-Raleway"
                placeholder="Enter your address"
              />
              <img src={check} alt="Address Icon" className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-4 border-b-2 mt-4">
              <input
                type="text"
                className="flex-grow border-none font-Raleway w-full outline-none p-2"
                placeholder="Landmark"
              />

              <div className="border-r border-gray-300 h-10"></div>
              <input
                type="text"
                className="border-none outline-none font-Raleway w-full p-2"
                placeholder="City"
              />
            </div>
            <div className="flex items-center space-x-4 mt-4">
              <input
                type="text"
                className="flex-grow border-none font-Raleway  w-full outline-none p-2"
                placeholder="State"
              />

              <div className="border-r border-gray-300 h-10"></div>
              <input
                type="text"
                className="border-none outline-none font-Raleway w-full p-2"
                placeholder="Pincode"
              />
            </div>
          </form>

          {/* Checkbox start */}
          <div  className='flex mx-12 my-4 font-Raleway font-semibold tex-xl gap-2'>
          <input type="checkbox" name="address" id="address" />
          <p>Billing Address as same as Shipping Address</p>
          </div>
       
          
          {/* Checkbox ends */}



          {/* amount display */}
          <div className='w-[90%]  mx-auto'>



            <button className="bg-black w-full mx-auto text-white p-7 font-Raleway font-bold text-2xl flex items-center justify-center rounded-md">
              <p className=''>Pay</p>
              <BiRupee />
              {'6666'}
            </button>

          </div>
        </div>


      </section>

    </>
  )
}

export default OrderOverview
