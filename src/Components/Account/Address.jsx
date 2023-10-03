import React, { useState } from 'react'
import {IoMdAddCircleOutline} from 'react-icons/io';
import {GrLocation} from 'react-icons/gr';
import AddressPopUp from './AddressPopUp';

const Address = () => {
    const [openAddressPopUp, setOpenAddressPopUp] = useState(false);
  const openAddressPopUpModel = () => setOpenAddressPopUp(true);
  return (
    <>
        <AddressPopUp isOpen={openAddressPopUp} setIsOpen={setOpenAddressPopUp} />
        <div className='p-3 md:p-8'>
            <div className='flex gap-5 text-pawpi-purple py-4 px-5 items-center cursor-pointer border rounded-t-md hover:bg-purple-100' onClick={openAddressPopUpModel}>
                <IoMdAddCircleOutline className='text-xl' />
                <span className='font-paw text-pawpi-purple'>Add New Address</span>
            </div>
            <div className='border-l border-b border-r flex gap-5 py-4 px-5 items-start cursor-text'>
                <GrLocation className='text-xl'/>
                <div className='w-11/12'>
                    <div className='font-paw'>Home</div>
                    <div className='flex gap-4'>
                        <div className='text-sm font-paw text-gray-500 font-normal'>
                        <span className='text-black font-semibold'>Tara Chand Kumawat</span> - Nada wali dhani, aidhan ka bas, Korhi, Jaipur, Rajasthan, 303328, jaipur, 302012, Ashok Vihar, Ashok Nagar, Jhotwara, Jaipur, Rajasthan, India,
                        </div>
                        <div className='flex gap-4 justify-center'>
                            <span className='text-green-500 text-sm cursor-pointer'>Edit</span>
                            <span className='text-sm cursor-pointer'>Delete</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Address