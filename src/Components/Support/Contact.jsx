import React from 'react';

const Contact = () => {
    return (
        <div className='p-8 h-full w-full'>
            <div className='flex items-center justify-center rounded-md bg-gray-100 font-paw w-full h-full'>
                <div className='flex flex-col w-full md:flex-row bg-white h-full border rounded-md shadow-md'>
                    <div className='w-full md:w-1/2 h-full p-6 md:rounded-l-md lg:rounded-l-md bg-white flex flex-col gap-4 font-paw md:border-r'>
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-purple-500 text-xl font-bold'>Info</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis explicabo repellendus harum distinctio fugit quia?</p>
                        </div>
                        <div>
                            <h1 className='text-lg font-bold'>Call At Us</h1>
                            <p>+1234567890</p>
                        </div>
                        <div>
                            <h1 className='text-lg font-bold'>For Support and Queries:</h1>
                            <p>tarachand122333@gmail.com</p>
                        </div>
                        <div className='w-48 h-48'>
                            <img src="https://cdn.shopify.com/s/files/1/0086/0795/7054/files/Image02.jpg?v=1681122090" alt="" className='w-full h-full' />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col items-center justify-center h-full font-paw">
                        <div className="w-full p-6 bg-white rounded-b-md md:rounded-r-md">
                            <h2 className="text-3xl font-bold text-center text-gray-800">Contact Us</h2>
                            <form className="mt-6">
                                <div className="mb-4">
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-600">Name</label>
                                    <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Enter your name" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>
                                    <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Enter your email" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-600">Message</label>
                                    <textarea id="message" className="w-full p-2 border border-gray-300 rounded-md" rows="4" placeholder="Enter your message"></textarea>
                                </div>
                                <button type="submit" className="w-full py-2 px-4 mt-4 font-semibold text-white bg-purple-500 rounded-md hover:bg-purple-500 focus:bg-blue-600">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
