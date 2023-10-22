import React from 'react'
import LOGO from "../../Images/order overview/logo.png";
import check from "../../Images/order overview/correct 1.png"
import Item from "../../Images/order overview/pedigree.png";
import UPI from "../../Images/order overview/upi.png";
import Rupay from "../../Images/order overview/Rupay.png";
import At from "../../Images/order overview/at.png";
import User from "../../Images/order overview/user.png";
import Delivery from "../../Images/order overview/delivery.png";
import Card from "../../Images/order overview/card.png";
import Flag from "../../Images/order overview/flag.png";
import Info from "../../Images/order overview/info.png";
// import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';







import { BiRupee } from "react-icons/bi";
import QuantityInput from"../QuantityInputBox/QuantityInputBox.jsx";


const OrderOverview = () => {
  return (
    <>
      <nav className=" p-4 flex justify-between items-center  border-solid border-b-[1px] border-[#CDCDCD]  mt-24">
        <div className="flex items-center space-x-6 ">
          <img src={LOGO} alt="Logo" className="h-16 w-40" />
          <div className="bg-[#A4A3A6] h-6 w-1"></div>
          <div className="text-[#A4A3A6] font-bold">ORDER OVERVIEW</div>
        </div>
        <div className="flex items-center justify-end   w-[50%] space-x-4 font-Raleway font-bold ">
          <div><img className='w-6 h-6' src={check} alt="corect mark" /></div>
          <div className="text-black text-[16px]">Information</div>
          <div className='w-[10%]  h-1  border-dashed border-b-2 border-[#000]'>
          </div>
          <div className="text-black text-[16px] whitespace-nowrap">Payment Information</div>
          <div className='w-[10%]  h-1  border-dashed border-b-2 border-[#000] '>
          </div>
          <div className="text-black text-[16px] whitespace-nowrap">Complete Order</div>
        </div>
      </nav>

      <section className='  w-screen h-screen flex mx-auto  '>
        {/* left section */}
        <div className='bg-white h-full w-[50%] p-6'>
          <h3 className='font-Raleway text-xl font-bold text-black mx-8 '>Summary Order</h3>
          <p className='font-Raleway font-medium text-[#837E7E] w-[50%] mx-8 my-2'>Check your item and select your shipping for better experience.</p>


          {/* main div  for product cart*/}
          <div className='bg-[#F9FAFB] h-96 w-[90%] rounded-xl border-[1px] border-[#A4A3A6] mx-auto   overflow-y-scroll '>
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
          {/* payment modes cards start */}
        
          <div className='flex items-center justify-between border bg-[#F9FAFB] border-black p-2 w-[90%]  mx-auto  rounded-2xl my-4 '>
            <div className='p-2 flex  justify-between '>
              <div className='flex gap-4'>
                <div className='px-2 py-5 border-2 border-[#A4A3A6] rounded-md h-16 w-20 bg-white '>
                  <img src={UPI} alt="ProductImage" className='h-4 w-16 bg-white  ' />
                </div>
                <div className='flex flex-col justify-center '>
                  <p className='font-Raleway font-bold px-2 text-black  text-lg  '>Pay Via UPI
                  </p>
                  <div className=' flex flex-wrap gap-2 '>
                    <p className='font-Raleway font-medium px-2 text-[#A4A3A6]'>
                      GooglePee/Phonepee/PayTM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='p-4'>
              <input className='' type="radio" name="radiobutton" id="" />
            </div>
          </div>

          <div className='flex items-center justify-between border bg-[#F9FAFB] border-black p-2 w-[90%]  mx-auto  rounded-2xl my-4 '>
            <div className='p-2 flex  justify-between '>
              <div className='flex gap-4'>
                <div className='px-2  border-2 border-[#A4A3A6] rounded-md h-16 w-20  bg-white'>
                  <img src={Rupay} alt="ProductImage" className='h-14 w-20 bg-white' />
                </div>
                <div className='flex flex-col justify-center '>
                  <p className='font-Raleway font-bold px-2 text-black  text-lg  '>Debit Card/ Credit Card
                  </p>
                  <div className=' flex flex-wrap gap-2 '>
                    <p className='font-Raleway font-medium px-2 text-[#A4A3A6]'>
                     Rupay/ Visa/ Master Card
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='p-4 '>
              <input className='form-radio text-black border-black border-2 rounded-md focus:ring-2 focus:ring-black focus:outline-none' type="radio" name="radiobutton" id="" />
            </div>
          </div>

          <div className='flex items-center justify-between border bg-[#F9FAFB] border-black p-2 w-[90%]  mx-auto  rounded-2xl my-4 '>
            <div className='p-2 flex  justify-between '>
              <div className='flex gap-4'>
                <div className='px-5 py-4   border-2 border-[#A4A3A6] rounded-md h-16 w-20 bg-white '>
                  <img src={Delivery} alt="ProductImage" className='h-9 w-9 bg-white ' />
                </div>
                <div className='flex flex-col justify-center '>
                  <p className='font-Raleway font-bold px-2 text-black  text-lg  '>Cash On Delivery
                  </p>
                  <div className=' flex flex-wrap  items-center justify-center '>
                  <BiRupee className="text-[#A4A3A6] ml-2" />
                    <p className='font-Raleway font-medium  text-[#A4A3A6]'>
                     50 Delivery Charges
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='p-4'>
              <input className='' type="radio" name="radiobutton" id="" />
            </div>
          </div>
          {/*payment modes cards ends  */}

        </div>
        {/* .....main div  for product cart ends here.... */}



        {/* right section */}
        <div className='bg-[#F9FAFB] h-[90vh] p-6 w-[50%]'>
          <h3 className='font-Raleway text-xl font-bold text-black mx-8 '>Payment Details</h3>
          <p className='font-Raleway font-medium text-[#837E7E] w-[50%] mx-8 my-2'>complete your purchased item by providing your payment details order.</p>
          <h3 className='font-Raleway text-xl font-bold text-black  my-2 w-[90%] mx-auto '>Payment Details</h3>
          <div>
            <form className="flex items-center border bg-white border-gray-300 p-2 w-[90%]  mx-auto rounded-lg">
              <img src={At} alt="Logo" className="w-6 h-6 p-1 ml-2" />
              <input
                type="email"
                className="flex-grow border-none font-Raleway outline-none p-2"
                placeholder="Enter your email"
              />
              <img src={check} alt="Checked" className="w-4 h-4" />
            </form>
          </div>

          <h3 className='font-Raleway text-xl font-bold text-black w-[90%] mx-auto my-2'>Card Details</h3>
          <form className="w-[90%] mx-auto p-2 border bg-white border-gray-300 rounded-lg">
            <div className="flex items-center ">
              <img src={Card} alt="Card Logo" className="w-8 h-8 p-1 ml-2" />
              <input
                type="text"
                className="flex-grow border-none  font-Raleway outline-none p-2"
                placeholder="Card Number"
              />
              <input
                type="text"
                className="border-none font-Raleway outline-none w-20 p-2 text-right"
                placeholder="MM/YY"
              />
              <div className="bg-white h-10 w-[.5px]"></div>
              <input
                type="number"
                className="border-none font-Raleway outline-none w-16 p-2"
                placeholder="CVV"
              />
            </div>
          </form>

          <h3 className='font-Raleway text-xl font-bold text-black w-[90%] mx-auto my-2  '>Card Holder</h3>
          <div>
            <form className="flex items-center border bg-white border-gray-300 p-2 w-[90%]  mx-auto rounded-lg">
              <img src={User} alt="Logo" className="w-6 h-6 mr-2  p-1 ml-2" />
              <input
                type="email"
                className="flex-grow border-none font-Raleway outline-none p-2"
                placeholder="Ujjwal Sharma"
              />
              <img src={check} alt="Checked" className="w-4 h-4" />
            </form>
          </div>
          <h3 className='font-Raleway text-xl font-bold text-black w-[90%] mx-auto my-2 '>Billing Address</h3>
          <form className="w-[90%] mx-auto p-2 border border-gray-300 bg-white rounded-lg">
            <div className="flex items-center space-x-4 border-b-2 ">
              <img src={Flag} alt="Address Icon" className="w-6 h-6" />
              <div className="border-r border-gray-300 h-10"></div>
              <input
                type="text"
                className="flex-grow border-none outline-none p-2 font-Raleway"
                placeholder="Enter your address"
              />
              <img src={check} alt="Address Icon" className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-4 mt-4">
              <input
                type="text"
                className="flex-grow border-none font-Raleway outline-none p-2"
                placeholder="City/State"
              />

              <div className="border-r border-gray-300 h-10"></div>
              <input
                type="text"
                className="border-none outline-none font-Raleway p-2"
                placeholder="Pincode"
              />
            </div>
          </form>
          <div className='w-[90%]  mx-auto'>
            <div className='flex my-6 justify-between w-full '>
              <div className='flex  gap-4'>
              <h3 className='font-Raleway font-medium text-2xl'>Subtotal</h3>
              <img src={Info} alt=" Info Icon" className="w-6 h-6 " />
              </div>
             
              <p className='font-Raleway font-semibold text-black'>
                <BiRupee className="text-2xl" />
                700.00
              </p>
            </div>

            <div className='flex my-2 justify-between w-full  '>
              <h3 className='font-Raleway font-medium text-2xl'>GST(18%)</h3>
              <p className='font-Raleway font-semibold text-black'>
                <BiRupee className="text-2xl font-medium" />
                700.00
              </p>
            </div>  <div className='flex my-2 justify-between w-full  '>
              <h3 className='font-Raleway font-bold text-2xl'>Total</h3>
              <p className='font-Raleway font-bold text-black'>
                <BiRupee className="text-2xl font-bold" />
                700.00
              </p>
            </div>
            <button className="bg-black w-full mx-auto text-white p-7 font-Raleway font-bold text-2xl flex items-center justify-center rounded-md">
              <p className=''>Pay</p>
              <BiRupee  />
              {'6666'}
            </button>
          
          </div>
        </div>


      </section>

    </>
  )
}

export default OrderOverview
