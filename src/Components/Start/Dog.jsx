import React, { useState } from 'react';
import dogGang from '../../Images/StartPage/WelcomeAssets/Dog/dogGang.png';
import Labrador from '../../Images/StartPage/WelcomeAssets/Dog/labrador.png';
import Dalmatian from '../../Images/StartPage/WelcomeAssets/Dog/dalmatian.png';
import Pomeranian from '../../Images/StartPage/WelcomeAssets/Dog/pomeranian.png';
import Husky from '../../Images/StartPage/WelcomeAssets/Dog/husky.png';
import Indie from '../../Images/StartPage/WelcomeAssets/Dog/indie.png';
import Shihtzu from '../../Images/StartPage/WelcomeAssets/Dog/shihtzu.png';
import Puppy from '../../Images/StartPage/WelcomeAssets/Dog/puppy.png';
import AdultDog from '../../Images/StartPage/WelcomeAssets/Dog/adultdog.png';
import SeniorDog from '../../Images/StartPage/WelcomeAssets/Dog/seniordog.png';
import BlackFurr from '../../Images/StartPage/WelcomeAssets/color/blackfurr.png';
import BrownFurr from '../../Images/StartPage/WelcomeAssets/color/brownfurrdog.png';
import WhiteFurr from '../../Images/StartPage/WelcomeAssets/color/whitefurr.png';
import BlondeFurr from '../../Images/StartPage/WelcomeAssets/color/blondefurrdog.png';
import puppyIcon from '../../Images/StartPage/WelcomeAssets/Dog/puppyIcon.png';
import adultDogIcon from '../../Images/StartPage/WelcomeAssets/Dog/adultDogIcon.png';
import seniorDogIcon from '../../Images/StartPage/WelcomeAssets/Dog/seniorDogIcon.png';
import homeGif from '../../Images/StartPage/homeGif.gif';
import { Link } from 'react-router-dom';
import moveGif from '../../Images/StartPage/WelcomeAssets/moveGif.gif';


const Dog = () => {
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
        <div className='font-raleway relative overflow-hidden h-screen w-screen p-6 lg:py-12 flex flex-col gap-8 lg:justify-around'>
            <Link to='/home' className='flex flex-col items-center absolute right-1 md:right-10  top-5 h-12 w-12'>
                <img src={homeGif} alt='homeGif' className='h-10 w-10' />
                <p className='text-[9px] text-slate-400'>Skip</p>
            </Link>
            {selectedBreed && selectedAge && selectedColor &&
                <Link to='/home/dog' className='flex flex-col items-center absolute right-10 cursor-pointer md:bottom-20 h-12 w-12'>
                    <img src={moveGif} alt='moveGif' className='h-10 w-10' />
                    <p className='text-[9px] text-slate-400'>Move to Next Page</p>
                </Link>
            }

            {/* dog gang */}
            {/* <div className='hidden md:block absolute w-[30%] right-[10%] bottom-[5%] md:top-64 md:right-12'>
                <img src={dogGang} alt='dogGangImage' className='w-full' />
            </div> */}

            {/* BREED */}

            <p className="text-4xl m-0 lg:-mt-8  ">Choose your Pet</p>
            <div className='flex flex-col gap-2 w-full'>
            <p className='text-2xl font-bold tracking-wide my-1'>Breed : </p>

                <div className='flex flex-wrap w-[100%] md:h-[85%] md:w-full items-center justify-start gap-8 overflow-x-auto 2xl:gap-16'>
                    {/* Labrador */}
                    <div className={`relative rounded-xl  h-24 w-20 md:h-[85%] md:w-[12%] bg-[#FF9B9B] shadow-lg flex items-center justify-center first-letter: ${selectedBreed === 'Labrador' ? 'border-2 border-blue-400 rounded-xl' : ''} `}  onMouseEnter={() => handleIsHover('Labrador')} onMouseLeave={() => setIsHover('')} onClick={() => { handleBreedClick('Labrador') }}>
                        <img src={Labrador} alt='labrador' className='w-full h-full' />
                        
                        {isHover === 'Labrador' &&
                            <div className='hidden lg:block absolute py-2 bottom-0 rounded-xl -right-44 z-10 bg-white shadow-md border border-l-0 border-slate-200 h-full w-44 xl:w-56 xl:-right-56 2xl:w-60 2xl:-right-60 flex flex-col justify-around text-xs' onMouseEnter={() => setIsHover('')}>
                                <p className='w-full px-3 uppercase text-lg font-semibold tracking-wider'>Labrador</p>
                                <p className='w-full bg-[#FF9B9B] pl-3 text-white '>Place of origin: <span className='font-semibold px-1'>Canada</span></p>
                                <p className='w-full text-[7px] px-3 leading-snug'>Friendly, intelligent dogs originating from Newfoundland and Labrador, Canada. They are known for their loyalty, versatility, and gentle nature, making them popular family pets.</p>
                            </div>
                        }
                    </div>

                    {/* Dalmatian */}
                    <div className={`relative rounded-xl h-24 w-20 md:h-[85%] md:w-[12%] bg-[#BBF259] shadow-lg flex items-center justify-center ${selectedBreed === 'Dalmatian' ? 'border-2 border-blue-400' : ''}`} onMouseEnter={() => handleIsHover('Dalmatian')} onMouseLeave={() => setIsHover('')} onClick={() => { handleBreedClick('Dalmatian') }}>
                        <img src={Dalmatian} alt='Dalmatian' className={`h-full  `} />
                        {isHover === 'Dalmatian' &&
                            <div className=' hidden lg:block absolute py-2 bottom-0 rounded-xl -right-44 z-10 bg-white shadow-md border border-l-0 border-slate-200 h-full w-44 xl:w-56 xl:-right-56  2xl:w-60 2xl:-right-60 flex flex-col justify-around text-xs' onMouseEnter={() => setIsHover('')}>
                                <p className='w-full px-3 uppercase text-lg font-semibold tracking-wider'>Dalmatian</p>
                                <p className='w-full bg-[#BBF259] pl-3 text-white '>Place of origin: <span className='font-semibold px-1'>Croatia</span></p>
                                <p className='w-full text-[7px] px-3 leading-snug'>Dalmatians are distinctive dogs known for their unique coat pattern of spots. Energetic and playful, they are often associated with fire stations and have a rich history as carriage dogs.</p>
                            </div>
                        }
                    </div>

                    {/* Pomeranian */}
                    <div className={`relative rounded-xl h-24 w-20 md:h-[85%] md:w-[12%] bg-[#FFC95F] shadow-lg flex items-center justify-center ${selectedBreed === 'Pomeranian' ? 'border-2 border-blue-400 rounded-xl' : ''}`} onMouseEnter={() => handleIsHover('Pomeranian')} onMouseLeave={() => setIsHover('')} onClick={() => { handleBreedClick('Pomeranian') }}>
                        <img src={Pomeranian} alt='Pomeranian' className={`h-full  `} />
                        {isHover === 'Pomeranian' &&
                            <div className='hidden lg:block absolute py-2 bottom-0 rounded-xl -right-44 z-10 bg-white shadow-md border border-l-0 border-slate-200 h-full w-44 xl:w-56 xl:-right-56  2xl:w-60 2xl:-right-60 flex flex-col justify-around text-xs' onMouseEnter={() => setIsHover('')}>
                                <p className='w-full px-3 uppercase text-lg font-semibold tracking-wider'>Pomeranian</p>
                                <p className='w-full bg-[#FFC95F]  pl-3 text-white '>Place of origin: <span className='font-semibold px-1'>Poland</span></p>
                                <p className='w-full text-[7px] px-3 leading-snug'>Pomeranians are small, fluffy dogs known for their lively and extroverted nature. Originating from Pomerania, they are popular companion pets, cherished for their charming personalities.</p>
                            </div>
                        }
                    </div>

                    {/* Husky */}
                    <div className={`relative rounded-xl h-24 w-20 md:h-[85%] md:w-[12%] bg-[#C5DFF8] shadow-lg flex items-center justify-center ${selectedBreed === 'Husky' ? 'border-2 border-blue-400 rounded-xl' : ''}`} onMouseEnter={() => handleIsHover('Husky')} onMouseLeave={() => setIsHover('')} onClick={() => { handleBreedClick('Husky') }}>
                        <img src={Husky} alt='Husky' className={`h-full  `} />
                        {isHover === 'Husky' &&
                            <div className='hidden lg:block absolute py-2 bottom-0 rounded-xl -right-44 z-10 bg-white shadow-md border border-l-0 border-slate-200 h-full w-44 xl:w-56 xl:-right-56  2xl:w-60 2xl:-right-60 flex flex-col justify-around text-xs' onMouseEnter={() => setIsHover('')}>
                                <p className='w-full px-3 uppercase text-lg font-semibold tracking-wider'>Labrador</p>
                                <p className='w-full bg-[#C5DFF8] pl-3 text-white '>Place of origin: <span className='font-semibold px-1'>Russia</span></p>
                                <p className='w-full text-[7px] px-3 leading-snug'>Huskies, renowned Arctic sled dogs, possess striking blue or multi-colored eyes and a thick, double coat for insulation. They are intelligent, energetic, and make loyal companions for active families.</p>
                            </div>
                        }
                    </div>

                    {/* Indie */}
                    <div className={`relative rounded-xl h-24 w-20 md:h-[85%] md:w-[12%] bg-[#F24C3D] shadow-lg flex items-center justify-center ${selectedBreed === 'Indie' ? 'border-2 border-blue-400 rounded-xl' : ''}`} onMouseEnter={() => handleIsHover('Indie')} onMouseLeave={() => setIsHover('')} onClick={() => { handleBreedClick('Indie') }}>
                        <img src={Indie} alt='Indie' className={`h-full  `} />
                        {isHover === 'Indie' &&
                            <div className='hidden lg:block absolute py-2 bottom-0 rounded-xl -right-44 z-10 bg-white shadow-md border border-l-0 border-slate-200 h-full w-44 xl:w-56 xl:-right-56  2xl:w-60 2xl:-right-60 flex flex-col justify-around text-xs' onMouseEnter={() => setIsHover('')}>
                                <p className='w-full px-3 uppercase text-lg font-semibold tracking-wider'>Indie</p>
                                <p className='w-full bg-[#F24C3D] pl-3 text-white '>Place of origin: <span className='font-semibold px-1'>India</span></p>
                                <p className='w-full text-[7px] px-3 leading-snug'>Indie dogs, also known as Indian Pariah dogs, are a unique and diverse breed found in India. They are intelligent, adaptable, and make loyal and affectionate companions.</p>
                            </div>
                        }
                    </div>

                    {/* Shihtzu */}
                    <div className={`relative rounded-xl h-24 w-20 md:h-[85%] md:w-[12%] bg-[#C88EA7] shadow-lg flex items-center justify-center ${selectedBreed === 'Shihtzu' ? 'border-2 border-blue-400' : ''} `} onMouseEnter={() => handleIsHover('Shihtzu')} onMouseLeave={() => setIsHover('')} onClick={() => { handleBreedClick('Shihtzu') }}>
                        <img src={Shihtzu} alt='Shihtzu' className={`h-full `} />
                        {isHover === 'Shihtzu' &&
                            <div className='hidden lg:block absolute py-2 bottom-0 rounded-xl -right-44 z-10 bg-white shadow-md border border-l-0 border-slate-200 h-full w-44 xl:w-56 xl:-right-56 2xl:w-60 2xl:-right-60 flex flex-col justify-around text-xs' onMouseEnter={() => setIsHover('')}>
                                <p className='w-full px-3 uppercase text-lg font-semibold tracking-wider'>Shih Tzu</p>
                                <p className='w-full bg-[#C88EA7] pl-3 text-white '>Place of origin: <span className='font-semibold px-1'>China</span></p>
                                <p className='w-full text-[7px] px-3 leading-snug'>Shih Tzus, originating from China, are small, affectionate dogs known for their long, luxurious coats and friendly demeanor. They make excellent companions, bringing joy and love to their owners' lives.</p>
                            </div>
                        }
                    </div>
                </div>
            </div>


            {/* AGE */}
            <div className='hidden lg:flex flex-col lg:h-[50%] w-full py-8 md:py-0'>
                <p className='text-2xl font-bold tracking-wide my-2'>Age :</p>
                <div className='flex  lg:pb-24 items-center gap-10 overflow-x-auto md:h-[50%] lg:h-[85%]'>
                    {/* Puppy */}
                    <div className={`relative rounded-xl h-32 w-32 bg-[#F97B22] shadow-lg flex items-center justify-center ${selectedAge === 'Puppy' ? 'border-2 border-blue-400 rounded-xl' : ''}`} onMouseEnter={() => handleIsHover('Puppy')} onMouseLeave={() => setIsHover('')} onClick={() => handleAgeClick('Puppy')}>
                        <img src={Puppy} alt='puppy' className={`h-full ${isHover === 'Puppy' ? 'opacity-100' : 'opacity-100'}`} />

                        <div className={`bg-white shadow-md shadow-gray-300 rounded-xl z-10 h-52 w-96 absolute top-0 left-0 flex flex-col justify-around ${isHover === 'Puppy' ? 'duration-500 opacity-100' : 'hidden'}`}>
                            <div className={`h-32 w-32 absolute top-0 left-0 rounded-xl bg-[#F97B22] flex items-center justify-center ${selectedAge === 'Puppy' ? 'border-2 border-blue-400 rounded-xl' : ''}`}  >
                                <img src={Puppy} alt='Puppy' className='h-full' />
                            </div>
                            <div className='absolute top-0 left-0 bg-transparent rounded-xl h-32 w-32' onMouseLeave={() => handleIsHover('')}></div>
                            <div className='absolute top-3 right-3 w-[60%]'>
                                <p className='underline text-2xl tracking-widest underline-offset-8 font-bold'>0 to 8 Months</p>
                            </div>
                            <p className='w-[60%] absolute top-12 tracking-tight leading-snug text-sm text-gray-600 right-3'>A 0 to 8-month-old puppy is full of curiosity, playfulness, and boundless energy, eagerly exploring the world around them.</p>
                            <div className='flex w-full absolute bottom-0 items-center p-4 justify-center'>
                                <img src={puppyIcon} alt='puppyIcon' className='h-12 w-12 p-2 rounded-full bg-[#F97B22]' />
                                <div className='w-[23%] border-dashed  border-black border-2'></div>
                                <img src={adultDogIcon} alt='puppyIcon' className='h-12 w-12 p-2 rounded-full bg-[#D9D9D9]' />
                                <div className='w-[23%] border-dashed  border-black border-2'></div>
                                <img src={seniorDogIcon} alt='adultDogIcon' className='h-12 w-12 p-2 rounded-full bg-[#D9D9D9]' />
                            </div>
                        </div>
                    </div>

                    {/* Adult Dog */}
                    <div className={`relative rounded-xl h-32 w-32 bg-[#F6FA70] shadow-lg flex items-center justify-center ${selectedAge === 'AdultDog' ? 'border-2 border-blue-400 rounded-xl' : ''}`} onMouseEnter={() => handleIsHover('AdultDog')} onMouseLeave={() => setIsHover('')} onClick={() => handleAgeClick('AdultDog')}>
                        <img src={AdultDog} alt='AdultDog' className={`h-full ${isHover === 'AdultDog' ? 'opacity-0' : 'opacity-100'}`} />

                        <div className={`bg-white shadow-md shadow-gray-300 rounded-xl z-10 h-52 w-96 absolute top-0 left-0 flex flex-col justify-around ${isHover === 'AdultDog' ? 'duration-500 opacity-100' : 'hidden'}`}>
                            <div className='h-32 w-32 absolute top-0 left-0 rounded-xl bg-[#F6FA70] flex items-center justify-center'>
                                <img src={AdultDog} alt='AdultDog' className={`h-full ${selectedAge === 'AdultDog' ? 'border-2 border-blue-400 rounded-xl' : ''}`} />
                            </div>
                            <div className='absolute top-0 left-0 bg-transparent rounded-xl h-32 w-32' onMouseLeave={() => handleIsHover('')}></div>
                            <div className='absolute top-3 right-3 w-[60%]'>
                                <p className='underline text-2xl tracking-widest underline-offset-8 font-bold'>0.8 to 8 Years</p>
                            </div>
                            <p className='w-[60%] absolute top-12 tracking-tight leading-snug text-sm text-gray-600 right-3'>An adult dog is mature, loyal, and often calm, displaying a deep bond with their humans and a wealth of life experiences.</p>
                            <div className='flex w-full absolute bottom-0 items-center p-4 justify-center'>
                                <img src={puppyIcon} alt='puppyIcon' className='h-12 w-12 p-2 rounded-full bg-[#D9D9D9]' />
                                <div className='w-[23%] border-dashed  border-black border-2'></div>
                                <img src={adultDogIcon} alt='puppyIcon' className='h-12 w-12 p-2 rounded-full bg-[#F6FA70]' />
                                <div className='w-[23%] border-dashed  border-black border-2'></div>
                                <img src={seniorDogIcon} alt='adultDogIcon' className='h-12 w-12 p-2 rounded-full bg-[#D9D9D9]' />
                            </div>
                        </div>
                    </div>

                    {/* Senior Dog */}
                    <div className={`relative rounded-xl h-32 w-32 bg-[#E4A5FF] shadow-lg flex items-center justify-center ${selectedAge === 'SeniorDog' ? 'border-2 border-blue-400 rounded-xl' : ''}`} onMouseEnter={() => handleIsHover('SeniorDog')} onMouseLeave={() => setIsHover('')} onClick={() => handleAgeClick('SeniorDog')}>
                        <img src={SeniorDog} alt='SeniorDog' className={`h-full ${isHover === 'SeniorDog' ? 'opacity-0' : 'opacity-100'}`} />

                        <div className={`bg-white shadow-md shadow-gray-300 rounded-xl z-10 h-52 w-96 absolute top-0 left-0 flex flex-col justify-around ${isHover === 'SeniorDog' ? 'duration-500 opacity-100' : 'hidden duration-500'}`} >
                            <div className={`h-32 w-32 absolute top-0 left-0 rounded-xl bg-[#E4A5FF] flex items-center justify-center ${selectedAge === 'SeniorDog' ? 'border-2 border-blue-400 rounded-xl' : ''}`}>
                                <img src={SeniorDog} alt='SeniorDog' className='h-full' />
                            </div>
                            <div className='absolute top-0 left-0 bg-transparent rounded-xl h-32 w-32' onMouseLeave={() => handleIsHover('')}></div>
                            <div className='absolute top-3 right-3 w-[60%]'>
                                <p className='underline text-2xl tracking-widest underline-offset-8 font-bold'>8 to 15 Years</p>
                            </div>
                            <p className='w-[60%] absolute top-12 tracking-tight leading-snug text-sm text-gray-600 right-3'>A senior dog brings wisdom, love, and comfort. They embody a lifetime of experiences, teaching us valuable lessons with their gentle presence.</p>
                            <div className='flex w-full absolute bottom-0 items-center p-4 justify-center'>
                                <img src={puppyIcon} alt='puppyIcon' className='h-12 w-12 p-2 rounded-full bg-[#D9D9D9]' />
                                <div className='w-[23%] border-dashed  border-black border-2'></div>
                                <img src={adultDogIcon} alt='puppyIcon' className='h-12 w-12 p-2 rounded-full bg-[#D9D9D9]' />
                                <div className='w-[23%] border-dashed  border-black border-2'></div>
                                <img src={seniorDogIcon} alt='adultDogIcon' className='h-12 w-12 p-2 rounded-full bg-[#E4A5FF]' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  age cards for small and medium screen  */}

            <div className="lg:hidden flex flex-col md:h-[540%]  w-full ">
                <p className="text-2xl font-bold tracking-wide my-2">Age :</p>
                <div className="flex items-center gap-10 overflow-x-auto  md:h-[50%] lg:h-[85%]">
                    {/* Puppy */}
                    <div
                        className={`relative rounded-xl h-24 w-28 md:h-32 md:w-32 bg-[#F97B22] shadow-lg flex items-center justify-center ${selectedAge === 'Puppy' ? 'border-2 border-blue-400 rounded-xl' : ''
                            }`}
                        onClick={() => handleAgeClick('Puppy')}
                    >
                        <img src={Puppy} alt="puppy" className="h-full" />
                    </div>

                    {/* Adult Dog */}
                    <div
                        className={`relative rounded-xl h-24 w-28 md:h-32 md:w-32 bg-[#F6FA70] shadow-lg flex items-center justify-center ${selectedAge === 'AdultDog' ? 'border-2 border-blue-400 rounded-xl' : ''
                            }`}
                        onClick={() => handleAgeClick('AdultDog')}
                    >
                        <img src={AdultDog} alt="AdultDog" className="h-full" />
                    </div>

                    {/* Senior Dog */}
                    <div
                        className={`relative rounded-xl h-24 w-28 md:h-32 md:w-32 bg-[#E4A5FF] shadow-lg flex items-center justify-center ${selectedAge === 'SeniorDog' ? 'border-2 border-blue-400 rounded-xl' : ''
                            }`}
                        onClick={() => handleAgeClick('SeniorDog')}
                    >
                        <img src={SeniorDog} alt="SeniorDog" className="h-full" />
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
                    <div className={`rounded-xl h-24  w-28 flex items-center justify-center  ${selectedColor === 'BlondeFurr' ? 'border-2 border-blue-400' : ''}`} onClick={() => handleColourClick('BlondeFurr')}>
                        <img src={BlondeFurr} alt='BlondeFurr' className='h-full w-full' />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dog