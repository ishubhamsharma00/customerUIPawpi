import React from 'react';
import dog from "../../Images/ContactUs/contactus.png"
const Contact = () => {
    return (
        <>
            <div className="relative flex flex-col items-center  ">
                {/* Top Image */}
                <img
                    src={dog}
                    alt="Contact Us Image"
                    className="w-full h-full "
                />
            </div>
            {/* Contact Info Section */}

            <div className=' absolute top-[580px] xl:top[900px] p-8 h-auto w-full'>
                <div className='flex items-center justify-center rounded-xl  shadow-2xl border-2 w-full h-full'>
                    <div className='flex flex-col :w-[80%] md:flex-row bg-white w-full h-full border rounded-xl shadow-2xl'>
                        <div className="  p-4 h-full w-full md:w-96 ">
                            <div className="  grid grid-cols-2 gap-4 font-Raleway font-semibold">
                                <div className="col-span-2 md:col-span-1 outline-none">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="w-full rounded p-2  outline-none bg-[#F5F5F5] border border-white "
                                    />
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="w-full rounded p-2  outline-none bg-[#F5F5F5] border border-white "
                                    />
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        className="w-full rounded p-2   outline-none bg-[#F5F5F5] border border-white "
                                    />
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <input
                                        type="text"
                                        placeholder="Priority "
                                        className="w-full rounded p-2  outline-none bg-[#F5F5F5] border border-white "
                                    />
                                </div>
                                <div className="col-span-2">
                                    <textarea
                                        rows="4"
                                        placeholder="Type your message in here......."
                                        className="w-full rounded p-2  outline-none bg-[#F5F5F5] border border-white "
                                    />
                                </div>

                            </div>
                            <button className="bg-[#FCDD58] text-black font-semibold font-Raleway rounded-lg p-2 mt-4 w-full ">
                                Send Message
                            </button>
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col items-center justify-center h-full ">
                            <div className="w-full px-6 py-3  bg-white  rounded-b-md md:rounded-r-md">
                                <div className=' p-4 border-2 border-gray bg-[#FFFFFF] shadow-lg  rounded-xl text-sm text-center' >
                                    <h2 className=' font-Raleway font-semibold  border-b-2'>Email/Phone</h2>
                                    <p className='font-Raleway font-medium text-black mt-2'>care@pawpi.co</p>
                                    <p className='font-Raleway font-medium text-black'>+91- 701-486-3354</p>
                                    <p className='font-Raleway font-medium text-black'>+91- 701-486-3354</p>
                                </div>
                            </div>
                            <div className="w-full px-6  py-2 bg-white rounded-b-md md:rounded-r-md">
                                <div className='p-4 border-2 border-gray bg-[#FFFFFF] shadow-lg  rounded-xl text-sm  text-center' >
                                    <h2 className=' font-Raleway font-semibold  border-b-2'>Address</h2>
                                    <p className='font-Raleway font-medium text-black mt-2' >Block C, Bode Thomas Avenue,
                                        Wuse II, Zone X, FCT, Abuja,
                                        Jaipur, Rajashtan,
                                        302001</p>
                                </div>
                            </div>
                            <h2 className='mt-2'>Opening Hours: <span className='text-[#FCDD58]'>8AM-6PM</span> Everyday</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
