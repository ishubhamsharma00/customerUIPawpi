// FILTER BRAND SCROLL BAR FOR DOG PAGE//
import React from "react";
import Acana from "../../Images/Brands/acana.png";
import Aj from "../../Images/Brands/aj.png";
import Hills from "../../Images/Brands/hills.png";
import Kong from "../../Images/Brands/kong.png";
import Nulo from "../../Images/Brands/nulo.png";
import Nutro from "../../Images/Brands/nutro.png";
import RoyalCannin from "../../Images/Brands/royalCanin.png";
import Trixie from "../../Images/Brands/trixie.png";


const BrandFilterSliderPoster = (props) =>{
  return( 
    <>
     <div className="flex justify-end items-center gap-1 mr-2 " key={props.id}>
        <div className="h-14 w-14 flex justify-center items-center">
          <img src={props.image} alt="poster" />
        </div>
        <h1 className="font-paw uppercase  w-full">{props.name}</h1>
        <span className="rounded-full border border-gray-600 px-2 mr-2">{props.quantity}</span>
      </div>
  </>
  )
  
}

const BrandFilterSlider = () => {
  const BrandImage = [
    {
      id: "acana",
      name: "Acana",
      image: Acana,
      quantity: 11,
    },
    {
      id: "aj",
      name: "Aj",
      image: Aj,
      quantity: 11,
    },
    {
      id: "hills",
      name: "Hills",
      image: Hills,
      quantity: 11,
    },
    {
      id: "kong",
      name: "Kong",
      image: Kong,
      quantity: 11,
    },
    {
      id: "nulo",
      name: "Nulo",
      image: Nulo,
      quantity: 11,
    },
    {
      id: "nutro",
      name: "Nutro",
      image: Nutro,
      quantity: 11,
    },
    {
      id: "royalcannin",
      name: "RoyalCannin",
      image: RoyalCannin,
      quantity: 11,
    },
    {
      id: "trixie",
      name: "Trixie",
      image: Trixie,
      quantity: 11,
    },
  ];
  return (
    <>
     <div className="h-96 overflow-y-scroll">
      {
        BrandImage.map((items)=>( 
          <BrandFilterSliderPoster {...items} />
        ))
      }
     </div>
    </>
  );
};

export default BrandFilterSlider;
