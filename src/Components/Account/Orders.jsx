import React from 'react'
import {FaClipboardList} from 'react-icons/fa';


const OrderCardDetails = () => {
    return (
        <>
            <div className='flex items-center gap-2 h-20 cursor-pointer hover:bg-purple-100 rounded-md'>
                <div className='w-20 h-20 flex justify-center items-center border-2 border-gray-300 rounded-md p-1'>
                    <img src="http://localhost:3000/static/media/foodtesting.f7c022f17b3aede9d374.png" alt="" className='rounded-md' />
                </div>
                <div className='w-3/5'>
                    <div className='text-sm'>
                        Lorem ipsum, dolor sit amet c/..
                    </div>
                    <div className='text-sm text-gray-500'>
                        400 g
                    </div>
                    <div className='flex gap-1 text-sm'>
                        <span className='font-semibold '>
                            ₹129
                        </span>
                        <span className='line-through  text-gray-500'>
                            ₹159
                        </span>
                    </div>
                </div>
                <div className='flex justify-between items-center bg-pawpi-purple rounded-md p-1 gap-2'>
                    <p className='text-white px-2'>5</p>
                </div>
            </div>
        </>
    )
}

const Orders = () => {
    return (
        <>
            <div className='p-3 md:p-8'>
                <div className='flex flex-col'>
                    <div className='flex gap-5 text-pawpi-purple py-4 px-5 items-center cursor-pointer border rounded-t-md hover:bg-purple-100'>
                        <FaClipboardList className='text-xl' />
                        <span className='font-paw text-pawpi-purple'>My Orders</span>
                    </div>
                    <div className='h-[350px] flex flex-col gap-2 overflow-y-auto border-l border-b border-r p-2 rounded-b-md'>
                        <OrderCardDetails />
                        <OrderCardDetails />
                        <OrderCardDetails />
                        <OrderCardDetails />
                        <OrderCardDetails />
                        <OrderCardDetails />
                        <OrderCardDetails />
                        <OrderCardDetails />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Orders;