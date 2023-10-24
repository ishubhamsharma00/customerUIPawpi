import React from 'react';
import Doctor from "../../Images/Vet/doctor.png"
import { BsHospitalFill } from "react-icons/bs";
import { BiSolidPhoneCall } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";


const Vet = () => {
    // Sample data for the doctors
    const doctors = [
        {
            name: ' Dr. John Smith',
            address: '123 Main St, City, State',
            phoneNumber: '123-456-7890',
            rating: 4.5,
            image: "../../Images/Vet/doctor.png",
        },
        {
            name: ' Dr. John Smith',
            address: '123 Main St, City, State',
            phoneNumber: '123-456-7890',
            rating: 4.5,
            image: "../../Images/Vet/doctor.png",
        },
        {
            name: ' Dr. John Smith',
            address: '123 Main St, City, State',
            phoneNumber: '123-456-7890',
            rating: 4.5,
            image: "../../Images/Vet/doctor.png",
        },
        {
            name: ' Dr. John Smith',
            address: '123 Main St, City, State',
            phoneNumber: '123-456-7890',
            rating: 4.5,
            image: "../../Images/Vet/doctor.png",
        },
        {
            name: ' Dr. John Smith',
            address: '123 Main St, City, State',
            phoneNumber: '123-456-7890',
            rating: 4.5,
            image: "../../Images/Vet/doctor.png",
        },
        {
            name: ' Dr. John Smith',
            address: '123 Main St, City, State',
            phoneNumber: '123-456-7890',
            rating: 4.5,
            image: "../../Images/Vet/doctor.png",
        },
        {
            name: ' Dr. John Smith',
            address: '123 Main St, City, State',
            phoneNumber: '123-456-7890',
            rating: 4.5,
            image: "../../Images/Vet/doctor.png",
        },
        {
            name: ' Dr. John Smith',
            address: '123 Main St, City, State',
            phoneNumber: '123-456-7890',
            rating: 4.5,
            image: "../../Images/Vet/doctor.png",
        },
        
        // Add more doctor objects as needed
    ];

    return (
        <div className=" p-4">
            <h1 className="text-3xl font-bold  font-Raleway text-center my-4">Our Expert Veterinary Team</h1>
            <h3 className='text-xl font-semibold font-Raleway text-center my-4'>Passionate Professionals Dedicated to Your Pet's Health and Wellbeing"</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-4">
                {doctors.map((doctor, index) => (
                    <div
                        key={index}
                        className="bg-white p-4 rounded-xl shadow-lg border-2 mx-auto  "
                    >

                        <div className='p-2 flex flex-col sm:flex-row  gap-2 '>


                            <img src={Doctor} alt="ProductImage" className='h-28 w-20 ml-16  sm:ml-0  bg-white rounded' />


                            <div className='flex flex-col  p-2'>
                                <p className='font-Raleway font-semibold text-black  text-xl  '>Dr. Hakim Lukkha
                                </p>
                                <div className='flex items-center  w-full  '>
                                    <BsHospitalFill className='text-md m-2' />
                                    <p className='font-Raleway font-semibold  text-black  text-md  '> Konohagakure Hospital
                                    </p>
                                </div>

                                <div className='flex items-center m-1   '>
                                    <BiSolidPhoneCall className='text-xl ' />
                                    <p className='font-Raleway font-semibold  text-black  text-md '> +91-7014863354
                                    </p>
                                </div>

                            </div>
                            <div className="flex px-3 sm:px-0  items-end " >
                                <AiFillStar className="text-yellow-300 text-xl" />
                                <AiFillStar className="text-yellow-300 text-xl" />
                                <AiFillStar className="text-yellow-300 text-xl" />
                                <AiFillStar className="text-yellow-300 text-xl" />
                                <AiFillStar className="text-yellow-300 text-xl" />
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default Vet;

