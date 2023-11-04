import React,{useState} from 'react';
import usericon from "../../Images/profilepage/usericon.png"
import pawicon from "../../Images/profilepage/pawicon.png"
import dogimg from "../../Images/profilepage/dogimg.png"
import dogicon from "../../Images/profilepage/dogicon.png"
import gendericon from "../../Images/profilepage/gendericon.png"
import Calendaricon from "../../Images/profilepage/calendaricon.png"



const PetProfile  = () => {
    const [breed, setBreed] = useState('');
    const [gender, setGender] = useState('');
    const [date, setDate] = useState('');

    // Handler functions for form inputs
    const handleBreedChange = (e) => {
        setBreed(e.target.value);
    };

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };
    const [isEditing, setIsEditing] = useState(false);

    const handleEditProfile = () => {
        setIsEditing(!isEditing);
    };
 
    return (
        <div className="flex flex-wrap lg:flex-nowrap w-full h-[90vh] mb-44 lg:mb-0">
            {/* Left Section (20% width) */}
            <div className="w-full lg:w-1/5  items-center  justify-center border-2 rounded-lg shadow-xl m-2">
                <div className="p-4">
                    <h2 className="font-bold text-xl">Profiles</h2>
                    <div className="my-4 flex gap-2 items-center">
                        <img src={usericon} alt="User" className="w-10 h-10 " />
                        <p className='font-Raleway font-semibold   text-xl'>John Cena</p>
                    </div>
                    <hr className="my-4" />
                    <div className="my-4 flex gap-2 items-center">
                        <img src={pawicon} alt="Dog" className="w-10 h-10" />
                        <p className='font-Raleway font-semibold text-xl '>Tyson</p>
                    </div>
                </div>
            </div>

            {/* Right Section (80% width) */}
            <div className="w-full lg:w-4/5  border-2 shadow-xl rounded-xl lg:mx-10">
                <div className="flex flex-col items-center justify-center text-center  gap-x-32  rounded-lg m-2 p-4">
                    <div className='flex  lg:flex-col gap-4 items-center justify-center md:mx-10'>
                        <img src={dogimg} alt="User" className="w-40 h-40" />
                        <p className='font-Raleway font-bold text-center my-4 text-2xl md:text-xl'>Tyson</p>
                    </div>

                    <div className="flex flex-col  sm:w-3/4 lg:w-2/4 ">
                        <form className="flex items-center border-2 rounded-xl shadow-xl  my-4 p-2 ">
                            <img src={dogicon} alt="breed" className="w-8 h-8 mr-2" />
                            <input
                                type="text"
                                placeholder="Labrador"
                                value={breed}
                                onChange={handleBreedChange}
                                className="outline-none p-2"
                            />
                        </form>
                        <form className="flex items-center center border-2 rounded-xl shadow-xl my-4 p-2">
                            <img src={gendericon} alt="Phone" className="w-8 h-8 mr-2" />
                            <input
                                type="text"
                                placeholder="Male"
                                value={gender}
                                onChange={handleGenderChange}
                                className="outline-none p-2"
                            />
                        </form>
                        <form className="flex items-center center border-2 rounded-xl shadow-xl p-2">
                            <img src={Calendaricon} alt="date" className="w-8 h-8 mr-2" />
                            <input
                                type="text"
                                placeholder="September 23, 2017"
                                value={date}
                                onChange={handleDateChange}
                                className="outline-none p-2"
                            />
                        </form>
                    </div>
                    <button onClick={handleEditProfile} className='bg-[#FF6969] text-white rounded-md px-8 py-4 my-4 lg:px-16 lg:my-8'>
                            {isEditing ? 'Save Profile' : 'Edit Profile'}
                        </button>

                </div>

                
            </div>
        </div>
    );
};

export default PetProfile;


