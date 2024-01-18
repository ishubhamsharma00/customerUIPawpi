import React from 'react'
import { useParams } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Cat from '../Components/Cat/Cat';
import Dog from '../Components/Dog/Dog';
import Brands from '../Components/ShopByBrands/Brands';
import Breed from '../Components/ShopByBreed/Breed';
import Lifestage from '../Components/ShopByLifestage/lifestage'
import Food from '../Components/Food/Food';
import Toys from '../Components/Toys/Toys';
import Clothes from '../Components/Clothes/Clothes';
import Accessories from '../Components/Accessories/Accessories';
// import Signup from '../Components/Login and Signup/Signup';
// import LoginPopup from '../Components/Login and Signup/LoginPopup';
import HeroProductPage from '../Components/HeroProductPage/HeroProductPage';
import DogSuppliesBanner from "../Images/DogsPage/dogsupplies.png";
import Contact from '../Components/Support/Contact';
import Blog from '../Components/Blog/Blog';
import Vet from '../Components/Vet/Vet';
import Thankyou from '../Components/Thankyou/Thankyou';
import AboutUs from '../Components/AboutUs/AboutUs';
import PrivacyPolicy from '../Components/PrivacyPolicy/PrivacyPolicy';
import OrderTracking from '../Components/OrderTracking/OrderTracking';
import FAQ from '../Components/FAQ/FAQ';
import CartUi from '../Components/CartUI/CartUi';
import ProfilePage from '../Components/ProfilePage/ProfilePage';
import PetProfile from '../Components/PetProfile/PetProfile';
import OrderOverview from '../Components/OrderOverview/OrderOverview';  


const DefaultHome = () => {
    const {pt} = useParams();
    const {type} = useParams();
  return (
    <>
    {/* main pages link */}
        <div className='my-12'>

          {type === 'contactus' && <Contact/>}
          {type === 'profilepage' && <ProfilePage />}
          {type === 'petprofilepage' && <PetProfile />}
          {type === 'ordertracking' && <OrderTracking />}
          {type === 'orderoverview' && <OrderOverview />}
          {type === 'faq' && <FAQ />}
          {type === 'privacypolicy' && <PrivacyPolicy />}
          {type === 'aboutus' && <AboutUs />}
          {type === 'thankyou' && <Thankyou />}
          {type === 'vet' && <Vet />}
          {type === 'blog' && <Blog />}

        </div>
    </>
  )
}

export default DefaultHome;