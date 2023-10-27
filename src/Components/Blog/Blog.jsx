import React from 'react'
import Image1 from '../../Images/Blog/image1.png'
import Image2 from '../../Images/Blog/image2.png'
import Image3 from '../../Images/Blog/image3.png'
import Image4 from '../../Images/Blog/image4.png'
import Image5 from '../../Images/Blog/image5.png'


const Card = ({ image, title, subheading }) => (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/4 p-4">
        <div className="bg-white rounded-lg shadow-md h-96">
            <img src={image} alt={title} className="w-full h-auto" />
            <div className="p-4 ">
                <h2 className="text-xl font-bold font-Raleway">{title}</h2>
                <p className="text-gray-600 font-Raleway font-semibold ">{subheading}</p>
            </div>
        </div>
    </div>
);

const Blog = () => {

    const announcements = [
        {
            title: 'How to Choose the Perfect Dog Bed',
            subheading: 'A balanced diet that meets AAFCO standards is vital for your pets overall well-being. Remember.....',
            image: Image3,
        },
        {
            title: 'Cat-Proofing Your Home',
            subheading: 'A balanced diet that meets AAFCO standards is vital for your pets overall well-being. Remember.....',
            image: Image4,
        },
        {
            title: 'Top 10 Toys to Keep Your Pet Busy',
            subheading: 'A balanced diet that meets AAFCO standards is vital for your pets overall well-being. Remember.....',
            image: Image5,
        },



    ];


    const blogs = [
        {
            title: 'How to Choose the Perfect Dog Bed',
            subheading: 'A balanced diet that meets AAFCO standards is vital for your pets overall well-being. Remember.....',
            image: Image3,
        },
        {
            title: 'Cat-Proofing Your Home',
            subheading: 'A balanced diet that meets AAFCO standards is vital for your pets overall well-being. Remember.....',
            image: Image4,
        },
        {
            title: 'Top 10 Toys to Keep Your Pet Busy',
            subheading: 'A balanced diet that meets AAFCO standards is vital for your pets overall well-being. Remember.....',
            image: Image5,
        },
        {
            title: 'How to Choose the Perfect Dog Bed',
            subheading: 'A balanced diet that meets AAFCO standards is vital for your pets overall well-being. Remember.....',
            image: Image3,
        },
        {
            title: 'Cat-Proofing Your Home',
            subheading: 'A balanced diet that meets AAFCO standards is vital for your pets overall well-being. Remember.....',
            image: Image4,
        },
        {
            title: 'Top 10 Toys to Keep Your Pet Busy',
            subheading: 'A balanced diet that meets AAFCO standards is vital for your pets overall well-being. Remember.....',
            image: Image5,
        },
        {
            title: 'How to Choose the Perfect Dog Bed',
            subheading: 'A balanced diet that meets AAFCO standards is vital for your pets overall well-being. Remember.....',
            image: Image3,
        },
        {
            title: 'Cat-Proofing Your Home',
            subheading: 'A balanced diet that meets AAFCO standards is vital for your pets overall well-being. Remember.....',
            image: Image4,
        },
        {
            title: 'Top 10 Toys to Keep Your Pet Busy',
            subheading: 'A balanced diet that meets AAFCO standards is vital for your pets overall well-being. Remember.....',
            image: Image5,
        },
        {
            title: 'How to Choose the Perfect Dog Bed',
            subheading: 'A balanced diet that meets AAFCO standards is vital for your pets overall well-being. Remember.....',
            image: Image3,
        },
        {
            title: 'Cat-Proofing Your Home',
            subheading: 'A balanced diet that meets AAFCO standards is vital for your pets overall well-being. Remember.....',
            image: Image4,
        },
        {
            title: 'Top 10 Toys to Keep Your Pet Busy',
            subheading: 'A balanced diet that meets AAFCO standards is vital for your pets overall well-being. Remember.....',
            image: Image5,
        },


    ];
    return (<>

        <div className=' '>
            <img src={Image1} alt="cat" className='w-full h-full ' />


            <div class="  top-48 flex flex-col md:flex-row mx-10 h-96">
                <div class="md:w-1/2 p-4 h-96 overflow-scroll xl:overflow-hidden bg-yellow-300 text-black">
                    <h2 class="text-2xl  font-Raleway font-bold mb-4">The Ultimate Guide to Choosing
                        the Right Pet Food</h2>
                    <p className=' font-Raleway font-semibold text-xs lg:text-[16px] leading-5  text-black'>To make the best choice, consider various factors, including your pet's age, breed, and dietary requirements. Puppies and kittens have different nutritional needs than adult or senior pets, and large and small breeds have unique dietary considerations. If your pet has allergies or sensitivities, specialized diets like grain-free or hypoallergenic options are available. Always scrutinize ingredient lists for quality, prioritizing real meat or fish as the primary ingredient.</p>
                    <button className=' text-white  px-6 py-2 my-4  mx-2 outline rounded-full hover:text-black'>Read More</button>

                </div>
                <div class="lg:w-1/2">
                    <img src={Image2} alt="Image" class="w-full h-full hidden sm:block" />
                </div>
            </div>
        </div>

        <div className=" container mx-auto px-4 ">
            <h1 className='font-bold font-Raleway text-xl px-6 pt-8 uppercase mx-10  '>Announcements</h1>
            <div className="flex flex-wrap mx-4">
                {announcements.map((announcements, index) => (
                    <Card key={index} {...announcements} />
                ))}
            </div>
        </div>

        <div className="container mx-auto px-4 ">
            <h1 className='font-bold font-Raleway text-xl px-6 py-4 uppercase mx-10  '> New Blogs</h1>
            <div className="flex flex-wrap mx-4">
                {blogs.map((blogs, index) => (
                    <Card key={index} {...blogs} />
                ))}
            </div>
        </div>
    </>

    )
}

export default Blog
