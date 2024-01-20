import React, { useState } from 'react';
import catGang from '../../Images/StartPage/WelcomeAssets/Cat/cats.png';
import Shorthair from '../../Images/StartPage/WelcomeAssets/Cat/shorthair.png';
import Persian from '../../Images/StartPage/WelcomeAssets/Cat/persian.png';
import MaineCoon from '../../Images/StartPage/WelcomeAssets/Cat/mainecoon.png';
import Siamese from '../../Images/StartPage/WelcomeAssets/Cat/siamese.png';
import Ragdol from '../../Images/StartPage/WelcomeAssets/Cat/ragdoll.png';
import BengalCat from '../../Images/StartPage/WelcomeAssets/Cat/bengalcat.png';
import Kitten from '../../Images/StartPage/WelcomeAssets/Cat/kitten.png';
import AdultCat from '../../Images/StartPage/WelcomeAssets/Cat/adultcat.png';
import SeniorCat from '../../Images/StartPage/WelcomeAssets/Cat/seniorcat.png';
import BlackFurr from '../../Images/StartPage/WelcomeAssets/color/blackfurr.png';
import BrownFurr from '../../Images/StartPage/WelcomeAssets/color/brownfurrcat.png';
import WhiteFurr from '../../Images/StartPage/WelcomeAssets/color/whitefurr.png';
import KittenIcon from '../../Images/StartPage/WelcomeAssets/Cat/kittenicon.png';
import adultCatIcon from '../../Images/StartPage/WelcomeAssets/Cat/adultcaticon.png';
import seniorCatIcon from '../../Images/StartPage/WelcomeAssets/Cat/seniorcaticon.png';
import homeGif from '../../Images/StartPage/homeGif.gif';
import { Link } from 'react-router-dom';
import moveGif from '../../Images/StartPage/WelcomeAssets/moveGif.gif';









const Cat = () => {
    const [isHover, setIsHover] = useState('');
    const handleIsHover = (key) => {
        setIsHover(key);
    }

    //selected Breed
    const [selectedBreed, setSelectedBreed] = useState('');
    const handleBreedClick = (option) => {
        setSelectedBreed(option);
    }

    //selected Age
    const [selectedAge, setSelectedAge] = useState('');
    const handleAgeClick = (option) => {
        setSelectedAge(option);
    }

    //selected Colour
    const [selectedColor, setSelectedColor] = useState('');
    const handleColourClick = (option) => {
        setSelectedColor(option);
    }

    return (
        <div className='font-raleway relative overflow-hidden h-screen w-screen px-6 py-12 flex flex-col justify-between'>
            <Link to='/' className='flex flex-col items-center absolute right-1 md:right-10  top-5 h-12 w-12'>
                <img src={homeGif} alt='homeGif' className='h-10 w-10' />
                <p className='text-[9px] text-slate-400'>Skip</p>
            </Link>
            {selectedBreed && selectedAge && selectedColor &&
                <Link to='/dog' className='flex flex-col items-center absolute right-10   md:bottom-20 h-12 w-12'>
                    <img src={moveGif} alt='moveGif' className='h-10 w-10' />
                    <p className='text-[9px] text-slate-400'>Move to Next Page</p>
                </Link>
            }

            {/* catGang */}
            <div className='hidden md:block absolute w-[30%] right-[10%] bottom-[5%] md:top-64 md:right-12 2xl:top-96 2xl:right-48 '>
                <img src={catGang} alt='catGang' className='w-full' />
            </div>

            {/* BREED */}

            <p className="text-4xl m-auto -mt-8  ">Choose your Pet</p>
            <p className='text-2xl font-bold tracking-wide h-[5%] my-1'>Breed : </p>
            <div className='flex flex-col h-[30%] w-full'>
                <div className='flex flex-wrap  h-[60%] w-[100%] md:h-[85%] md:w-full items-center justify-start gap-8 overflow-x-auto 2xl:gap-16'>
                    {/* Shorthair */}
                    <div className={`relative rounded-xl  h-24 w-20 md:h-[85%] md:w-[12%] bg-[#FF9B9B] shadow-lg flex items-center justify-center first-letter: ${selectedBreed === 'Shorthair' ? 'border-2 border-blue-400 rounded-xl' : ''} `} onMouseEnter={() => handleIsHover('Shorthair')} onMouseLeave={() => setIsHover('')} onClick={() => { handleBreedClick('Shorthair') }}>
                        <img src={Shorthair} alt='Shorthair' className={`h-full `} />

                        {isHover === 'Shorthair' &&
                            <div className='hidden lg:block absolute py-2 bottom-0 rounded-xl -right-44 z-10 bg-white shadow-md border border-l-0 border-slate-200 h-full w-44 xl:w-56 xl:-right-56 2xl:w-60 2xl:-right-60 flex flex-col justify-around text-xs' onMouseEnter={() => setIsHover('')}>
                                <p className='w-full px-3 uppercase text-lg font-semibold tracking-wider'>Shorthair</p>
                                <p className='w-full bg-[#FF9B9B] pl-3 text-white '>Place of origin: <span className='font-semibold px-1'>Unknown</span></p>
                                <p className='w-full md:text-[5px] xl:text-[9px] 2xl:text-[12px] px-3 leading-snug'>The Shorthair cat is a popular and adaptable breed with short coats and mixed lineage. They are known for their diverse appearances and friendly temperaments, making them beloved household pets.
                                </p>
                            </div>
                        }
                    </div>

                    {/* Persian */}
                    <div className={`relative rounded-xl h-24 w-20 md:h-[85%] md:w-[12%] bg-[#BBF259] shadow-lg flex items-center justify-center ${selectedBreed === 'Persian' ? 'border-2 border-blue-400' : ''}`} onMouseEnter={() => handleIsHover('Persian')} onMouseLeave={() => setIsHover('')} onClick={() => { handleBreedClick('Persian') }}>
                        <img src={Persian} alt='Persian' className={`h-full  `} />
                        {isHover === 'Persian' &&
                            <div className=' hidden lg:block absolute py-2 bottom-0 rounded-xl -right-44 z-10 bg-white shadow-md border border-l-0 border-slate-200 h-full w-44 xl:w-56 xl:-right-56  2xl:w-60 2xl:-right-60 flex flex-col justify-around text-xs' onMouseEnter={() => setIsHover('')}>
                                <p className='w-full px-3 uppercase text-lg font-semibold tracking-wider'>Persian</p>
                                <p className='w-full bg-[#BBF259] pl-3 text-white '>Place of origin: <span className='font-semibold px-1'>Persia</span></p>
                                <p className='w-full  md:text-[5px] xl:text-[9px] 2xl:text-[12px] px-3 leading-snug'>Persian cats are known for their long, luxurious coats, expressive eyes, and sweet personalities. They originated in Persia (Iran) and are beloved for their beauty and gentle nature as companions.</p>
                            </div>
                        }
                    </div>

                    {/* MaineCoon */}
                    <div className={`relative rounded-xl h-24 w-20 md:h-[85%] md:w-[12%] bg-[#FFC95F] shadow-lg flex items-center justify-center ${selectedBreed === 'MaineCoon' ? 'border-2 border-blue-400 rounded-xl' : ''}`} onMouseEnter={() => handleIsHover('MaineCoon')} onMouseLeave={() => setIsHover('')} onClick={() => { handleBreedClick('MaineCoon') }}>
                        <img src={MaineCoon} alt='MaineCoon' className={`h-full  `} />
                        {isHover === 'MaineCoon' &&
                            <div className='hidden lg:block absolute py-2 bottom-0 rounded-xl -right-44 z-10 bg-white shadow-md border border-l-0 border-slate-200 h-full w-44 xl:w-56 xl:-right-56  2xl:w-60 2xl:-right-60 flex flex-col justify-around text-xs' onMouseEnter={() => setIsHover('')}>
                                <p className='w-full px-3 uppercase text-lg font-semibold tracking-wider'>MaineCoon</p>
                                <p className='w-full bg-[#FFC95F]  pl-3 text-white '>Place of origin: <span className='font-semibold px-1'>United States</span></p>
                                <p className='w-full md:text-[5px] xl:text-[9px] 2xl:text-[12px] px-3 leading-snug'>Maine Coon cats are a native breed of the United States, recognized for their large size, tufted ears, bushy tails, and friendly personalities. They are cherished as gentle and sociable companions.
                                </p>
                            </div>
                        }
                    </div>

                    {/* Siamese */}
                    <div className={`relative rounded-xl h-24 w-20 md:h-[85%] md:w-[12%] bg-[#C5DFF8] shadow-lg flex items-center justify-center ${selectedBreed === 'Siamese' ? 'border-2 border-blue-400 rounded-xl' : ''}`} onMouseEnter={() => handleIsHover('Siamese')} onMouseLeave={() => setIsHover('')} onClick={() => { handleBreedClick('Siamese') }}>
                        <img src={Siamese} alt='Siamese' className={`h-full  `} />
                        {isHover === 'Siamese' &&
                            <div className='hidden lg:block absolute py-2 bottom-0 rounded-xl -right-44 z-10 bg-white shadow-md border border-l-0 border-slate-200 h-full w-44 xl:w-56 xl:-right-56  2xl:w-60 2xl:-right-60 flex flex-col justify-around text-xs' onMouseEnter={() => setIsHover('')}>
                                <p className='w-full px-3 uppercase text-lg font-semibold tracking-wider'>Siamese</p>
                                <p className='w-full bg-[#C5DFF8] pl-3 text-white '>Place of origin: <span className='font-semibold px-1'>Thailand</span></p>
                                <p className='w-full md:text-[5px] xl:text-[9px] 2xl:text-[12px] px-3 leading-snug'>Siamese cats are an ancient breed from Thailand with striking blue eyes and color-point coats. They are sociable, vocal, and intelligent companions, known for their affectionate nature.
                                </p>
                            </div>
                        }
                    </div>

                    {/* Ragdol */}
                    <div className={`relative rounded-xl h-24 w-20 md:h-[85%] md:w-[12%] bg-[#F24C3D] shadow-lg flex items-center justify-center ${selectedBreed === 'Ragdol' ? 'border-2 border-blue-400 rounded-xl' : ''}`} onMouseEnter={() => handleIsHover('Ragdol')} onMouseLeave={() => setIsHover('')} onClick={() => { handleBreedClick('Ragdol') }}>
                        <img src={Ragdol} alt='Ragdol' className={`h-full  `} />
                        {isHover === 'Ragdol' &&
                            <div className='hidden lg:block absolute py-2 bottom-0 rounded-xl -right-44 z-10 bg-white shadow-md border border-l-0 border-slate-200 h-full w-44 xl:w-56 xl:-right-56  2xl:w-60 2xl:-right-60 flex flex-col justify-around text-xs' onMouseEnter={() => setIsHover('')}>
                                <p className='w-full px-3 uppercase text-lg font-semibold tracking-wider'>Ragdol</p>
                                <p className='w-full bg-[#F24C3D] pl-3 text-white '>Place of origin: <span className='font-semibold px-1'>California</span></p>
                                <p className='w-full md:text-[5px] xl:text-[9px] 2xl:text-[12px] px-3 leading-snug'>Ragdoll cats, originating in California, are known for their relaxed demeanor and tendency to go limp when held. They are affectionate, gentle, and make excellent companions.
                                </p>
                            </div>
                        }
                    </div>

                    {/* BengalCat */}
                    <div className={`relative rounded-xl h-24 w-20 md:h-[85%] md:w-[12%] bg-[#C88EA7] shadow-lg flex items-center justify-center ${selectedBreed === 'BengalCat' ? 'border-2 border-blue-400' : ''} `} onMouseEnter={() => handleIsHover('BengalCat')} onMouseLeave={() => setIsHover('')} onClick={() => { handleBreedClick('BengalCat') }}>
                        <img src={BengalCat} alt='BengalCat' className={`h-full `} />
                        {isHover === 'BengalCat' &&
                            <div className='hidden lg:block absolute py-2 bottom-0 rounded-xl -right-44 z-10 bg-white shadow-md border border-l-0 border-slate-200 h-full w-44 xl:w-56 xl:-right-56 2xl:w-60 2xl:-right-60 flex flex-col justify-around text-xs' onMouseEnter={() => setIsHover('')}>
                                <p className='w-full px-3 uppercase text-lg font-semibold tracking-wider'>Bengal Cat</p>
                                <p className='w-full bg-[#C88EA7] pl-3 text-white '>Place of origin: <span className='font-semibold px-1'>United States</span></p>
                                <p className='w-full md:text-[5px] xl:text-[9px] 2xl:text-[12px] px-3 leading-snug'>Bengal cats, originating in the USA, are known for their exotic appearance, resembling wild leopards. They are active, intelligent, and playful companions with striking coat patterns.
</p>
                            </div>
                        }
                    </div>
                </div>
            </div>


            {/* AGE */}
            <div className=' hidden lg:block flex flex-col h-[50%] w-full'>
                <p className='text-2xl font-bold tracking-wide my-2'>Age :</p>
                <div className='flex  lg:pb-24 items-center gap-10 overflow-x-auto md:h-[50%] lg:h-[85%]'>
                    {/* Kitten */}
                    <div className={`relative rounded-xl h-32 w-32 bg-[#F97B22] shadow-lg flex items-center justify-center ${selectedAge === 'Kitten' ? 'border-2 border-blue-400 rounded-xl' : ''}`} onMouseEnter={() => handleIsHover('Kitten')} onMouseLeave={() => setIsHover('')} onClick={() => handleAgeClick('Kitten')}>
                        <img src={Kitten} alt='Kitten' className={`h-full ${isHover === 'Kitten' ? 'opacity-100' : 'opacity-100'}`} />

                        <div className={`bg-white shadow-md shadow-gray-300 rounded-xl z-10 h-52 w-96 absolute top-0 left-0 flex flex-col justify-around ${isHover === 'Kitten' ? 'duration-500 opacity-100' : 'hidden'}`}>
                            <div className={`h-32 w-32 absolute top-0 left-0 rounded-xl bg-[#F97B22] flex items-center justify-center ${selectedAge === 'Kitten' ? 'border-2 border-blue-400 rounded-xl' : ''}`}  >
                                <img src={Kitten} alt='Kitten' className='h-full' />
                            </div>
                            <div className='absolute top-0 left-0 bg-transparent rounded-xl h-32 w-32' onMouseLeave={() => handleIsHover('')}></div>
                            <div className='absolute top-3 right-3 w-[60%]'>
                                <p className='underline text-2xl tracking-widest underline-offset-8 font-bold'>0 to 8 Months</p>
                            </div>
                            <p className='w-[60%] absolute top-12 tracking-tight leading-snug text-sm text-gray-600 right-3'>A 0 to 8-month-old Kitten is full of curiosity, playfulness, and boundless energy, eagerly exploring the world around them.</p>
                            <div className='flex w-full absolute bottom-0 items-center p-4 justify-center'>
                                <img src={KittenIcon} alt='KittenIcon' className='h-12 w-12 p-2 rounded-full bg-[#F97B22]' />
                                <div className='w-[23%] border-dashed  border-black border-2'></div>
                                <img src={adultCatIcon} alt='KittenIcon' className='h-12 w-12 p-2 rounded-full bg-[#D9D9D9]' />
                                <div className='w-[23%] border-dashed  border-black border-2'></div>
                                <img src={seniorCatIcon} alt='AdultCatIcon' className='h-12 w-12 p-2 rounded-full bg-[#D9D9D9]' />
                            </div>
                        </div>
                    </div>

                    {/* Adult Cat */}
                    <div className={`relative rounded-xl h-32 w-32 bg-[#F6FA70] shadow-lg flex items-center justify-center ${selectedAge === 'AdultCat' ? 'border-2 border-blue-400 rounded-xl' : ''}`} onMouseEnter={() => handleIsHover('AdultCat')} onMouseLeave={() => setIsHover('')} onClick={() => handleAgeClick('AdultCat')}>
                        <img src={AdultCat} alt='AdultCat' className={`h-full ${isHover === 'AdultCat' ? 'opacity-0' : 'opacity-100'}`} />

                        <div className={`bg-white shadow-md shadow-gray-300 rounded-xl z-10 h-52 w-96 absolute top-0 left-0 flex flex-col justify-around ${isHover === 'AdultCat' ? 'duration-500 opacity-100' : 'hidden'}`}>
                            <div className='h-32 w-32 absolute top-0 left-0 rounded-xl bg-[#F6FA70] flex items-center justify-center'>
                                <img src={AdultCat} alt='AdultCat' className={`h-full ${selectedAge === 'AdultCat' ? 'border-2 border-blue-400 rounded-xl' : ''}`} />
                            </div>
                            <div className='absolute top-0 left-0 bg-transparent rounded-xl h-32 w-32' onMouseLeave={() => handleIsHover('')}></div>
                            <div className='absolute top-3 right-3 w-[60%]'>
                                <p className='underline text-2xl tracking-widest underline-offset-8 font-bold'>0.8 to 8 Years</p>
                            </div>
                            <p className='w-[60%] absolute top-12 tracking-tight leading-snug text-sm text-gray-600 right-3'>An adult dog is mature, loyal, and often calm, displaying a deep bond with their humans and a wealth of life experiences.</p>
                            <div className='flex w-full absolute bottom-0 items-center p-4 justify-center'>
                                <img src={KittenIcon} alt='KittenIcon' className='h-12 w-12 p-2 rounded-full bg-[#D9D9D9]' />
                                <div className='w-[23%] border-dashed  border-black border-2'></div>
                                <img src={adultCatIcon} alt='KittenIcon' className='h-12 w-12 p-2 rounded-full bg-[#F6FA70]' />
                                <div className='w-[23%] border-dashed  border-black border-2'></div>
                                <img src={seniorCatIcon} alt='AdultCatIcon' className='h-12 w-12 p-2 rounded-full bg-[#D9D9D9]' />
                            </div>
                        </div>
                    </div>

                    {/* Senior Cat */}
                    <div className={`relative rounded-xl h-32 w-32 bg-[#E4A5FF] shadow-lg flex items-center justify-center ${selectedAge === 'SeniorCat' ? 'border-2 border-blue-400 rounded-xl' : ''}`} onMouseEnter={() => handleIsHover('SeniorCat')} onMouseLeave={() => setIsHover('')} onClick={() => handleAgeClick('SeniorCat')}>
                        <img src={SeniorCat} alt='SeniorCat' className={`h-full ${isHover === 'SeniorCat' ? 'opacity-0' : 'opacity-100'}`} />

                        <div className={`bg-white shadow-md shadow-gray-300 rounded-xl z-10 h-52 w-96 absolute top-0 left-0 flex flex-col justify-around ${isHover === 'SeniorCat' ? 'duration-500 opacity-100' : 'hidden duration-500'}`} >
                            <div className={`h-32 w-32 absolute top-0 left-0 rounded-xl bg-[#E4A5FF] flex items-center justify-center ${selectedAge === 'SeniorCat' ? 'border-2 border-blue-400 rounded-xl' : ''}`}>
                                <img src={SeniorCat} alt='SeniorCat' className='h-full' />
                            </div>
                            <div className='absolute top-0 left-0 bg-transparent rounded-xl h-32 w-32' onMouseLeave={() => handleIsHover('')}></div>
                            <div className='absolute top-3 right-3 w-[60%]'>
                                <p className='underline text-2xl tracking-widest underline-offset-8 font-bold'>8 to 15 Years</p>
                            </div>
                            <p className='w-[60%] absolute top-12 tracking-tight leading-snug text-sm text-gray-600 right-3'>A senior dog brings wisdom, love, and comfort. They embody a lifetime of experiences, teaching us valuable lessons with their gentle presence.</p>
                            <div className='flex w-full absolute bottom-0 items-center p-4 justify-center'>
                                <img src={KittenIcon} alt='KittenIcon' className='h-12 w-12 p-2 rounded-full bg-[#D9D9D9]' />
                                <div className='w-[23%] border-dashed  border-black border-2'></div>
                                <img src={adultCatIcon} alt='KittenIcon' className='h-12 w-12 p-2 rounded-full bg-[#D9D9D9]' />
                                <div className='w-[23%] border-dashed  border-black border-2'></div>
                                <img src={seniorCatIcon} alt='adultCatIcon' className='h-12 w-12 p-2 rounded-full bg-[#E4A5FF]' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  age cards for small and medium screen  */}

            <div className="lg:hidden flex flex-col h-[30%] md:h-[540%] w-full ">
                <p className="text-2xl font-bold tracking-wide my-2">Age :</p>
                <div className="flex items-center gap-10 overflow-x-auto  md:h-[50%] lg:h-[85%]">
                    {/* Kitten */}
                    <div
                        className={`relative rounded-xl h-24 w-28 md:h-32 md:w-32 bg-[#F97B22] shadow-lg flex items-center justify-center ${selectedAge === 'Kitten' ? 'border-2 border-blue-400 rounded-xl' : ''
                            }`}
                        onClick={() => handleAgeClick('Kitten')}
                    >
                        <img src={Kitten} alt="Kitten" className="h-full" />
                    </div>

                    {/* Adult Dog */}
                    <div
                        className={`relative rounded-xl h-24 w-28 md:h-32 md:w-32 bg-[#F6FA70] shadow-lg flex items-center justify-center ${selectedAge === 'AdultCat' ? 'border-2 border-blue-400 rounded-xl' : ''
                            }`}
                        onClick={() => handleAgeClick('AdultCat')}
                    >
                        <img src={AdultCat} alt="AdultCat" className="h-full" />
                    </div>

                    {/* Senior Dog */}
                    <div
                        className={`relative rounded-xl h-24 w-28 md:h-32 md:w-32 bg-[#E4A5FF] shadow-lg flex items-center justify-center ${selectedAge === 'SeniorCat' ? 'border-2 border-blue-400 rounded-xl' : ''
                            }`}
                        onClick={() => handleAgeClick('SeniorCat')}
                    >
                        <img src={SeniorCat} alt="SeniorCat" className="h-full" />
                    </div>
                </div>
            </div>

            {/* Colors */}


            <div className='flex flex-col gap-x-22 '>
                <p className='text-2xl font-bold tracking-wide my-2'>Colour : </p>
                <div className='flex items-center gap-1 overflow-x-auto'>
                    <div className={`rounded-xl h-24 w-28 flex items-center justify-center ${selectedColor === 'BlackFurr' ? 'border-2 border-blue-400' : ''}`} onClick={() => handleColourClick('BlackFurr')}>
                        <img src={BlackFurr} alt='BlackFurr' className='h-full w-full' />
                    </div>
                    <div className={`rounded-xl h-24 w-28 flex items-center justify-center ${selectedColor === 'WhiteFurr' ? 'border-2 border-blue-400' : ''}`} onClick={() => handleColourClick('WhiteFurr')}>
                        <img src={WhiteFurr} alt='WhiteFurr' className='h-full w-full' />
                    </div>
                    <div className={`rounded-xl h-24 w-28 flex items-center justify-center ${selectedColor === 'BrownFurr' ? 'border-2 border-blue-400' : ''}`} onClick={() => handleColourClick('BrownFurr')}>
                        <img src={BrownFurr} alt='BrownFurr' className='h-full w-full' />
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Cat