import React, { useState } from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io';

import PaymentModal from './PaymentModal';
import { Link } from 'react-router-dom';
import AddressPopUp from './AddressPopUp';


const CartProduct = () => {


    return (
        <>
            <div className='flex items-center gap-2 h-20'>
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
                    <p className='text-white px-3'>5</p>
                </div>
            </div>
        </>
    )
}




const Checkout = (products) => {

    const [openAddressPopUp, setOpenAddressPopUp] = useState(false);
    const openAddressPopUpModel = () => setOpenAddressPopUp(true);

    const [isOpen, setIsOpen] = useState(false)
    const [price, setPrice] = useState(0)
    const PayNow = () => {
        setPrice(599);
        setIsOpen(true)
    }

    return (
        <>
            <PaymentModal isOpen={isOpen} setIsOpen={setIsOpen} price={price} />
            <AddressPopUp isOpen={openAddressPopUp} setIsOpen={setOpenAddressPopUp} />

            <div className='flex flex-col lg:flex-row-reverse gap-5 lg:gap-10 w-full px-2 md:px-5 lg:px-0 lg:w-1/2 '>
                <div className='w-full lg:w-2/5 flex flex-col gap-2'>
                    <div>
                        <h1 className='text-xl font-semibold text-pawpi-purple font-paw'>My Items</h1>
                    </div>
                    <div className='h-[300px] border rounded-md flex flex-col gap-2 overflow-y-auto p-2'>
                        <CartProduct />
                        <CartProduct />
                        <CartProduct />
                        <CartProduct />
                        <CartProduct />
                        <CartProduct />
                    </div>
                    <div>
                        <div className='flex flex-col gap-2 border-t'>
                            <div className='flex justify-between py-2'>
                                <h1 className='py-1 text-lg font-semibold font-paw'>Coupon</h1>
                                <h1 className='py-1 text-md text-pawpi-purple font-semibold font-paw cursor-pointer'>VIEW ALL</h1>

                            </div>
                            <div className='flex gap-6 justify-between'>
                                <input className='outline-none border-2 border-pawpi-purple rounded-md pl-4' type="text" name="" id="" placeholder='Add Coupon' />
                                <span className='text-center px-5 py-2 text-white rounded-md bg-pawpi-purple cursor-pointer'>Apply</span>
                            </div>
                            <div>
                                <div className='flex justify-between border-t py-3'>
                                    <span className='text-md text-gray-500'>Subtotal</span>
                                    <span className='text-lg font-semibold'>₹567.75</span>
                                </div>
                                <div className='flex justify-between border-t py-3'>
                                    <span className='text-lg text-gray-500'>Total</span>
                                    <span className='text-xl font-semibold'>₹567.75</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-3/5 flex flex-col gap-4'>
                    <div>
                        <h1 className='text-xl font-semibold text-pawpi-purple font-paw'>Contact information</h1>
                        <div className='flex gap-3 justify-center items-center'>
                            <div className='w-14 h-14'>
                                <img src="https://yt3.ggpht.com/ygl2Z8enlHOjF0jy86ZGvxiudkz27hGnLToUpXZNtus9T8gsBywcfOFkH_N6YiAch2_gB1muJlg=s108-c-k-c0x00ffffff-no-rj" alt="" className='rounded-lg w-full h-full' />
                            </div>
                            <div className='flex flex-col w-full'>
                                <div className='flex flex-col gap-1 w-full'>
                                    <h1 className='text-gray-500'>Tara Chand Kumawat </h1>
                                    <span>(tarachand122333@gmail.com )</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-lg font-semibold py-2'>Shiping Address</h1>
                        <div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex gap-5 text-pawpi-purple py-4 px-5 items-center cursor-pointer border rounded-t-md hover:bg-purple-100'
                                    onClick={openAddressPopUpModel}
                                >
                                    <IoMdAddCircleOutline className='text-xl' />
                                    <span className='font-paw text-pawpi-purple'>Add New Address</span>
                                </div>
                                <div className='flex border-l border-r border-b px-3 rounded-b-md'>
                                    <div className='flex flex-col gap-2 py-4'>
                                        <div className='flex gap-2'>
                                            <span>
                                                <input type="radio" value="address1" name="address" />
                                            </span>
                                            <div className='w-full'>
                                                <div className='font-paw'>Home</div>
                                                <div className='flex gap-4'>
                                                    <div className='text-sm font-paw text-gray-500 font-normal'>
                                                        <span className='text-black font-semibold'>Tara Chand Kumawat</span> - Nada wali dhani, aidhan ka bas, Korhi, Jaipur, Rajasthan, 303328, jaipur, 302012, Ashok Vihar, Ashok Nagar, Jhotwara, Jaipur, Rajasthan, India,
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex gap-2'>
                                            <span>
                                                <input type="radio" value="address1" name="address" />
                                            </span>
                                            <div className='w-full'>
                                                <div className='font-paw'>Home</div>
                                                <div className='flex gap-4'>
                                                    <div className='text-sm font-paw text-gray-500 font-normal'>
                                                        <span className='text-black font-semibold'>Tara Chand Kumawat</span> - Nada wali dhani, aidhan ka bas, Korhi, Jaipur, Rajasthan, 303328, jaipur, 302012, Ashok Vihar, Ashok Nagar, Jhotwara, Jaipur, Rajasthan, India,
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex gap-2'>
                                            <span>
                                                <input type="radio" value="address1" name="address" />
                                            </span>
                                            <div className='w-full'>
                                                <div className='font-paw'>Home</div>
                                                <div className='flex gap-4'>
                                                    <div className='text-sm font-paw text-gray-500 font-normal'>
                                                        <span className='text-black font-semibold'>Tara Chand Kumawat</span> - Nada wali dhani, aidhan ka bas, Korhi, Jaipur, Rajasthan, 303328, jaipur, 302012, Ashok Vihar, Ashok Nagar, Jhotwara, Jaipur, Rajasthan, India,
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <Link to={"/"} className='text-md text-gray-600 cursor-pointer underline'>Go home</Link>
                        <button className='px-4 py-2 bg-pawpi-purple rounded-md text-white cursor-pointer' onClick={PayNow} >Continue</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;
