import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';

//import { FcGoogle } from "react-icons/fc";
import React from 'react';
import BoneDoodle from '../../Images/Doodles/bonedoodle.png';
import PawDoodle from '../../Images/Doodles/pawdoodle.png';



export default function SignIn({ isOpen, setIsOpen }) {

  function closeModal() {
    setIsOpen(false);
  }

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);
  const [pincode, setPincode] = useState(null);

  const LocationDetect = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Get the latitude and longitude from the Geolocation API
          const { latitude, longitude } = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError('Geolocation is not supported by your browser.');
    }
  }



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_API_KEY`
        );

        const results = response.data.results;
        if (results.length > 0) {
          for (const component of results[0].address_components) {
            if (component.types.includes('postal_code')) {
              setPincode(component.long_name);
              return;
            }
          }
        }

        setError('Pincode not found.');
      } catch (error) {
        setError('Error fetching pincode.');
      }
    };

    fetchData();
  }, [latitude, longitude]);



  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="inset-0 fixed  overflow-y-auto ">
            <div className="flex items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="transform overflow-hidden rounded-xl border-2 border-gray-200 w-fill bg-white py-6 px-4 text-left absolute top-1/4 align-middle transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-paw px-10 flex justify-around pt-4 font-bold leading-6 text-gray-600"
                  >
                    <img src={PawDoodle}
                      alt="pawDoodle"
                      className="h-14 -mt-4 w-14 opacity-60 hover:animate-bounce" />

                    <h1>Change Location</h1>

                    <img src={BoneDoodle}
                      alt="boneDoodle"
                      className="h-14 -mt-4 w-14 opacity-50 hover:animate-spin " />
                  </Dialog.Title>
                  <div className="w-full flex py-4 gap-12 px-6 justify-around items-center">
                    <div className='w-1/3 flex justify-center text-lg font-paw font-semibold py-2 bg-pawpi-purple rounded-lg text-white cursor-pointer hover:ring-pawpi-purple hover:ring-4 hover:duration-500'
                      onClick={LocationDetect}
                    >
                      Detect my location
                      
                    </div>
                    <div className='h-14 w-16 text-xl rounded-full border-2 flex justify-center items-center'>
                      OR
                    </div>
                    <div className='w-1/2'>
                      <input type="search" name="location" id="location" placeholder='Pin-code / CityName ' className='py-2 border-2 border-gray-300 outline-none px-4 w-full rounded-lg text-lg' />
                    </div>
                    {
                      latitude && (
                        <>
                          <div>
                            {
                              latitude
                            }
                          </div>
                        </>
                      )
                    }
                    {
                      longitude && (
                        <>
                          <div>
                            {
                              longitude
                            }
                          </div>
                        </>
                      )
                    }
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
