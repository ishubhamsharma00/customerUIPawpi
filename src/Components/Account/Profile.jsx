import React from 'react'
import {FaRegUser} from 'react-icons/fa';

const Profile = () => {
  return (
    <>
         <div className='p-3 md:p-8'>
            <div className='flex gap-5 text-pawpi-purple py-4 px-5 items-center border rounded-t-md'>
                <FaRegUser className='text-lg' />
                <span className='font-paw text-pawpi-purple'>My Profile</span>
            </div>
            <div className='border-l border-b border-r flex flex-col gap-5 py-4 px-5 items-start cursor-text font-paw'>
                <div className='flex w-full'>
                  <div className='w-1/2'>
                    <span>Tara Chand</span>
                  </div>
                  <div className='w-1/2'>
                    <span>Kumawat</span>
                  </div>
                </div>

                <div className='flex w-full md:flex-col lg:flex-row gap-2 lg:gap-0'>
                  <div className='lg:w-1/2'>
                  <span>tarachand122333@gmail.com</span>

                  </div>
                  <div className='lg:w-1/2'>
                  <span>+91 7229804925</span>
                    
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Profile