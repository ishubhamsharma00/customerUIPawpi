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
import Signup from '../Components/Login and Signup/Signup';
import LoginPopup from '../Components/Login and Signup/LoginPopup';
import HeroProductPage from '../Components/HeroProductPage/HeroProductPage';
import DogSuppliesBanner from "../Images/DogsPage/dogsupplies.png";
import Contact from '../Components/Support/Contact';
import Blog from '../Components/Blog/Blog';
import Vet from '../Components/Vet/Vet';
import Thankyou from '../Components/Thankyou/Thankyou';
import AboutUs from '../Components/AboutUs/AboutUs';
import PrivacyPolicy from '../Components/PrivacyPolicy/PrivacyPolicy';
import OrderOverview from '../Components/OrderOverview/OrderOverview';
import OrderTracking from '../Components/OrderTracking/OrderTracking';
import FAQ from '../Components/FAQ/FAQ';


const DefaultHome = () => {
    const {pt} = useParams();
    const {type} = useParams();
  return (
    <>
        <div className='my-12'>
          {type === 'dog' && <Dog img={DogSuppliesBanner}/>}
          {type === 'cat' && <Dog />}
          {type === 'breed' && <Dog />}
          {type === 'brands' && <Dog />}
          {type === 'lifestage' && <Dog />}

          {/* These are pages from footer */}
          {type === 'contactus' && <Contact/>}
          {type === 'blog' && <Blog/>}
          {type === 'vet' && <Vet/>}
          {type === 'faq' && <FAQ/>} 
          {type === 'thankyou' && <Thankyou/>}
          {type === 'aboutus' && <AboutUs/>}
          {type === 'privacypolicy' && <PrivacyPolicy/>}
          {type === 'ordertracking' && <OrderTracking/>}




          {pt === 'food' && <Dog/> }
          {pt === 'dog' && <Dog/> }
          {pt === 'cat' && <Dog/> }
          {pt === 'toy' && <Dog/> }
          {pt === 'garbs' && <Dog /> }
          {pt === 'extras' && <Dog /> }

          {pt === 'treats' && <Dog /> }
          {pt === 'shampoo' && <Dog /> }
          {pt === 'bodysplash' && <Dog /> }
          {pt === 'conditioner' && <Dog /> }
          {pt === 'foamcleanser' && <Dog /> }
          {pt === 'wetwipes' && <Dog /> }
          {pt === 'brushes' && <Dog /> }

        </div>
    </>
  )
}

export default DefaultHome;