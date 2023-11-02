import React, { useState } from 'react'
import LOGO from "../../Images/order overview/logo.png";
import user from "../../Images/registration page/user.png"
import Email from "../../Images/registration page/email.png"
import Whatsapp from "../../Images/registration page/whatsapp.png"
import Key from "../../Images/registration page/key.png"
import BgImg from "../../Images/registration page/bg img.png"
import Cartoon from "../../Images/registration page/happy cartoon.png"

const Signup = () => {
  const [petParentName, setPetParentName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [password, setPassword] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!petParentName) {
      errors.petParentName = '* Pet Parent Name is required';
    }
    if (!email) {
      errors.email = '* Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = '* Invalid email format';
    }
    if (!whatsappNumber) {
      errors.whatsappNumber = '* WhatsApp Number is required';
    }
    if (!password) {
      errors.password = '* Password is required';
    }

    return errors;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      // Validation passed, perform registration logic
      console.log('Pet Parent Name:', petParentName);
      console.log('Email:', email);
      console.log('WhatsApp Number:', whatsappNumber);
      console.log('Password:', password);

      // Reset form fields after successful submission
      setPetParentName('');
      setEmail('');
      setWhatsappNumber('');
      setPassword('');
      setFormErrors({});
    } else {
      // Validation failed, update form errors
      setFormErrors(errors);
    }
  };
  return (
    <section className='flex flex-col sm:flex-row   h-screen'>
      {/* Image side */}
      <div className=" hidden lg:block lg:w-1/2  bg-gradient-to-br from-[#EFF3FC] to-[#EFF3FC] rounded-br-[20%] relative   ">
        <div className="h-full">
          <img src={BgImg} alt="BackgroundImage" className="w-full h-full object-cover " />
          <img src={Cartoon} alt="Overlayimage" className="absolute lg:top-80 lg:left-0 z-10 " />
        </div>
      </div>



      {/* Register side  */}
      <div className='h-auto sm:w-2/3 lg:w-1/2 mx-auto  '>
        <div className='w-full h-screen  items-center justify-center p-20 lg:p-10 xl:py-44  '>
         
         <div className="flex items-center justify-center">
            <img src={LOGO} alt="logo" />
          </div>
          <div className='justify-center text-center w-full'>
            <h1 className=' font-Raleway font-bold text-5xl text-[#3C4D64]  '>Register Yourself!</h1>
            <p className='font-Nunito text-[16px] font-semibold  text-[#3C4D64] py-3'>see what is going on with your business</p>
          </div>
       
          {/* ..... */}

          <form className="w-full md:w-4/5 lg:w-4/5 xl:w-3/5 mx-auto border bg-[#3C4D64]  border-[#3C4D64] rounded-xl  hover:shadow-none mb-4 shadow-xl focus:outline-none focus:shadow-outline-blue focus:border-blue-60">
            <div className="flex items-center justify-between md:justify-start">
              <img src={user} alt="Card Logo" className="w-8 h-6 p-1 mx-2" />
              <input
                type="text"
                value={petParentName}
                onChange={(e) => setPetParentName(e.target.value)}
                className="w-full border-none font-Nunito text-black  text-sm rounded-r-xl font-bold outline-none p-3"
                placeholder="Pet Parent Name"
              />
            </div>
            {formErrors.petParentName && <p className="text-red-500 ">{formErrors.petParentName}</p>}
          </form>

          <form className="w-full md:w-4/5 lg:w-4/5 xl:w-3/5 mx-auto border bg-[#3C4D64]  border-[#3C4D64] rounded-xl  hover:shadow-none mb-4 shadow-xl focus:outline-none focus:shadow-outline-blue focus:border-blue-60">
            <div className="flex items-center justify-between md:justify-start">
              <img src={Email} alt="Card Logo" className="w-8 h-6 p-1 mx-2" />
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-none font-Nunito text-black   text-sm rounded-r-xl font-bold outline-none p-3"
                placeholder="Email"
              />
            </div>
            {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}
          </form>

          <form className="w-full md:w-4/5 lg:w-4/5 xl:w-3/5 mx-auto border bg-[#3C4D64]  border-[#3C4D64] rounded-xl  hover:shadow-none mb-4 shadow-xl focus:outline-none focus:shadow-outline-blue focus:border-blue-60">
            <div className="flex items-center justify-between md:justify-start">
              <img src={Whatsapp} alt="Card Logo" className="w-8 h-6 p-1 mx-2" />
              <input
                type="text"
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
                className="w-full border-none font-Nunito text-sm text-black  rounded-r-xl font-bold outline-none p-3"
                placeholder="Whatsapp Number"
              />
            </div>
            {formErrors.whatsappNumber && <p className="text-red-500">{formErrors.whatsappNumber}</p>}
          </form>

          <form className="w-full md:w-4/5 lg:w-4/5 xl:w-3/5 mx-auto border bg-[#3C4D64]  border-[#3C4D64] rounded-xl  hover:shadow-none mb-4 shadow-xl focus:outline-none focus:shadow-outline-blue focus:border-blue-60">
            <div className="flex items-center justify-between md:justify-start">
              <img src={Key} alt="Card Logo" className="w-8 h-6 p-1 mx-2" />
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-none font-Nunito text-black  text-sm rounded-r-xl font-bold outline-none p-3"
                placeholder="Password"
              />
            </div>
            {formErrors.password && <p className="text-red-500">{formErrors.password}</p>}
          </form>

          <button className="w-full md:w-4/5 lg:w-4/5 xl:w-3/5  bg-[#3C4D64] mx-auto text-white p-4 mt-8 font-Raleway font-bold text-2xl flex items-center justify-center rounded-2xl hover:bg-slate-700" onClick={handleRegister}>
            Register
          </button>
        </div>

      </div>
    </section>
  )
}

export default Signup