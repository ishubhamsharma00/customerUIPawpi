import DefaultHOC from "./HOC/DefaultHOC";
import DefaultHome from "./pages/DefaultHome";
import Temp from "./pages/Temp";
import Home from "./Components/Home/Home";
import AccountPage from "./pages/AccountPage";
import SupportPage from "./pages/SupportPage";
import HeroProductPage from "./Components/HeroProductPage/HeroProductPage";
import Checkout from "./Components/Account/Checkout";
import AuthPage from "./pages/AuthPage";
import CheckoutHOC from "./HOC/CheckoutHOC";

import DefaultDog from "./pages/DefaultDog";
import DefaultCat from "./pages/DefaultCat";
import DefaultBrands from "./pages/DefaultBrands";
import DefaultBreed from "./pages/DefaultBreed";
import DefaultLifeStage from "./pages/DefaultLifeStage";
import Start from "./Components/Start/Start";
import StartDog from "./Components/Start/Dog";
import StartCat from "./Components/Start/Cat";

import OrderTracking from "./Components/OrderTracking/OrderTracking";
import OrderOverview from "./Components/OrderOverview/OrderOverview";
import FAQ from "./Components/FAQ/FAQ";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
import AboutUs from "./Components/AboutUs/AboutUs";
import Thankyou from "./Components/Thankyou/Thankyou";
import Contact from "./Components/Support/Contact";
import Vet from "./Components/Vet/Vet";
import Blog from "./Components/Blog/Blog";
import Signup from "./Components/Login and Signup/Signup";


function App() {
  return (
    <>
      <DefaultHOC path="/home" exact component={Home} />

      <CheckoutHOC path="/" exact component={Start} />
      <CheckoutHOC path="/welcome/dog" exact component={StartDog} />
      <CheckoutHOC path="/welcome/cat" exact component={StartDog} />
      <CheckoutHOC path="/start/welcome/cat" exact component={StartCat} />


      <CheckoutHOC path="/auth/checkout" exact component={AuthPage} />


      <DefaultHOC path="home/:type" exact component={DefaultHome} />


      <DefaultHOC path="/dog/:type" exact component={DefaultDog} />
      <DefaultHOC path="/dog/:type/:subtype" exact component={DefaultDog} />

      <DefaultHOC path="/cat/:type" exact component={DefaultCat} />
      <DefaultHOC path="/cat/:type/:subtype" exact component={DefaultCat} />

      <DefaultHOC path="/breed/:type" exact component={DefaultBreed} />
      <DefaultHOC path="/breed/:type/:subtype" exact component={DefaultBreed} />

      <DefaultHOC path="/brand/:type" exact component={DefaultBrands} />
      <DefaultHOC path="/brand/:type/:subtype" exact component={DefaultBrands} />

      <DefaultHOC path="/lifestage/:type" exact component={DefaultLifeStage} />
      <DefaultHOC path="/lifestage/:type/:subtype" exact component={DefaultLifeStage} />


      <DefaultHOC path="/product/:pt" exact component={DefaultHome} />

      {/* 
      pt = product type (like - food, toys, extras..etc) 
      */}

      {/* Access product by using product id */}
      <DefaultHOC path="/products/:id" exact component={HeroProductPage} />


      <DefaultHOC path="/user/:at" exact component={AccountPage} />
      {/* 
      at = account type (like - address, profile, order..etc) 
      */}


      <DefaultHOC path="/support/:st" exact component={SupportPage} />
      
      {/* 
      st = support type (like - contact, about, term&condition..etc all footer liks) 
      */}
      {/* <CheckoutHOC path="/ordertracking" exact component={OrderTracking} /> */}
      {/* <CheckoutHOC path="/orderoverview" exact component={OrderOverview} /> */}
      {/* <CheckoutHOC path="/faq" exact component={FAQ} />
      <CheckoutHOC path="/privacypolicy" exact component={PrivacyPolicy} /> */}
      {/* <CheckoutHOC path="/aboutus" exact component={AboutUs} />
      <CheckoutHOC path="/thankyou" exact component={Thankyou} /> */}
      {/* <CheckoutHOC path="/contactus" exact component={Contact} /> */}
      {/* <CheckoutHOC path="/vet" exact component={Vet} />
      <CheckoutHOC path="/blog" exact component={Blog} /> */}



      <CheckoutHOC path="/newUser/signup" exact component={Signup} />
      <DefaultHOC path="/checkout/:ct" exact component={AuthPage} />
    </>
  );
};

export default App;
