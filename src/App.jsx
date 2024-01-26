import DefaultHOC from "./HOC/DefaultHOC";
import Home from "./Components/Home/Home";
import HeroProductPage from "./Components/HeroProductPage/HeroProductPage";
import CheckoutHOC from "./HOC/CheckoutHOC";

import Start from "./Components/Start/Start";
import StartDog from "./Components/Start/Dog";

import { Collection } from "./pages";


function App() {
  return (
    <>
      {/* 
      -----------------------------------------------------------------------------------------
                        New Routing Please Don't Touch it Except Tara
      -----------------------------------------------------------------------------------------
      */}

      <CheckoutHOC path="/" exact component={Start} />
      <CheckoutHOC path="/welcome/cat" exact component={StartDog} />
      <CheckoutHOC path="/welcome/dog" exact component={StartDog} />


      <DefaultHOC path="/home" exact component={Home} />
      <DefaultHOC path='/collections/:producttype' exact component={ Collection } />
      <DefaultHOC path='/product/:productId' exact component={ HeroProductPage } />

      {/* Footer NavLinks Routing */}
    
    </>
  );
};

export default App;
