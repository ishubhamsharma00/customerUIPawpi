import React, { useState } from 'react';
import PrivacyPolicyImg from "../../Images/Privacy Policy/privacypolicy.png"
import Text from "../../Images/Privacy Policy/privacypolicytext.png"






const PrivacyPolicy = () => {
   // State to manage the selected topic
   const [selectedTopic, setSelectedTopic] = useState('');

   // Data containing topics and their respective information
   const topics = [
     { id: 1, title: 'Topic 1', content: 'Information related to Topic 1...' },
     { id: 2, title: 'Topic 2', content: 'Information related to Topic 2...' },
     // Add more topics as needed
   ];
 
   // Function to handle topic selection
   const handleTopicSelect = (topic) => {
     setSelectedTopic(topic);
   };
  return (
  <>

    {/* image for small screen */}
    <div className= 'block bg-[#FDF2EC] sm:hidden '>
      <div className='bg-[#FDF2EC] relative '>
      <img src={PrivacyPolicyImg} alt="image"  className=' h-32 w-auto z-0 absolute top-8 right-0 mr-5' />
      <img src={Text} alt="image"  className='h-16 w-auto   absolute top-16 left-0 mx-3'/>
      </div>
    
    </div>
 

    <div className=' hidden md:block  md:h-[40vh] lg:h-[55vh] xl:h-[70vh]  w-screen bg-[#FDF2EC] mx-auto mt-24'>
      <div className="relative">
        <img
          src={Text}
          alt="BackgroundImage"
          className=" absolute  md:top-16 md:left-12  z-0 lg:left-12  md:w-[40%]   h-auto"
        />
        <img
          src={PrivacyPolicyImg}
          alt="Overlayimage"
          className="absolute md:top-0 md:right-0 z-0 lg:top-0 lg:right-0 h-auto md:w-[50%]"
        />
      </div>
    </div>
 


    <div className="flex flex-col lg:flex-row mt-52 sm:mt-0">
      {/* Left Section (30% width on large screens, full width on small screens) */}
      <div className="w-full lg:w-1/3 p-4 bg-[#F9FAFB] border-r-2 shadow-lg" >
        <div className=" sm:my-24 md:mx-4 font-Raleway font-medium text-3xl">
          <ul>
            <li className="mb-16">
              <a href="#section1">1.Introduction</a>
            </li>
            <li className="my-16">
              <a href="#section2">2.Accountability Provisions</a>
            </li>
            <li className="my-16">
              <a href="#section3">3.Liability Provisions</a>
            </li>
            <li className="my-16">
              <a href="#section4">4.Privacy Policies</a>
            </li>
            <li className="my-16">
              <a href="#section5">5.Right to Termination</a>
            </li>
            <li className="my-16">
              <a href="#section4">6.User Rights and Responsibilities</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Section (70% width on large screens, full width on small screens) */}
      <div className="w-full lg:w-2/3 p-4 font-Raleway md:mx-10 my-16">
        <div>
          <h1 className="text-4xl font-bold mb-6">Terms And Services</h1>
          <h2 className="text-3xl font-bold mb-4">1.Introduction</h2>
          <div>
          {selectedTopic ? (
            <div>
              <h3 className="text-lg font-semibold">{selectedTopic.title}</h3>
              <p className="text-gray-600">{selectedTopic.content}</p>
            </div>
          ) : (
            <p className="text-gray-600">Select a topic to view information.</p>
          )}
        </div>
        </div>
      </div>
    </div>

  </>

  )
}

export default PrivacyPolicy
