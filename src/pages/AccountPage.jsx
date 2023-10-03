import React from 'react'
import { Link, useParams } from 'react-router-dom';
import {GrMap} from 'react-icons/gr';
import {FaRegUser} from 'react-icons/fa';
import {FaClipboardList} from 'react-icons/fa';

// Components
import Address from '../Components/Account/Address';
import Profile from '../Components/Account/Profile';
import Orders from '../Components/Account/Orders';

const AccountPage = () => {
    const {at} = useParams();

  return (
    <>
        <div className='mt-24 h-full md:h-[550px] w-full flex justify-center py-8 shadow-xl md:px-4'>
            <div className='flex items-center justify-center border rounded-md w-full lg:w-3/5 shadow-md'>
                <div className='hidden md:flex flex-col w-1/3 h-full border-r'>
                   <Link to={'/user/profile'} className='h-40 flex justify-center items-end py-8 text-gray-400'>
                        +91 7229804925
                   </Link>
                   <Link to={'/user/addresses'} className='flex justify-start pl-6 text-gray-600 hover:text-gray-800 font-paw items-center gap-2 border-t py-3 cursor-pointer'>
                        <GrMap />
                        <span>My Addresses</span>
                   </Link>
                   <Link to={'/user/orders'} className='flex justify-start pl-6 text-gray-600 hover:text-gray-800 font-paw items-center gap-2 border-t py-3 cursor-pointer'>
                        <FaClipboardList />
                        <span>My Orders</span>
                   </Link>
                   <Link to={'/user/logout'} className='flex justify-start pl-6 text-gray-600 hover:text-gray-800 font-paw items-center gap-2 border-t border-b py-3 cursor-pointer'>
                        <FaRegUser />
                        <span>Logout</span>
                   </Link>
                </div>
                <div className='w-full md:w-2/3 h-full'>
                    {at === 'profile' && <Profile />}
                    {at === 'orders' && <Orders />}
                    {at === 'addresses' && <Address />}
                </div>
            </div>
        </div>
    </>
  )
}

export default AccountPage