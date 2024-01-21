import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReviewNextArrow, ReviewPrevArrow } from "../HeroCarousal/ArrowCarousel";
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';


const ReviewCarousel = () => {
    const settingsLg = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 7000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
        swipeToSlide: true,
        nextArrow: <ReviewNextArrow />,
        prevArrow: <ReviewPrevArrow />,
    };
    const settingsMd = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
        swipeToSlide: true,
    };
    const settingsSm = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
        swipeToSlide: true,
    };

    const ReviewCardDetails = [

        {
            id: 1,
            profilephoto: "https://wallpapers.com/images/featured/87h46gcobjl5e4xu.jpg",
            name: "Rajat Gautam",
            location: "Bikaner, Rajasthan",
            reviewtext: "Jai Shri Krishna! 🙏🐾 I wanted to express my gratitude for the excellent service and quality pet products provided by this website. 🛍️🌺"

                + " As a pet parent  having access to a reliable and diverse range of pet supplies is a blessing. 🐕💖 The website's commitment to customer satisfaction is truly commendable. 🌟😊" + " The user-friendly interface, quality products, and efficient delivery have elevated the pet care experience. 👏🏡🐾"

                + " Thank you for making the journey of pet parenting even more joyful! I highly recommend it to all my fellow pet enthusiasts. 🌈🐾",
        },
        {
            id: 2,
            profilephoto: "https://wallpapers.com/images/high/black-cat-and-halloween-moon-j88ksyskxe9fn2j2.webp",
            name: " Lalit Sharma",
            location: "Alwar, Rajasthan",
            reviewtext: "🐾 I can't express how delighted I am with the exceptional service from this amazing pet website! 🌟  I'm thrilled to share my experience. The moment I landed on the site, I was greeted with a vast array of pet products that cater to every furry friend's needs. 🐶✨"
                + " Kudos to the team for creating a haven for pet enthusiasts! 🎉 If you're a pet parent like me, look no further – this website is your one-stop-shop for quality, care, and an unbeatable shopping experience. Highly recommended! 👏🐕"
        },

        {
            id: 3,
            profilephoto: "https://images.freeimages.com/images/previews/7b4/grey-catbird-in-profile-1641861.jpg",
            name: "Tara Chand Kumawat",
            location: "Jodhpur, Rajasthan",
            reviewtext: " The website's easy navigation and detailed product descriptions in English make it accessible to all. 📖👌 Great job on fostering inclusivity!  But what truly sets this website apart is their dedication to customer satisfaction. The quick delivery and premium quality products have made my pet parenting journey in the bustling city much smoother. 🚚💖 The team's commitment to customer satisfaction is truly remarkable. 😊🌟The personalized touch and commitment to ensuring top-notch service make this site a go-to for all pet parents. 🏡🐾",
        },

        {
            id: 4,
            profilephoto: "https://wallpapers.com/images/high/kung-fu-panda-comedy-cartoon-v35py8oltdnthfkm.webp",
            name: "Ujjwal Sharma",
            location: "Jaipur, Rajasthan",
            reviewtext: "I found Pawpi very useful for my pet .    The diverse range of products and the prompt customer service have made my pet parenting journey a breeze. 🚚💖 The team's commitment to pet happiness is truly commendable. 😊🌟📖👌 Great job on fostering inclusivity!  🚚💖 The team's commitment to pet happiness is truly commendable. 😊🌟Dear pet parents, you're in for a treat! I highly recommend this platform for all your pet care needs. Thank you for making pet care  so convenient! 👏🐕",
        },
        {
            id: 5,
            profilephoto: "https://wallpapers.com/images/hd/cute-dynamic-cat-painting-vidcr63oige4h93a.webp",
            name: "Ananya Patel",
            location: "Ahmedabad, Gujarat",
            reviewtext: "🌈 Namaste from Ahmedabad! Ananya Patel here, and I must say this pet website is a blessing for Indian pet parents. 🐾🇮🇳 The diverse range of products accommodates the unique needs of our furry friends. 🛒🐕" + " The user-friendly interface made it a breeze to navigate, and the attention to detail in product descriptions is commendable. The seamless ordering process and swift delivery exceeded my expectations. 🚚💨"
                + " I recently ordered pet supplies, and the delivery was quick and hassle-free. 📦🚚 Kudos to the team for prioritizing customer satisfaction. 😊🌟 Highly recommended for all pet lovers in India!"

        },
        {
            id: 6,
            profilephoto: "https://wallpapers.com/images/hd/german-shepherd-animal-dg0v3u4ib8d50cm3.webp",
            name: "Aarav Sharma",
            location: "Jaipur, Rajasthan",
            reviewtext: "Namaste! Aarav Sharma from the Pink City here. 🌸🐾 I'm thrilled with the delightful pet products and excellent service provided by this website. 🛒🌟"

                + " Being a pet parent in Jaipur, it's wonderful to have access to a platform that caters to the needs of our furry friends. 🐕💖 The variety of products is extensive, and the quality is unmatched. 👍🌈"

                + " The team's dedication to customer satisfaction is evident in every order. Kudos to everyone behind the scenes! 🙌😊"

        },
    ];

    return (
        <>
            <div className="hidden lg:contents ">
                <Slider {...settingsLg}>
                    {
                        ReviewCardDetails.map((data) => (
                            <div className="p-10 pb-16 overflow-hidden">
                                <div className={`h-full flex rounded-xl text-left flex-col border border-gray-200 gap-3 p-6 shadow-2xl 
                                ${data.id % 2 == 0 ? 'text-white bg-[#9747FF]' : 'text-black bg-white'}`}>
                                    <img src={data.profilephoto} alt="profilePhoto" className="rounded-full w-14 h-14" />
                                    <div className="tracking-wide flex flex-col ">
                                        <p className={`text-lg uppercase`}>{data.name}</p>
                                        <p className={`font-light capitalize text-xs ${data.id % 2 == 0 ? 'text-white' : 'text-gray-500'}`}>{data.location}</p>
                                    </div>
                                    <FaQuoteLeft />
                                    <p className="text-sm text-justify line-clamp-6">{data.reviewtext}</p>
                                    <FaQuoteRight className=" ml-auto" />
                                </div>
                            </div>

                        ))
                    }
                </Slider>
            </div>

            <div className="hidden md:contents lg:hidden">
                <Slider {...settingsMd}>
                    {
                        ReviewCardDetails.map((data) => (
                            <div className="p-10 pb-16 overflow-hidden">
                                <div className={`h-full flex rounded-xl text-left flex-col border border-gray-200 gap-3 p-6 shadow-2xl 
                                ${data.id % 2 == 0 ? 'text-white bg-[#9747FF]' : 'text-black bg-white'}`}>
                                    <img src={data.profilephoto} alt="profilePhoto" className="rounded-full w-14 h-14" />
                                    <div className="tracking-wide flex flex-col ">
                                        <p className={`text-lg uppercase`}>{data.name}</p>
                                        <p className={`font-light capitalize text-xs ${data.id % 2 == 0 ? 'text-white' : 'text-gray-500'}`}>{data.location}</p>
                                    </div>
                                    <FaQuoteLeft />
                                    <p className="text-sm text-justify line-clamp-6">{data.reviewtext}</p>
                                    <FaQuoteRight className=" ml-auto" />
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>

            <div className="md:hidden">
                <Slider {...settingsSm}>
                    {
                        ReviewCardDetails.map((data) => (
                            <div className="p-10 pb-16 overflow-hidden">
                                <div className={`h-full flex rounded-xl text-left flex-col border border-gray-200 gap-3 p-6 shadow-2xl 
                                    ${data.id % 2 == 0 ? 'text-white bg-[#9747FF]' : 'text-black bg-white'}`}>
                                    <img src={data.profilephoto} alt="profilePhoto" className="rounded-full w-14 h-14" />
                                    <div className="tracking-wide flex flex-col ">
                                        <p className={`text-lg uppercase`}>{data.name}</p>
                                        <p className={`font-light capitalize text-xs ${data.id % 2 == 0 ? 'text-white' : 'text-gray-500'}`}>{data.location}</p>
                                    </div>
                                    <FaQuoteLeft />
                                    <p className="text-sm text-justify line-clamp-6">{data.reviewtext}</p>
                                    <FaQuoteRight className=" ml-auto" />
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </>
    );
};
export default ReviewCarousel;