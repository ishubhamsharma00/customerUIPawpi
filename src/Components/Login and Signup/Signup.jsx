import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LOGO from "../../Images/order overview/logo.png";
import user from "../../Images/registration page/user.png";
import Email from "../../Images/registration page/email.png";
import Whatsapp from "../../Images/registration page/whatsapp.png";
import Key from "../../Images/registration page/key.png";
import BgImg from "../../Images/registration page/bg img.png";
import Cartoon from "../../Images/registration page/happy cartoon.png";
import Back from "../../Images/registration page/back.png";
import View from "../../Images/registration page/eyeopen.png";
import Close from "../../Images/registration page/eyeclose.png";



const Signup = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
  });


  const navigate = useNavigate(); // Initialize the useNavigate hook

  console.log(formData);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false); // State to track button click

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    // Add your own phone number validation logic if needed
    return phoneNumber.length >= 10; // Example: Require at least 10 digits
  };

  const validatePassword = (password) => {
    // Add your own password validation logic if needed
    return password.length >= 8; // Example: Require at least 8 characters
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.fullname.trim()) {
      errors.fullname = 'Full Name is required';
    }

    if (!validateEmail(formData.email)) {
      errors.email = 'Invalid email address';
    }

    if (!validatePhoneNumber(formData.phoneNumber)) {
      errors.phoneNumber = 'Invalid phone number';
    }

    if (!validatePassword(formData.password)) {
      errors.password = 'Password must be at least 8 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0; // Returns true if there are no errors
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      console.error('Form validation failed');
      return;
    }

    try {
      const response = await axios.post("https://pawpi-back-end.onrender.com/auth/signup", formData);
      console.log(response);

      if (response.data.ok) {
        setSuccessMessage('Registration successful');
        navigate('/');
      } else {
        console.error('Registration failed:', response.data.error);
        setSuccessMessage(''); // Clear success message in case of failure
      }
    } catch (error) {
      console.error('Error during registration:', error.message);
      setSuccessMessage(''); // Clear success message in case of an error
    }
  };

  return (
    <section className='flex h-screen overflow-hidden'>
      {/* Image side */}
      <div className='bg-[#EFF3FC] h-screen  w-[60%]  bg-gradient-to-br from-[#EFF3FC] to-[#EFF3FC] rounded-br-[20%]'>
        <div className="relative">
          <img src={BgImg} alt="BackgroundImage" className="w-full h-screen" />
          <img src={Cartoon} alt="Overlayimage" className="absolute top-96 left-80 z-10" />
        </div>
      </div>

      {/* Register side */}
      <div className='h-auto w-[40%] mx-auto overflow-hidden my-3'>
        <div className="relative">
          <button className="absolute top-0 right-0 m-4 p-2 ">
            <Link to={"/"}>
              <img src={Back} alt="back" className='h-10 w-10 ' />
            </Link>
          </button>
        </div>
        <div className='w-full bg-white p-32'>

          <div className='items-center justify-center  mx-20   w-[90%]'>
            <img src={LOGO} alt="Logo" className='items-center justify-center mx-16 my-3  ' />
            <h1 className=' font-Raleway font-bold text-5xl text-[#3C4D64]  '>Register Yourself!</h1>
            <p className='font-Nunito text-[16px] font-normal ml-12 text-[#3C4D64] py-3'>See what is going on with your business</p>
          </div>

          <form className="w-[90%] mx-auto border bg-[#3C4D64] border-[#3C4D64] rounded-xl mb-4 shadow-xl hover:shadow-none focus:outline-none focus:shadow-outline-blue focus:border-blue-60">
            <div className="flex items-center ">
              <img src={user} alt="Card Logo" className="w-8 h-6 p-1  mx-2" />
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleInputChange}
                className="w-full border-none font-Nunito text-black rounded-r-xl font-bold outline-none p-3"
                placeholder="Pet Parent Name"
              />
            </div>
            {errors.fullname && <p style={{ color: 'yellow', marginLeft: '46px' }}>{errors.fullname}</p>}
          </form>

          <form className="w-[90%] mx-auto border bg-[#3C4D64] border-[#3C4D64] rounded-xl mb-4 shadow-xl hover:shadow-none focus:outline-none focus:shadow-outline-blue focus:border-blue-60">
            <div className="flex items-center ">
              <img src={Email} alt="EmailLogo" className="w-8 h-6 p-1 mx-2" />
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border-none font-Nunito text-black rounded-r-xl font-bold outline-none p-3"
                placeholder="Email"
              />
            </div>
            {errors.email && <p style={{ color: 'yellow', marginLeft: '46px' }}>{errors.email}</p>}
          </form>

          <form className="w-[90%] mx-auto border bg-[#3C4D64] border-[#3C4D64] rounded-xl mb-4 shadow-xl hover:shadow-none focus:outline-none focus:shadow-outline-blue focus:border-blue-60">
            <div className="flex items-center ">
              <img src={Whatsapp} alt="WhatsappLogo" className="w-8 h-6 p-1  mx-2" />
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full border-none font-Nunito text-black rounded-r-xl font-bold outline-none p-3"
                placeholder="WhatsApp Number"
              />
            </div>
            {errors.phoneNumber && <p style={{ color: 'yellow', marginLeft: '46px' }}>{errors.phoneNumber}</p>}
          </form>

          <form className="w-[90%] mx-auto border bg-[#3C4D64] border-[#3C4D64] rounded-xl mb-4 shadow-xl hover:shadow-none focus:outline-none focus:shadow-outline-blue focus:border-blue-60">
            <div className="flex items-center">
              <img src={Key} alt="KeyLogo" className="w-8 h-6 p-1 items-center justify-center mx-2" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full border-none font-Nunito text-black rounded-r-xl font-bold outline-none p-3"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="focus:outline-none"
              >
                <img
                  src={showPassword ? View : Close}
                  alt={showPassword ? 'View' : 'Close'}
                  className="w-10 h-8 p-1"
                />
              </button>
            </div>
            {errors.password && <p style={{ color: 'yellow', marginLeft: '46px' }}>{errors.password}</p>}
          </form>

          <form className="w-[90%] mx-auto border bg-[#3C4D64] border-[#3C4D64] rounded-xl mb-4 shadow-xl hover:shadow-none focus:outline-none focus:shadow-outline-blue focus:border-blue-60">
            <div className="flex items-center   ">
              <img src={Key} alt="KeyLogo" className="w-8 h-6 p-1   items-center justify-center mx-2" />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full border-none font-Nunito text-black rounded-r-xl font-bold outline-none p-3"
                placeholder="Confirm Password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="focus:outline-none"
              >
                <img
                  src={showConfirmPassword ? View : Close}
                  alt={showConfirmPassword ? 'View' : 'Close'}
                  className="w-10 h-10 p-1"
                />
              </button>
            </div>
            {errors.confirmPassword && <p style={{ color: 'yellow', marginLeft: '46px' }}>{errors.confirmPassword}</p>}
          </form>

          <button
            onClick={handleSubmit}
            className="bg-[#3C4D64] w-[90%] mx-auto text-white p-4 mt-8 font-Raleway font-bold text-2xl flex items-center justify-center rounded-2xl"
          >
            <p>Register </p>
          </button> 

        </div>
      </div>
    </section>
  );
};

export default Signup;
