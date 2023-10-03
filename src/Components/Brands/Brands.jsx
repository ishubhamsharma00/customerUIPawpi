import React from 'react'
import NUTRO from "../../Images/Brands/nutro.png";
import ROYALCANIN from "../../Images/Brands/royalcanin.png";
import ACANA from "../../Images/Brands/acana.png";
import KONG from "../../Images/Brands/kong.png";
import NULO from "../../Images/Brands/nulo.png";
import AJ from "../../Images/Brands/aj.png";
import HILLS from "../../Images/Brands/hills.png";
import TRIXIE from "../../Images/Brands/trixie.png";
import Marquee from 'react-fast-marquee';

const Brands = () => {
  return(
    <div className="lg::mx-12 h-full">
      <Marquee gradient={false} speed={100} className="h-full flex items-center" >
        <div className="flex h-full items-center lg:mx-14 mx-6 md:mx-10 justify-center md:p-6 p-3">
          <img src={NUTRO}
          alt="NutroIcon"
          className='lg:w-56 lg:h-44 md:w-32 md:h-24 h-20 w-24 filter grayscale hover:grayscale-0 hover:duration-300 duration-300'
          />
        </div>

        <div className="flex h-full items-center lg:mx-14 md:mx-10 mx-6 justify-center md:p-6 p-3">
          <img src={ROYALCANIN}
          alt="NutroIcon"
          className='lg:h-52 lg:w-52 md:h-36 md:w-42 h-32 w-32 filter grayscale hover:grayscale-0 hover:duration-300 duration-300'
          />
        </div>
        
        <div className="flex h-full items-center lg:mx-14 md:mx-10 mx-6 justify-center md:p-6 p-3">
          <img src={ACANA}
          alt="NutroIcon"
          className='lg:h-40 lg:w-52 md:h-20 md:w-32 h-16 w-28 filter grayscale hover:grayscale-0 hover:duration-300 duration-300'
          />
        </div>

        <div className="flex h-full items-center lg:mx-14 md:mx-10 mx-6 justify-center md:p-6 p-3">
          <img src={KONG}
          alt="NutroIcon"
          className='lg:h-36 lg:w-56 md:scale-90 md:h-16 md:w-32 h-12 w-24 filter grayscale hover:grayscale-0 hover:duration-300 duration-300'
          />
        </div>

        <div className="flex h-full items-center lg:mx-14 md:mx-10 mx-6 justify-center md:p-6 p-3">
          <img src={NULO}
          alt="NutroIcon"
          className='lg:h-48 lg:w-48 md:h-32 md:w-32 h-24 w-24 filter grayscale hover:grayscale-0 hover:duration-300 duration-300'
          />
        </div>

        <div className="flex h-full items-center lg:mx-14 md:mx-10 mx-6 justify-center md:p-6 p-3">
          <img src={AJ}
          alt="NutroIcon"
          className='lg:h-48 lg:w-48 lg:scale-125 md:h-36 md:w-36 h-28 w-28 filter grayscale hover:grayscale-0 hover:duration-300 duration-300'
          />
        </div>

        <div className="flex h-full items-center lg:mx-14 md:mx-10 mx-6 justify-center md:p-6 p-3">
          <img src={HILLS}
          alt="NutroIcon"
          className='lg:h-36 lg:w-40 h-16 w-20 filter grayscale hover:grayscale-0 hover:duration-300 duration-300'
          />
        </div>

        <div className="flex h-full items-center lg:mx-14 md:mx-10 mx-6  justify-center md:p-6 p-3">
          <img src={TRIXIE}
          alt="NutroIcon"
          className='lg:h-48 lg:w-48 lg:scale-125 md:h-28 md:w-32 h-24 w-28 filter grayscale hover:grayscale-0 hover:duration-300 duration-300'
          />
        </div>
       
      </Marquee>
    </div>
  );

//     const settingsLg = {
//       arrows: true,
//       dots:true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 6,
//       slidesToScroll: 1,
//       autoplay : true,
//       pauseOnHover: true,
     
//     };

//     const settingsSm = {
//       arrows: false,
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       autoplay : true,
//       pauseOnHover: true,
   
//     };

//  const BrandsData=[
//         NUTRO,ROYALCANIN,ACANA,KONG,NULO,AJ,HILLS,TRIXIE]
//   return (
//     <>
//     <div className="hidden lg:contents outline-none">
//       <Slider {...settingsLg}>
//       {
//         BrandsData.map((data)=>(
//           <div className="h-96 w-full ">
//             <img className="h-full w-full scale-y-110 cursor-pointer " src={data} alt="CarouselImage" /></div>
//         ))
//       }
//       </Slider>
//     </div>

//     <div className="md:hidden outline-none">
//       <Slider {...settingsSm}>
//       {
//         BrandsData.map((data)=>(
//           <div className="h-48 w-full ">
//             <img className="h-full w-full" src={data} alt="CarouselImage" /></div>
//         ))
//       }
//       </Slider>
//     </div>

//     <div className="hidden md:contents lg:hidden outline-none">
//       <Slider {...settingsSm}>
//       {
//         BrandsData.map((data)=>(
//           <div className="h-80 w-full ">
//             <img className="h-full w-full" src={data} alt="CarouselImage" /></div>
//         ))
//       }
//       </Slider>
//     </div>

//     </>
//   );
};
export default Brands;