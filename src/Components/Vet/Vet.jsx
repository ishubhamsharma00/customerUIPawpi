import React from 'react';
import { BsHospitalFill } from 'react-icons/bs';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import DoctorImage from '../../Images/Vet/doctor.png';

const Vet = () => {

    //   useEffect(() => {
    // const fetchData = async () => {
    //     try {
    //       const response = await axios.get('backend-api-url');
    //       setDoctors(response.data);
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    //   };
  
    //   fetchData();
    // }, []);



    // Sample data for the doctors
    const doctors = [
        {
            name: ' Dr. John Smith',
            address: '123 Main St, City, State',
            phoneNumber: '123-456-7890',
            rating: 4.5,
            image: DoctorImage,
        },
        {
            name: ' Dr. John Smith',
            address: '123 Main St, City, State',
            phoneNumber: '123-456-7890',
            rating: 4.5,
            image: DoctorImage,
        },
        {
            name: ' Dr. John Smith',
            address: '123 Main St, City, State',
            phoneNumber: '123-456-7890',
            rating: 4.5,
            image: DoctorImage,
        },
        {
            name: ' Dr. John Smith',
            address: '123 Main St, City, State',
            phoneNumber: '123-456-7890',
            rating: 4.5,
            image: DoctorImage,
        },
        {
            name: ' Dr. John Smith',
            address: '123 Main St, City, State',
            phoneNumber: '123-456-7890',
            rating: 4.5,
            image: DoctorImage,
        },
        {
            name: ' Dr. John Smith',
            address: '123 Main St, City, State',
            phoneNumber: '123-456-7890',
            rating: 4.5,
            image: DoctorImage,
        },
        {
            name: ' Dr. John Smith',
            address: '123 Main St, City, State',
            phoneNumber: '123-456-7890',
            rating: 4.5,
            image: DoctorImage,
        },
        {
            name: ' Dr. John Smith',
            address: '123 Main St, City, State',
            phoneNumber: '123-456-7890',
            rating: 4.5,
            image: DoctorImage,
        },
        {
            name: ' Dr. John Smith',
            address: '123 Main St, City, State',
            phoneNumber: '123-456-7890',
            rating: 4.5,
            image: DoctorImage,
        },
        {
            name: ' Dr. John Smith',
            address: '123 Main St, City, State',
            phoneNumber: '123-456-7890',
            rating: 4.5,
            image:DoctorImage,
        },
        {
            name: ' Dr. John Smith',
            address: '123 Main St, City, State',
            phoneNumber: '123-456-7890',
            rating: 4.5,
            image:DoctorImage,
        },
        {
            name: ' Dr. John Smith',
            address: '123 Main St, City, State',
            phoneNumber: '123-456-7890',
            rating: 4.5,
            image:DoctorImage,
        },
        // Add more doctor objects as needed
    ];

    return (
        <div className="min-h-screen p-4">
            <h1 className="text-3xl font-bold font-Raleway text-center my-4">Our Expert Veterinary Team</h1>
            <h3 className="text-xl font-semibold font-Raleway text-center my-4">Passionate Professionals Dedicated to Your Pet's Health and Wellbeing</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
                {doctors.map((doctor, index) => (
                    <div key={index} className="bg-white p-4 rounded-xl shadow-lg border-2">
                        <div className="p-2 flex flex-col gap-2">
                            <img src={doctor.image} alt="DoctorImage" className="h-28 w-20 mx-auto bg-white rounded" />

                            <div className="flex flex-col p-2 text-center sm:text-left">
                                <p className="font-Raleway font-bold text-black text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-xl mb-2 px-2">{doctor.name}</p>
                                <div className="flex items-center w-full mb-2">
                                    <BsHospitalFill className="text-md m-2" />
                                    <p className="font-Raleway font-semibold text-black text-md sm:text-lg md:text-md lg:text-md xl:text-md 2xl:text-md">{doctor.address}</p>
                                </div>
                                <div className="flex items-center m-1">
                                    <BiSolidPhoneCall className="text-xl" />
                                    <p className="font-Raleway font-semibold text-black text-md sm:text-lg md:text-md lg:text-md xl:text-md 2xl:text-md">{doctor.phoneNumber}</p>
                                </div>
                            </div>

                            <div className="flex px-3 items-start mx-1">
                                {[...Array(Math.floor(doctor.rating))].map((_, i) => (
                                    <AiFillStar key={i} className="text-yellow-300 text-xl" />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Vet;
