import React, {  useState } from 'react'
import { Link } from "react-router-dom";
import { links } from './NavbarCategoriesData';
import {HiChevronDown} from 'react-icons/hi';
import {RxCross2} from "react-icons/rx"

const NavLinks = (props) => {
    const [heading, setHeading] = useState("");
    const [subHeading, setSubHeading] = useState("");

  return (
    <div className='flex w-full overflow-x-auto lg:justify-around flex-col gap-6 p-3 lg:flex-row md:gap-4 md:p-2 md:py-4 lg:p-0 lg:gap-0 '>
        {
            links.map((link)=>(
                <div className=''  key={link.id}>
                    {/* Pc */}
                    <div className='text-left lg:cursor-pointer group h-full w-full'>
                        <h1 className='flex items-center justify-between  uppercase group-hover:text-purple-500 lg:cursor-pointer font-paw md:text-2xl lg:text-lg px-3 lg:capitalize font-semibold lg:font-normal' 
                        onClick={()=>
                            {
                                heading !== link.name ? setHeading(link.name) : 
                                setHeading("");
                                setSubHeading("");
                            }
                            }>
                            <div className="flex items-center gap-3">
                                <img src={link.icon} 
                                alt="icons"
                                className="h-12 w-12 p-2 lg:hidden bg-amber-600 rounded-full"
                                />
                                <Link to={link.id} className='hidden lg:contents'>{link.name}</Link>
                                <h1 className="lg:hidden md:text-xl ">{link.name}</h1>
                            </div>
                            

                            {/* DownArrow for mobile*/}
                            <span className='text-xl md:text-2xl lg:hidden block '>
                                {
                                    heading === link.name ?  <RxCross2 className='font-semibold' /> : <HiChevronDown className='text-2xl' /> 
                                }
                            </span>

                            {/* DownArrow for pc */}
                            <span className="text-xl lg:ml-1 lg:block hidden group-hover:rotate-180">
                                <HiChevronDown />
                            </span>
                        </h1>

                        <div className='hidden lg:absolute top-0 left-0 group-hover:lg:flex hover:lg:flex w-full justify-center '>
                        {
                            link.submenu && (
                                <div className='absolute top-24 hidden  group-hover:flex bg-purple-50 border-2 shadow-2xl rounded-xl w-[90%] py-4'>
                                    <div className='text-black flex p-5 flex-wrap gap-8 w-full'> 
                                        {
                                            link.sublinks.map((mysublinks)=>(
                                                <div key={mysublinks.sublinksid}>
                                                    <h1 className='cursor-pointer text-lg font-paw'>
                                                        <Link to ={mysublinks.sublinksid}>{
                                                            mysublinks.Head
                                                        }
                                                        </Link>
                                                        
                                                    </h1>
                                                    {
                                                        mysublinks.sublink.map((slink)=>(  
                                                            <li className='text-sm font-paw pl-2 mt-1' key={slink.sublinkid} >
                                                                <Link to={slink.link}
                                                                className="text-gray-500 hover:border-b-2 hover:border-purple-500 hover:duration-100" >
                                                                    {slink.name}
                                                                </Link>
                                                            </li>
                                                        ))
                                                    }
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            )
                        }
                        </div>
                    </div>

                    {/* Mobile / tab */}
                    <div className={`
                        ${heading === link.name ? 'lg:hidden' : 'hidden'}
                        z-50 overflow-auto max-h-60`}
                        >
                        {
                            link.sublinks.map((slinks)=>(
                                <div className='z-50'>
                                    <div className='pt-2'>
                                        <h1 onClick={
                                            ()=> subHeading !== slinks.Head ? setSubHeading(slinks.Head): setSubHeading("")
                                        } className='py-1 px-10 flex justify-between md:px-12 font-paw text-base md:text-lg'>
                                            {slinks.Head}
                                            <span className='text-xl lg:hidden inline font-semibold'>
                                                            {
                                                                subHeading === slinks.Head ?  <RxCross2 className='font-semibold' /> : <HiChevronDown/> 
                                                            }
                                            </span>
                                        </h1>
                                    </div>
                                    <div className={`
                                        ${subHeading === slinks.Head ? 'lg:hidden' : 'hidden'}
                                    `}>
                                        {
                                            slinks.sublink.map((slink)=>(
                                                <li className='py-1 pl-16 md:pl-20 text-gray-500 text-base font-paw md:text-md'>
                                                    
                                                    <Link to={slink.link}> 
                                                        {slink.name}
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
            ))
        }
    </div>
  )
}

export default NavLinks;