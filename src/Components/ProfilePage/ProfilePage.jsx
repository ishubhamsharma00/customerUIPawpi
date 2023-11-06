import React,{useState} from 'react';
import usericon from "../../Images/profilepage/usericon.png"
import pawicon from "../../Images/profilepage/pawicon.png"
import userimg from "../../Images/profilepage/userimg.png"
import mailicon from "../../Images/profilepage/mailicon.png"
import phoneicon from "../../Images/profilepage/phoneicon.png"
import locationicon from "../../Images/profilepage/location icon.png"
import productimg from "../../Images/profilepage/productimg.png"
import { BiRupee } from "react-icons/bi";


const ProfilePage = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');

    // Handler functions for form inputs
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };
    const products = [
        {
            id: 1,
            name: 'Pedigree Tuna with Seabass Adult Dog Wet Food - 500gm',
            price: 700.0,
            originalPrice: 1200.0,
            image: productimg,
        },
        {
            id: 1,
            name: 'Pedigree Tuna with Seabass Adult Dog Wet Food - 500gm',
            price: 700.0,
            originalPrice: 1200.0,
            image: productimg,
        }, {
            id: 1,
            name: 'Pedigree Tuna with Seabass Adult Dog Wet Food - 500gm',
            price: 700.0,
            originalPrice: 1200.0,
            image: productimg,
        }, {
            id: 1,
            name: 'Pedigree Tuna with Seabass Adult Dog Wet Food - 500gm',
            price: 700.0,
            originalPrice: 1200.0,
            image: productimg,
        }, {
            id: 1,
            name: 'Pedigree Tuna with Seabass Adult Dog Wet Food - 500gm',
            price: 700.0,
            originalPrice: 1200.0,
            image: productimg,
        }, {
            id: 1,
            name: 'Pedigree Tuna with Seabass Adult Dog Wet Food - 500gm',
            price: 700.0,
            originalPrice: 1200.0,
            image: productimg,
        },
        // Add more products here...
    ];
    return (
        <div className="flex flex-wrap lg:flex-nowrap w-full">
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
                <div className="flex flex-col lg:flex-row  gap-x-32  rounded-lg m-2 p-4">
                    <div className='flex  lg:flex-col gap-4 items-center justify-center md:mx-10'>
                        <img src={userimg} alt="User" className="w-40 h-40" />
                        <p className='font-Raleway font-bold text-center my-4 text-2xl md:text-xl'>John Cena</p>
                    </div>

                    <div className="flex flex-col lg:w-2/4 ">
                        <form className="flex items-center border-2 rounded-xl shadow-xl  my-4  ">
                            <img src={mailicon} alt="Email" className="w-8 h-8 mr-2" />
                            <input
                                type="text"
                                placeholder="Email"
                                value={email}
                                onChange={handleEmailChange}
                                className="outline-none p-2"
                            />
                        </form>
                        <form className="flex items-center center border-2 rounded-xl shadow-xl my-4 p-2">
                            <img src={phoneicon} alt="Phone" className="w-8 h-8 mr-2" />
                            <input
                                type="text"
                                placeholder="Phone"
                                value={phone}
                                onChange={handlePhoneChange}
                                className="outline-none p-2"
                            />
                        </form>
                        <form className="flex items-center center border-2 rounded-xl shadow-xl p-2">
                            <img src={locationicon} alt="Location" className="w-8 h-8 mr-2" />
                            <input
                                type="text"
                                placeholder="Location"
                                value={location}
                                onChange={handleLocationChange}
                                className="outline-none p-2"
                            />
                        </form>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 p-10">
                    {products.map((product) => (
                        <div key={product.id} className='p-4 flex bg-[#D9D9D9] shadow-xl justify-between rounded-lg'>
                            <div className='flex gap-4'>
                                <img src={product.image} alt="Product" className="w-40 h-40 border-2 rounded-lg border-[#D9D9D6] bg-[#F4F5F5] p-4" />
                                <div className='flex flex-col'>
                                    <p className='font-Raleway font-medium p-2 text-black text-lg'>
                                        {product.name}
                                    </p>
                                    <div className='flex flex-wrap gap-2'>
                                        <p className='flex font-Raleway font-semibold text-black my-4'>
                                            <BiRupee className="text-xl" />
                                            {product.price}
                                        </p>
                                        <p className='line-through flex text-[#837E7E] my-4 '>
                                            <BiRupee className="text-xl" />
                                            {product.originalPrice}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;

