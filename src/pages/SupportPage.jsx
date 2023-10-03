import React from 'react'
import { useParams } from 'react-router-dom';

// import component
import Contact from '../Components/Support/Contact';


const SupportPage = () => {
    const {st} = useParams();

  return (
    <>
        <div className='mt-24 lg:h-[570px] w-full flex justify-center py-8 shadow-xl md:px-4 lg:p-0'>
            <div className='w-full lg:w-4/5'>
                { st === 'contact' && <Contact />}
                { st === 'about' && <h1>About</h1>}
                { st === 'help' && <h1>Help</h1>}
            </div>
        </div>
    </>
  )
}

export default SupportPage