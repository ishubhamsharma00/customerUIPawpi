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



function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={Home}/>
      
      <CheckoutHOC path="/start/welcome" exact component={Start}/>
      <CheckoutHOC path="/start/welcome/dog" exact component={StartDog}/>

      <CheckoutHOC path="/auth/checkout" exact component={AuthPage}/>


      <DefaultHOC path="/:type" exact component={DefaultHome}/>


      <DefaultHOC path="/dog/:type" exact component={DefaultDog}/>
      <DefaultHOC path="/dog/:type/:subtype" exact component={DefaultDog}/>

      <DefaultHOC path="/cat/:type" exact component={DefaultCat}/>
      <DefaultHOC path="/cat/:type/:subtype" exact component={DefaultCat}/>

      <DefaultHOC path="/breed/:type" exact component={DefaultBreed}/>
      <DefaultHOC path="/breed/:type/:subtype" exact component={DefaultBreed}/>

      <DefaultHOC path="/brand/:type" exact component={DefaultBrands}/>
      <DefaultHOC path="/brand/:type/:subtype" exact component={DefaultBrands}/>

      <DefaultHOC path="/lifestage/:type" exact component={DefaultLifeStage}/>
      <DefaultHOC path="/lifestage/:type/:subtype" exact component={DefaultLifeStage}/>


      <DefaultHOC path="/product/:pt" exact component={DefaultHome}/>

      {/* 
      pt = product type (like - food, toys, extras..etc) 
      */}

      {/* Access product by using product id */}
      <DefaultHOC path="/products/:id" exact component={HeroProductPage}/>


      <DefaultHOC path="/user/:at" exact component={AccountPage}/>
      {/* 
      at = account type (like - address, profile, order..etc) 
      */}


      <DefaultHOC path="/support/:st" exact component={SupportPage}/>
      {/* 
      st = support type (like - contact, about, term&condition..etc all footer liks) 
      */}


      <DefaultHOC path="/checkout/:ct" exact component={AuthPage}/>
    </>
  );
};

export default App;
 