import React from 'react'
import basket from "../../Images/Order Tracking/basket.png"
import logistic from "../../Images/Order Tracking/logistic.png";
import checked from "../../Images/Order Tracking/checked 1.png"

const OrderTracking = () => {
  return (

    <div className='w-full max-w-screen-xl h-auto
     mx-auto p-4'>
      <div className='mt-10 mb-10 border-[#FCDD58] rounded-md border-b-4 border-r-4 shadow-xl border-opacity-30'>
        <div className='bg-[#FCDD58] rounded-t-lg p-2 font-Raleway font-normal text-md leading-5 text-black'>
          <h3>Order Tracking: 0021343434</h3>
        </div>

        <div className='flex flex-col sm:flex-row justify-between px-4 bg-[#FFEA8F] p-2 font-Raleway font-normal'>
          <div className='mb-4 sm:mb-0'>
            <h2>SHIPPED VIA</h2>
            <h3 className='font-bold'>UPS</h3>
          </div>
          <div className='mb-4 sm:mb-0'>
            <h2>STATUS</h2>
            <h3 className='font-bold'>In Transit</h3>
          </div>
          <div>
            <h2>EXPECTED</h2>
            <h3 className='font-bold'>Friday, August 26</h3>
          </div>
        </div>

        <div className='w-full flex items-center justify-center p-4 sm:p-10 py-16 sm:py-24'>
          <div className='relative flex flex-col items-center border-[2px] border-[#FCDD58] rounded-full'>
            <div className='rounded-full p-1 transition duration-500 ease-in-out border-2 border-white bg-[#FCDD58] h-12 w-12 flex items-center justify-center py-3'>
              <img className="bg-[#FCDD58] h-[30px] w-[30px]" src={basket} alt="basket img" />
            </div>
            <div className='absolute top-0 text-center mt-16 text-xs font-medium uppercase font-Raleway'>Order shipped</div>
          </div>

          <div className='w-1/2 sm:w-[70%] h-1 transition duration-500 ease-in-out bg-gradient-to-r from-[#FCDD58] to-[#66C0B7]'></div>

          <div className='relative flex flex-col items-center border-[2px] border-[#66C0B7] rounded-full'>
            <div className='rounded-full transition duration-500 ease-in-out border-2 border-white bg-[#66C0B7] h-12 w-12 flex items-center justify-center py-3'>
              <img className="bg-[#66C0B7] h-[30px] w-[30px]" src={logistic} alt="basket img" />
            </div>
            <div className='absolute top-0 text-center mt-16 text-xs font-medium uppercase font-Raleway'>In Transit</div>
          </div>

          <div className='w-1/2 sm:w-[70%] h-1 transition duration-500 ease-in-out bg-gradient-to-r from-[#FCDD58] to-[#66C0B7]'></div>

          <div className='relative flex flex-col items-center border-[2px] bg-[#D9D9D9] rounded-full'>
            <div className='rounded-full transition duration-500 ease-in-out border-2 border-[#D9D9D9]-300 h-12 w-12 flex items-center justify-center py-3'>
              <img className="bg-[#D9D9D9] h-[30px] w-[30px]" src={checked} alt="basket img" />
            </div>
            <div className='absolute top-0 text-center mt-16 text-xs font-medium uppercase font-Raleway'>Order delivered</div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default OrderTracking
