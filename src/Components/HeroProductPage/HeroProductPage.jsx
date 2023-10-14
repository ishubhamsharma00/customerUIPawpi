import React, { useState } from 'react';
import {RiShareForwardFill} from 'react-icons/ri';
import TestingImage from '../../Images/foodtesting.png';
import { FaHeart,FaMinus,FaPlus } from 'react-icons/fa';
import { AiFillStar } from "react-icons/ai";
import vegIcon from '../../Images/vegIcon.png';
import { BiRupee } from "react-icons/bi";
import {IoLocationSharp} from "react-icons/io5";
import Product1 from "../../Images/BestSellingProducts/Product1.png";
import Product2 from "../../Images/BestSellingProducts/Product2.png";
import Product3 from "../../Images/BestSellingProducts/Product3.png";
import Product4 from "../../Images/BestSellingProducts/Product4.png";
import Product5 from "../../Images/BestSellingProducts/Product5.png";
import ProductCard from '../ProductCard/ProductCard';
import TestingImage2 from '../../Images/DogsPage/accessories.png';
import TestingImage3 from '../../Images/DogsPage/bowls.png';
import TestingImage4 from '../../Images/DogsPage/chews.png';
import TestingImage5 from '../../Images/DogsPage/clothing.png';
import TestingImage6 from '../../Images/DogsPage/dogsupplies.png';
import TestingImage7 from '../../Images/DogsPage/food.png';
import TestingImage8 from '../../Images/DogsPage/toys.png';
import {BsChevronDown, BsChevronUp} from 'react-icons/bs';
import { Link } from 'react-router-dom';

import codIcon from '../../Images/codIcon.png';
import exchangeIcon from '../../Images/exchangeIcon.png';
import securePaymentIcon from '../../Images/securePaymentIcon.png';

const HeroProductPage = () => {

    // useState for main-image and sub-images
    const [mainImage, setMainImage] = useState(TestingImage);
    const [carouselImages] = useState([
    TestingImage,
    TestingImage2,
    TestingImage3,
    TestingImage4,
    TestingImage5,
    TestingImage6,
    TestingImage7,
    TestingImage8
    ]);
    const handleImageClick = (image) => {
    setMainImage(image);
    };

    // useState for Additional Info dropdown
    const[isOpenAdditionalInfo,setIsOpenAdditionalInfo]=useState(false);
    const handleisOpenAdditionalInfo=()=>{
        setIsOpenAdditionalInfo(!isOpenAdditionalInfo);
    };

    // useState for Product Description dropdown
    const[isOpenProductDescription,setIsOpenProductDescription]=useState(false);
    const handleisOpenProductDescription=()=>{
        setIsOpenProductDescription(!isOpenProductDescription);
    };

    // useState function for sizes of product
    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };
    const SizesAvailable=["1 KG","2 KG","3 KG","4 KG","5 KG","10 KG"];

    // useState function for wishlist
    const [isAddedToWishlist,setIsAddedToWishlist]=useState(false);
    const handleWishlist=()=>{
        setIsAddedToWishlist(!isAddedToWishlist);
    };
    
    //useState function for Quantity option
    const [quantity,setQuantity]=useState(1);
    const increaseQuantity=()=>{
        setQuantity(quantity+1);
    };
    const decreaseQuantity=()=>{
        if(quantity>1){
        setQuantity(quantity-1);
        }
    };
    
    //useState function for AddToCart button
    const [isAddedToCart,setIsAddedToCart]=useState('Add To Cart');
    const handleCart=()=>{
        if(isAddedToCart==='Add To Cart')
        {
            setIsAddedToCart('Added to cart');
        }
        else{
            setIsAddedToCart('Add To Cart');
        }
    };

    // useState for pincode check
    const [isPinCode,setIsPinCode]=useState();

    const [pinCodeDisplay,setPinCodeDisplay]=useState(false);

    const Offers=["Get flat INr 149 Off on all orders above INR 2499. Use Code: PAWPI149","Get flat INr 200 Off on all orders above INR 3000. Use Code: PAWPI200","Get flat INr 200 Off on all orders above INR 3000. Use Code: PAWPI200","Get flat INr 200 Off on all orders above INR 3000. Use Code: PAWPI200"];

    const CardDetails = [
        {
          name: "Product 1",
          description: "Lorem ipsum dolor sihjbygvbgbvygvbghvb hg vgh ghgv gvkt",
          reviews: "5,789",
          price: "1,244.00",
          image: Product1,
          mrp: "2525",
        },
        
        {
          name: "Product 2",
          description: "Lorem ipsum dolor sit",
          reviews: "5,789",
          price: "1,244.00",
          image: Product2,
          mrp: "2525",
        },
    
        {
          name: "Product 3",
          description: "Lorem ipsum dolor sit",
          reviews: "5,789",
          price: "1,244.00",
          image: Product3,
          mrp: "2525",
        },
    
        {
          name: "Product 4",
          description: "Lorem ipsum dolor sit",
          reviews: "5,789",
          price: "1,244.00",
          image: Product4,
          mrp: "2525",
        },
    
        {
          name: "Product 5",
          description: "Lorem ipsum dolor sit",
          reviews: "5,789",
          price: "1,244.00",
          image: Product5,
          mrp: "2525",
        },
    
    ];

    // Review sorting button selection
    const [isSelected, setIsSelected] = useState('Relevance');
    const handleisSelected=(option)=>{
        setIsSelected(option);
    };

    const SortingButtons=["Relevance","Latest","Top Rated","Low Rated"];

    const Reviews=[
        {
            ProfilePhoto: "https://w0.peakpx.com/wallpaper/979/89/HD-wallpaper-purple-smile-design-eye-smily-profile-pic-face.jpg",
            Name: "Shubham Sharma",
            City: "Jaipur",
            State: "Rajasthan",
            Date: "May 20, 2023",
            reviewtext: "jhgvf br fvhrfv  igrvfeyirfbfrvysbfv iufvdrig veiurgfivgrs veiruhfgrugvbdr gvudrhgv edguvhrigv urhv erdugvhdurgv ev eiudv eih vlieibv ku",
        },
        {
            ProfilePhoto: "https://w0.peakpx.com/wallpaper/979/89/HD-wallpaper-purple-smile-design-eye-smily-profile-pic-face.jpg",
            Name: "Tara Chand Kumawat",
            City: "Jobner",
            State: "Rajasthan",
            Date: "May 21, 2023",
            reviewtext: "jhgvf br fvhrfv  igrvfeyirfbfrvysbfv iufvdrig veiurgfivgrs veiruhfgrugvbdr gvudrhgv edguvhrigv urhv erdugvhdurgv ev eiudv eih vlieibv ku",
        },
        {
            ProfilePhoto: "https://w0.peakpx.com/wallpaper/979/89/HD-wallpaper-purple-smile-design-eye-smily-profile-pic-face.jpg",
            Name: "Ujjwal Sharma",
            City: "Beijing",
            State: "Manchuria",
            Date: "May 22, 2023",
            reviewtext: "jhgvf br fvhrfv  igrvfeyirfbfrvysbfv iufvdrig veiurgfivgrs veiruhfgrugvbdr gvudrhgv edguvhrigv urhv erdugvhdurgv ev eiudv eih vlieibv ku",
        },
    
    ];

  return (
    <div className='md:mt-24 pt-2 h-full w-full flex flex-col gap-6 bg-white md:px-6 px-2'>
        {/* Path and Share option */}
        <div className='flex items-center justify-between'>
            <div className='h-full font-paw max-w-[70%] md:max-w-[50%] truncate text-xs md:text-lg capitalize pl-4'>
                home/dog/Dog_Food/Dry_Food/Royal_Canin
            </div>
            <div className='h-full flex font-paw items-center text-sm md:text-lg text-purple-500 cursor-pointer'>
                <RiShareForwardFill className='scale-125 mr-1'/> 
                Share
            </div>
        </div>

        {/* Image and Product brief description */}
        <div className='lg:flex-row h-full w-full flex flex-col bg-white md:gap-6'>
            {/* Main and sub-images */}
            <div className='h-full gap-1 pb-6 lg:pb-10 w-full lg:w-[40%] bg-white sticky top-16 md:top-24 lg:flex-col md:gap-6 flex flex-row-reverse px-2 md:px-4'>
                {/* Main Image with veg/nonveg and wishlist icons */}
                <div className='h-60 md:h-[440px] w-[80%] lg:w-full bg-[#F2F2F2] flex justify-center rounded-2xl'>
                    <div className='h-full w-full flex items-center'>
                        <img src={mainImage} alt="ProductiImage" className='w-full h-[90%]'/>
                    </div>
                    <div className='flex flex-col items-center justify-between my-4'>
                        <FaHeart className={`cursor-pointer p-1 md:h-8 md:w-8 h-6 w-6 lg:hover:scale-125  ${isAddedToWishlist? `text-red-600`:` text-gray-400 lg:hover:duration-200`}`}
                        onClick={handleWishlist}/>
                        <img src={vegIcon} alt="VegorNonVeg" className='p-1 md:h-10 md:w-10 h-8 w-8'/>
                    </div>
                </div>
                
                {/* Sub-images */}
                <div className='lg:h-full md:h-[440px] h-60 bg-purple-50 rounded-xl flex flex-col w-[20%] lg:w-full lg:flex-row items-center justify-between lg:overflow-x-auto overflow-y-auto overflow-scroll'>
                    {/* <div className='h-10 w-12 md:h-16 md:w-20'>
                        <img src={TestingImage} alt="sub-images" className='h-full w-full'/>
                    </div> */}
                    {carouselImages.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`CarouselImage ${index + 1}`}
                        className={`lg:w-1/5 w-3/4 shadow-xl md:w-2/3 h-1/5 lg:h-20 p-1 lg:mx-1 my-1 md:my-2 lg:my-0 flex items-center cursor-pointer rounded-md lg:rounded-xl 
                        ${image === mainImage ? 'bg-purple-200' : 'bg-white'}`}
                        onClick={() => handleImageClick(image)}
                    />
                    ))}
                </div>
            </div>
            
            {/* Brief description */}
            <div className='flex lg:w-[55%] flex-col lg:gap-3 gap-1 pl-2'>
                <div className='uppercase font-paw text-sm md:text-lg tracking-wider'>Royal canin</div>
                <div className='uppercase font-paw text-lg md:text-xl font-bold tracking-wide'>Royal Canin Starter mini 10 kg</div>
                <div className='capitalize font-paw text-sm md:text-base tracking-wide'>High-quality,wholesome,balanced dog food</div>
                <div className='flex gap-2 items-center justify-start'>
                    <div className='flex'>
                        <AiFillStar className="text-yellow-300 text-lg md:text-3xl" />
                        <AiFillStar className="text-yellow-300 text-lg md:text-3xl" />
                        <AiFillStar className="text-yellow-300 text-lg md:text-3xl" />
                        <AiFillStar className="text-yellow-300 text-lg md:text-3xl" />
                        <AiFillStar className="text-yellow-300 text-lg md:text-3xl" />
                    </div>
                    <div className='border-r-2 font-paw text-lg border-black font-light pr-2'>4.9</div>
                    <div className='font-paw text-base md:text-lg font-light'>435 Reviews</div>
                </div>
                <div className='flex gap-2 items-center'>
                    <div className='font-paw flex items-center border-r-2 border-black pr-2 text-xl'>
                        <div className='flex text-3xl items-center text-purple-500'>
                            <BiRupee />
                            <p className='text-purple-500'>150</p>
                        </div>
                        <div className='flex text-xl font-semibold items-center line-through text-gray-500'>
                            <BiRupee/>
                            <p>166</p>
                        </div>
                    </div>
                    <div className='text-green-500 font-paw text-base md:text-xl'>10% OFF</div>
                    <div className='md:text-sm text-xs font-paw'>(Inclusive of all taxes)</div>
                </div>
                <div className='flex text-sm font-paw md:text-base gap-2 border-b-2 pb-1 border-gray-400'>
                    <div className='uppercase'>Seller:</div>
                    <div className='font-light'>XYZ Suppliers</div>
                </div>
                
                {/* Sizes of product */}
                <div className='flex flex-wrap md:gap-4 gap-2 font-paw text-base md:text-lg w-full pt-2 items-center'>
                    <span className='font-paw font-semibold'>Sizes:</span>
                    {SizesAvailable.map((data)=>(
                    <div className='flex gap-2 text-sm md:text-lg items-center'>
                        <div 
                            className={`flex border-purple-500 font-semibold items-center justify-center cursor-pointer w-16 md:w-20 border-2 rounded-md
                            ${selectedOption === `${data}` ? 'text-white bg-purple-500' : 'text-purple-700 bg-white'}`}
                            onClick={() => handleOptionClick(`${data}`)}
                            >
                            <span>{data}</span>
                        </div>
                    </div>
                    ))}
                </div>
                
                {/* Quantity selection */}
                <div className='flex h-full gap-4 my-1 items-center border-b-2 pt-2 pb-4 border-gray-400'>
                    <div className='md:text-xl text-lg font-paw font-semibold'>Quantity:</div>
                    <div className='flex drop-shadow-md h-14 items-center w-1/3 font-paw text-lg border border-gray-400 rounded-md bg-gray-50'>
                        <FaMinus className='w-1/3 h-3/4 cursor-pointer flex text-amber-300 items-center justify-center' onClick={decreaseQuantity}/>
                        <p className='w-1/3 text-3xl font-semibold flex items-center justify-center border-black p-2'>{quantity}</p>
                        <FaPlus className='w-1/3 flex cursor-pointer h-3/4 text-amber-300 items-center justify-center' onClick={increaseQuantity}/>
                    </div>
                </div>

                <div className='flex gap-3 w-full text-base md:text-xl font-semibold my-3'>
                    <button className={`shadow-xl border-2 py-2 w-1/2 font-paw rounded-md md:rounded-sm uppercase border-purple-400 ${isAddedToCart==='Add To Cart'?'text-purple-500':'text-white bg-purple-300'}`} onClick={handleCart}>{isAddedToCart}</button>
                    <Link to={'/auth/checkout'} className='shadow-xl font-semibold tracking-widest text-white border-2 py-2 bg-green-500 font-paw uppercase text-center lg:animate-pulse rounded-md md:rounded-sm w-1/2 text-white-500'>BUY NOW</Link>
                </div>

                {/* Offers Section */}
                <div className='flex gap-2 font-paw text-xs md:text-base flex-col w-full items-start'>
                    {Offers.map((data)=>(
                        <div className='flex py-2 items-center justify-center border font-light tracking-wide w-full rounded-lg bg-green-100 border-green-400'>{data}</div>
                    ))}
                </div>

                {/* Delivery & Services section */}
                <div className='flex flex-col font-paw w-full gap-2 my-2'> 
                    <div className='font-paw text-lg font-semibold'>Delivery & Services</div>
                    <div className='flex md:gap-2 shadow-xl gap-1 bg-white rounded-xl w-full md:w-2/3 md:p-4 border border-gray-400 items-center justify-between'>
                        <IoLocationSharp className='md:h-8 md:w-8 h-6 w-6 text-green-500 m-auto'/>
                        <div className='m-auto w-1/2'>
                            <input type='search'
                            placeholder='Enter Delivery Pincode'
                            className='bg-white outline-none md:text-xl text-base placeholder:text-base md:placeholder:text-xl text-black'
                            value={isPinCode}
                            onChange={(e)=>setIsPinCode(e.target.value)}
                            />
                        </div>
                        <button className='text-green-500 font-semibold text-lg m-auto w-1/4'onClick={()=>setPinCodeDisplay(true)}>Check</button>
                    </div>
                    {pinCodeDisplay && 
                    <div>
                        {isPinCode.length ===6 ?
                        (
                            <>
                            {
                                isPinCode=="302012"?(
                            
                                <div className='text-green-400'>
                                    Eligible for faster delivery!!
                                </div>):
                                (<div className='text-red-400'>
                                Standard Delivery is only Possible
                            </div>)
                            }
                            </>
                        ):
                        (
                            <div className='text-gray-400 uppercase'>invalid pincode</div>
                        )}
                    </div>}
                </div>
                <div className='p-4 rounded-md border-2 border-[#F97B22] flex items-center justify-around'>
                    <div className='flex flex-col items-center justify-center '>
                        <img src={codIcon} alt='codIcon' className='rounded-full border-2 border-[#F97B22] p-2'/>
                        <p className='text-sm mt-1 font-light'>COD Available</p>
                    </div>
                    <div className='flex flex-col items-center justify-center '>
                        <img src={exchangeIcon} alt='exchangeIcon' className='rounded-full border-2 border-[#F97B22] p-2'/>
                        <p className='text-sm mt-1 font-light'>No Exchange & Returns</p>
                    </div>
                    <div className='flex flex-col items-center justify-center '>
                        <img src={securePaymentIcon} alt='securePaymentIcon' className='rounded-full border-2 border-[#F97B22] p-2'/>
                        <p className='text-sm mt-1 font-light'>Secure Payments</p>
                    </div>
                </div>
            </div>
        </div>

        {/* frequently bought together option if user adds to cart,or buyies now */}
        <div className={`my-4 ${isAddedToCart==='Added to cart'?'':'hidden'}`}>
            <p className='sticky top-16 md:top-24 lg:top-0 font-paw font-semibold text-3xl bg-white pt-4 pb-1 capitalize flex items-center justify-center'>frequently Bought Together</p>
            <div className='grid grid-cols-2 md:grid-cols-3 md:gap-2 lg:grid-cols-5 lg:gap-4 py-4 px-2 bg-white'>
                {CardDetails.map((data) => (<ProductCard {...data}/>
                ))}
            </div>
        </div>

        {/* Full description of product */}
        <div className='flex flex-col gap-4 w-full'>
            {/* Point-wise product-description */}
            <div className='bg-white w-full'>
                <div className='px-4 md:px-8 sticky top-16 md:top-24 lg:top-0 font-paw font-semibold bg-gray-200 rounded-lg text-lg justify-between md:text-3xl pt-4 pb-1 capitalize flex items-center shadow-sm z-10 active:text-purple-500 ' 
                    onClick={handleisOpenProductDescription}>
                    <p>Product Description</p>
                    {isOpenProductDescription?(<BsChevronUp/>):(<BsChevronDown/>)}
                </div>
                {/* <p className='sticky top-16 md:top-24  lg:top-0 font-paw font-semibold text-3xl pt-4 pb-1 capitalize flex items-center justify-center bg-white shadow-sm'>Product Description</p> */}
                {isOpenProductDescription &&(
                    <>
                <table className="min-w-full">
                    <tbody>
                        <tr className="bg-white font-paw text-base">
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">ProductName</td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">Royal Canin Starter Mini 10Kg</td>
                        </tr>
                        <tr className="bg-white font-paw text-base">
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">CompanyName</td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">Royal Canin</td>
                        </tr>
                        <tr className="bg-white font-paw text-base">
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">ManufacturingDate</td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">02/2023</td>
                        </tr>
                        <tr className="bg-white font-paw text-base">
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">ProductType</td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">Dry Food</td>
                        </tr>
                        <tr className="bg-white font-paw text-base">
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">NetWeight</td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">370 g</td>
                        </tr>
                        <tr className="bg-white font-paw text-base">
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">Manufactured And Marketed By</td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">Mars Internationals India Pvt Ltd Survey no-2099-2103, Village Avusulonipally, Siddipet Highway, District Siddipet, Telangana-502279</td>
                        </tr>
                        <tr className="bg-white font-paw text-base">
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">Disclaimer</td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">All images are for representation purposes only. You are advised to read the batch & manufacturing details. All images are for representation purposes only. You are advised to read the batch & manufacturing details.</td>
                        </tr>
                    </tbody>
                </table>
                </>
                )}
            </div>

            {/* Additional info */}
            <div className='flex flex-col font-paw'>
                <div className='px-4 md:px-8 sticky top-16 md:top-24 lg:top-0 font-paw font-semibold bg-gray-200 rounded-lg text-lg justify-between md:text-3xl pt-4 pb-1 capitalize flex items-center shadow-sm z-10 active:text-purple-500 ' 
                    onClick={handleisOpenAdditionalInfo}>
                    <p>Additional Information</p>
                    {isOpenAdditionalInfo?(<BsChevronUp/>):(<BsChevronDown/>)}                
                </div>
                {isOpenAdditionalInfo &&(
                <div className='flex flex-col '>
                    <div className='bg-white'>
                        <p className='text-xl sticky top-28 underline md:top-36 lg:top-12 bg-white py-2'>Features :</p>
                        <div className='px-2'>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laborum necessitatibus consectetur labore magni ut error culpa nisi sapiente excepturi sint incidunt, repellat, molestiae ad temporibus sed rerum nemo amet!</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laborum necessitatibus consectetur labore magni ut error culpa nisi sapiente excepturi sint incidunt, repellat, molestiae ad temporibus sed rerum nemo amet!</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laborum necessitatibus consectetur labore magni ut error culpa nisi sapiente excepturi sint incidunt, repellat, molestiae ad temporibus sed rerum nemo amet!</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laborum necessitatibus consectetur labore magni ut error culpa nisi sapiente excepturi sint incidunt, repellat, molestiae ad temporibus sed rerum nemo amet!</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laborum necessitatibus consectetur labore magni ut error culpa nisi sapiente excepturi sint incidunt, repellat, molestiae ad temporibus sed rerum nemo amet!</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laborum necessitatibus consectetur labore magni ut error culpa nisi sapiente excepturi sint incidunt, repellat, molestiae ad temporibus sed rerum nemo amet!</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore veritatis ut, porro alias ratione tempore.</li>
                            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda itaque sit doloribus unde, qui earum dignissimos sint debitis quas aliquam obcaecati officia.</li>
                        </div>
                    </div>

                    <div className='bg-white'>
                        <p className='text-xl sticky top-28 underline md:top-36 lg:top-12 py-2 bg-white'>Direction for usage :</p>
                        <p className='px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo harum dolorem numquam, rem nemo ipsam nam esse tempora illum placeat eius. Optio perferendis ad, veniam voluptate et modi quae. Labore excepturi consectetur perspiciatis 
                            laboriosam in impedit placeat, dolor quaerat mollitia est tenetur maiores atque incidunt dolorum aut illum hic! Libero dolores praesentium error, animi nisi voluptatum perferendis eius saepe ut. Molestiae saepe ipsum qui similique ut 
                            nobis, quis, dolore mollitia id possimus distinctio at placeat quibusdam error? In tempora quam, obcaecati pariatur omnis assumenda quo cumque ab eius expedita cupiditate, amet voluptatem impedit excepturi soluta illum! Sit quibusdam dolorem 
                            cumque illo sequi, enim accusantium earum asperiores perspiciatis adipisci blanditiis accusamus, maiores laborum nam magnam sint aspernatur provident sed aperiam aliquid.</p>
                    </div>

                    <div className='bg-white'>
                        <p className='text-xl sticky top-28 underline md:top-36 lg:top-12 py-2 bg-white'>PawPi Tip :</p>
                        <div className='px-2'>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, magnam asperiores.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum iste sequi voluptate perspiciatis reprehenderit.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, magnam asperiores.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum iste sequi voluptate perspiciatis reprehenderit.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, magnam asperiores.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum iste sequi voluptate perspiciatis reprehenderit.</li>
                        </div>
                    </div>
                </div>
                )}
            </div>

            <div>Banner</div>

            {/* You may also like */}
            <div className={`my-4`}>
                <p className='sticky top-16 md:top-24 lg:top-0 font-paw font-semibold text-3xl bg-white pt-4 pb-1 capitalize flex items-center justify-center'>you may also like</p>
                <div className='grid grid-cols-2 md:grid-cols-3 md:gap-2 lg:grid-cols-5 lg:gap-4 py-4 px-2 gap-x-1 gap-y-2 bg-white'>
                    {CardDetails.map((data) => (<ProductCard {...data}/>
                    ))}
                </div>
            </div>

            {/* Reviews */}
            <div className='font-paw'>
                <p className='sticky top-16 md:top-24 lg:top-0 font-paw font-semibold text-3xl pt-4 pb-1 capitalize flex items-center justify-center bg-white shadow-sm z-10'>Customer Reviews</p>
                
                <div className='sticky top-[119px] md:top-36 lg:top-12 py-2 md:py-4 flex items-center justify-around w-full bg-white'>
                    {SortingButtons.map((data)=>(
                        <button className={`lg:w-[15%] w-[23%] py-1 md:p-2 text-sm md:text-lg rounded-2xl ${isSelected===`${data}`?'bg-purple-500 text-white':'bg-gray-200'}`}
                            onClick={()=>handleisSelected(`${data}`)}>{data}
                        </button>
                    ))}   
                </div>
                <p className='md:text-xl text-lg'>322 Reviews</p>
                
                <div className=' gap-4 flex flex-col'>
                    {Reviews.map((data)=>(
                    <div className='bg-gray-100 border-2 rounded-3xl px-4 py-2'>
                        <div className='flex items-center justify-start'>
                            <img src={data.ProfilePhoto} alt="profilephoto" className="h-16 w-16 rounded-full p-1 bg-red-200"/>
                            <div className='flex flex-col ml-4'>
                                <div className='flex items-center justify-start gap-4 text-sm'>
                                    <div>stars</div>
                                    <div>{data.Date}</div>
                                </div>
                                <div className='flex items-center justify-start gap-4 text-base'> 
                                    <div>{data.Name}</div>
                                    <div>{data.City},{data.State}</div>
                                </div>
                            </div>
                        </div>
                        <p className='text-base md:text-lg my-2'>{data.reviewtext}</p>
                        <p className='text-base md:text-lg my-2'>{data.reviewtext}</p>
                        <p className='text-base md:text-lg my-2'>{data.reviewtext}</p>
                    </div>
                    ))}
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroProductPage;