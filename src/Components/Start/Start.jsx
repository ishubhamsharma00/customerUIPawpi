import React, { useState } from 'react';
import yellowLogo from '../../Images/Logo/yellowLogo.png';
import backgroundDogBanner from '../../Images/StartPage/backgroundDogBanner.png';
import backgroundImageCat from '../../Images/StartPage/backgroundImageCat.png';
import dogImage from '../../Images/StartPage/dogImage.png';
import thoughtClouds from '../../Images/StartPage/thoughtClouds.png';
import catImage from '../../Images/StartPage/catImage.png';
import catThoughtImage from '../../Images/StartPage/catThoughtImage.png';
import homeGif from '../../Images/StartPage/homeGif.gif';
import { Link } from 'react-router-dom';

const Start = () => {

    //dog animation useState
    const [dogAnimation,setDogAnimation]=useState(false);
    const [catAnimation,setCatAnimation]=useState(false);
    return (
        <div className='overflow-hidden w-screen px-8 py-4 pb-8 h-screen flex flex-col items-center justify-between'>
            <div className='w-full h-[10%]'>
                <img src={yellowLogo}
                    alt='logo'
                    className='h-full m-auto' />
            </div>

            <Link to='/start/welcome/dog' className="w-full h-[41%] cursor-pointer relative" onMouseEnter={()=>setDogAnimation(true)} onMouseLeave={()=>setDogAnimation(false)}>
                <img src={backgroundDogBanner} alt='backgroundImageDog' className='h-full w-full' />
                <img src={dogImage} alt='dogImage' className={`absolute z-10 left-[8%] -bottom-[44px] h-[75%] duration-700 ${dogAnimation ? 'translate-x-20 -translate-y-6 scale-150 duration-700':''}`} />
                <div className="absolute left-[30%] top-8 h-[60%]">
                    <div className={`relative h-full w-full ${dogAnimation?'opacity-0 duration-700':'opacity-100 duration-700'}`}>
                        <img src={thoughtClouds} alt='thoughtClouds' className='h-full' />
                        <p className='z-10 absolute left-[22%] top-[18%] w-[60%] m-auto text-center'>I'll have my own bed in your bed!!</p>
                    </div>
                </div>
                <div className='absolute right-[10%] tracking-wider bottom-[12%] flex flex-col items-center font-extrabold text-white drop-shadow-2xl'>
                    <p className={`text-9xl  duration-700 ${dogAnimation?'duration-700 -translate-x-16 scale-150 -translate-y-4':''}`}>WOOF</p>
                    <p className={`text-4xl duration-700 ${dogAnimation?'duration-700 -translate-x-16 scale-110 ':''}`}>THE WAG AND SHAKE</p>
                </div>
            </Link>

            <Link to='/start/welcome/cat' className="w-full h-[41%] cursor-pointer relative" onMouseEnter={()=>setCatAnimation(true)} onMouseLeave={()=>setCatAnimation(false)}>
                <img src={backgroundImageCat} alt='backgroundImageCat' className='h-full w-full' />
                <img src={catImage} alt='dogImage' className={`absolute right-[8%] -bottom-[9px] h-[85%] duration-700 ${catAnimation ? '-translate-x-20 -translate-y-[53px] scale-150 duration-700':''}`} />
                <div className="absolute right-[30%] top-8 h-[60%]">
                    <div className={`relative h-full w-full ${catAnimation?'opacity-0 duration-700':'opacity-100 duration-700'}`}>
                        <img src={catThoughtImage} alt='thoughtClouds' className='h-full ' />
                        <p className='z-10 absolute left-[18%] top-[12%] w-[60%] m-auto text-center'>I can Purr-form complex calculations!!</p>
                    </div>
                </div>
                <div className='absolute left-[10%] tracking-wider bottom-[12%] flex flex-col items-center font-extrabold text-white drop-shadow-2xl'>
                    <p className={`text-9xl  duration-700 ${catAnimation?'duration-700 translate-x-16 scale-150 -translate-y-4':''}`}>MEOW</p>
                    <p className={`text-4xl duration-700 ${catAnimation?'duration-700 translate-x-16 scale-110 ':''}`}>TOO MANY CHEETAHS</p>
                </div>
            </Link>

            <Link to='/' className='flex flex-col items-center absolute right-10 top-5 h-12 w-12'>
                <img src={homeGif} alt='homeGif' className='h-10 w-10'/>
                <p className='text-[9px] text-slate-400'>Skip</p>
            </Link>
        </div>
    )
}

export default Start