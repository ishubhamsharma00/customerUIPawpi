import React from 'react';
import FAQImg from '../../Images/FAQ/F.A.Q..png';
import FAQCartoon from '../../Images/FAQ/faqcartoon.png';
import BGImg from '../../Images/FAQ/bgimg.png';

const faqData = [
  {
    question: 'Q. What is the name of the 4th book of Harry Potter?',
    answer:
      'A. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris....',
  },
  {
    question: 'Q. What is the name of the 4th book of Harry Potter?',
    answer:
      'A. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris....',
  },
  {
    question: 'Q. What is the name of the 4th book of Harry Potter?',
    answer:
      'A. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris....',
  },
  {
    question: 'Q. What is the name of the 4th book of Harry Potter?',
    answer:
      'A. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris....',
  },
  {
    question: 'Q. What is the name of the 4th book of Harry Potter?',
    answer:
      'A. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris....',
  },
  {
    question: 'Q. What is the name of the 4th book of Harry Potter?',
    answer:
      'A. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris....',
  },
  {
    question: 'Q. What is the name of the 4th book of Harry Potter?',
    answer:
      'A. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris....',
  },
  {
    question: 'Q. What is the name of the 4th book of Harry Potter?',
    answer:
      'A. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris....',
  },
  {
    question: 'Q. What is the name of the 4th book of Harry Potter?',
    answer:
      'A. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris....',
  },
  // Add more FAQ items as needed
];

const FAQ = () => {
  return (
    <>
      <div className='h-[20vh] w-[100%] md:h-[60vh] lg:h-[70vh] xl:h-[90vh] w-100% bg-[#4D658A] mx-auto   '>
        <div className='relative flex flex-row'>
          <img
            src={FAQImg}
            alt='BackgroundImage'
            className='  flex-basis absolute hover:animate-bounce left-auto md:top-40 md:left-12 lg:top-40 lg:left-12 xl:top-56 xl:left-20 z-10 md:w-[40%]  md:h-auto h-10 my-20 mx-4 sm:my-0'
          />
          <img
            src={FAQCartoon}
            alt='Overlayimage'
            className='absolute  top-0 right-0 md:top-0 md:right-0 z-10 lg:top-0 lg:right-0 h-32 m-4 sm:my-0 md:h-96 xl:h-auto md:w-auto '
          />
        </div>
      </div>
      <div className='p-8' style={{ backgroundImage: `url(${BGImg})` }}>
        <div className='w-full h-full'>
          {faqData.map((faqItem, index) => (
            <div
              key={index}
              className='shadow-inner border-b-4 border-r-4 rounded-md bg-white border-[#D9D9D9] p-8 my-6'
            >
              <p className='font-Raleway font-semibold text-black md:text-[26px]  pb-2 items-center justify-center'>
                {faqItem.question}
              </p>
              <p className='font-Raleway font-semibold text-black text-[12px] md:text-sm lg:text-sm xl:text-lg items-center justify-center'>
                {faqItem.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;
