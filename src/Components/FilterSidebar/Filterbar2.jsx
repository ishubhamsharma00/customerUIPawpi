import React, { useState } from 'react'
import { BiSort } from 'react-icons/bi';
import { FaFilter } from 'react-icons/fa';
import Filterbar from './Filterbar';

const Filterbar2 = () => {
    const [ open,setOpen]=useState(true)
    const toggleSidebar=()=>{
        setOpen(!open);
    }
  return (
    <>
   {/* <div className=''>
    <div className='h-screen flex items-center justify-centerfy'>
<button className='fixed lg:hidden z-50 bottom-0 left-0 bg-black w-1/2 h-10  flex justify-center items-center font-paw text-yellow-300 text-2xl'> 
<BiSort/>
Sort
</button>
<div className={`${open? 'w-48':'w-0'}lg:w-[20%] w-1/2 bg-teal-800  h-screen relative duration-500`}>
</div>

    </div>
    <div className='h-screen flex items-center justify-centerfy'>
<button className='fixed lg:hidden z-50  bottom-0 right-0 bg-black w-1/2 h-10  flex justify-center items-center font-paw text-yellow-300 text-2xl'onClick={toggleSidebar}> 
<FaFilter/>
Filter
</button>
<div className={`${open? 'w-48':'w-0'}lg:w-[20%] w-1/2 bg-teal-800  h-screen relative duration-500`}>
<Filterbar/> 
</div>

    </div>
    </div> */}
    </>
  )
}

export default Filterbar2;