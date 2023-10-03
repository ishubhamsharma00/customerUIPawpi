import React from 'react';
import {IoMdArrowForward} from 'react-icons/io';
import {IoMdArrowBack} from 'react-icons/io'

export const NextArrow = (props) => {
  return (
  <>
  <div className='absolute right-8 top-40 z-10 cursor-pointer'>
    <div className="bg-white text-pawpi-purple rounded-full h-10 w-10 shadow-cyan-500 ring-4 shadow-lg text-2xl flex items-center justify-center" onClick={props.onClick} >
      <IoMdArrowForward/>
    </div>
  </div>
  
  </>
)
};
export const PrevArrow = (props) => {
return (
<>
  <div className='absolute left-8 top-40 z-10 cursor-pointer'>
  <div className="bg-white  text-pawpi-purple rounded-full h-10 w-10 shadow-cyan-500 ring-4 shadow-lg text-2xl flex items-center justify-center" onClick={props.onClick} >
    <IoMdArrowBack/>
  </div>
  </div>
</>
)
};


export const ProductNextArrow = (props) => {
  return (
  <>
  <div className='absolute -right-3 top-28 z-10 cursor-pointer'>
  <div className="bg-white text-pawpi-purple rounded-full h-10 w-10 shadow-cyan-500 ring-4 shadow-lg text-2xl flex items-center justify-center" onClick={props.onClick} >
    <IoMdArrowForward/>
  </div>
  </div>
  
  </>
)
};
export const ProductPrevArrow = (props) => {
return (
<>
  <div className='absolute -left-3 top-28 z-10 cursor-pointer'>
  <div className="bg-white  text-pawpi-purple rounded-full h-10 w-10 shadow-cyan-500 ring-4 shadow-lg text-2xl flex items-center justify-center" onClick={props.onClick} >
    <IoMdArrowBack/>
  </div>
  </div>
</>
)
};


export const PetNextArrow = (props) => {
  return (
  <>
  <div className='absolute -right-4 top-28 z-10 cursor-pointer'>
  <div className="bg-white text-pawpi-purple rounded-full h-8 w-8 shadow-cyan-500 ring-4 shadow-lg text-2xl flex items-center justify-center" onClick={props.onClick} >
    <IoMdArrowForward/>
  </div>
  </div>
  
  </>
)
};
export const PetPrevArrow = (props) => {
return (
<>
  <div className='absolute -left-4 top-28 z-10 cursor-pointer'>
  <div className="bg-white  text-pawpi-purple rounded-full h-8 w-8 shadow-cyan-500 ring-4 shadow-lg text-2xl flex items-center justify-center" onClick={props.onClick} >
    <IoMdArrowBack/>
  </div>
  </div>
</>
)
};


export const ReviewNextArrow = (props) => {
  return (
  <>
  <div className='absolute right-0 top-48 z-10 cursor-pointer'>
  <div className="bg-white text-pawpi-purple rounded-full h-10 w-10 shadow-cyan-500 ring-4 shadow-lg text-2xl flex items-center justify-center" onClick={props.onClick} >
    <IoMdArrowForward/>
  </div>
  </div>
  
  </>
)
};
export const ReviewPrevArrow = (props) => {
return (
<>
  <div className='absolute left-0 top-48 z-10 cursor-pointer'>
  <div className="bg-white  text-pawpi-purple rounded-full h-10 w-10 shadow-cyan-500 ring-4 shadow-lg text-2xl flex items-center justify-center" onClick={props.onClick} >
    <IoMdArrowBack/>
  </div>
  </div>
</>
)
};