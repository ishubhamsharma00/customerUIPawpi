import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import TestingImg from "../../Images/BestSellingProducts/Product3.png";
import { BiRupee } from "react-icons/bi";

const CartProduct = () => {
    
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between h-24 w-full bg-white">
        <div className="w-[48%] h-full flex items-center justify-between">
          <img
            src={TestingImg}
            alt="CartProductImage"
            className="w-24 h-24 rounded-lg border-2 border-gray-300 p-2 shadow-xl"
          />
          <div className="flex flex-col items-start justify-between w-[63%] h-full">
            <p className="line-clamp-2 text-sm">
              Royal Canin Mini Starter Dry Food
            </p>
            <p className="text-red-500 font-semibold">1 KG</p>
            <p className="text-sm text-gray-400">Remove</p>
          </div>
        </div>
        <div className="w-[48%] flex justify-between items-center">
          <div className="w-[31%] flex items-center justify-center gap-2">
            <p
              className="text-xl cursor-pointer outline-none"
              onClick={decreaseQuantity}
            >
              -
            </p>
            <p className="p-1 px-3 font-semibold border border-gray-400 rounded-md">
              {quantity}
            </p>
            <p
              className="text-xl cursor-pointer outline-none"
              onClick={increaseQuantity}
            >
              +
            </p>
          </div>
          <div className="w-[31%] flex items-center justify-center">
            <BiRupee />
            <p>230</p>
          </div>
          <div className="w-[31%] flex items-center justify-center">
            <BiRupee />
            <p>230</p>
          </div>
        </div>
        {/* <div className='w-1/4 h-full flex justify-center items-center border border-gray-200 rounded-xl'>
                    <img src={TestingImg} alt="ProductsInCart" className='rounded-md h-[90%] ' />
                </div> */}
        {/* <div className='w-1/2 font-paw'>
                    <div className='text-lg line-clamp-1'>
                        Lorem ipsum, dolor sit amet chbvhr jhbrvj rhv rjv r vhr hv 
                    </div>
                    <div className='text-sm text-gray-500'>
                        400 g
                    </div>
                    <div className='flex items-center gap-2 text-sm'>
                        <span className='font-semibold text-base'>
                            ₹129
                        </span>
                        <span className='line-through  text-gray-500'>
                            ₹159
                        </span>
                    </div>
                </div> */}

        {/* <div className='flex w-[23%] justify-between items-center bg-purple-100 border border-black rounded-md p-1 gap-2'>
                    <span className='cursor-pointer'>
                        <BiMinus className='text-black text-xl'  onClick={decreaseQuantity} />
                    </span>
                    <p className='text-black'>{quantity}</p>
                    <span className='cursor-pointer'>
                        <BiPlus className='text-black text-xl' onClick={increaseQuantity}/>
                    </span>
                </div> */}
      </div>
    </>
  );
};

const Cart = ({ open, setOpen }) => {
  // const [open, setOpen] = useState(true);

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen md:max-w-md lg:max-w-3xl">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                        <button
                          type="button"
                          className="rounded-md bg-white font-boldhover:text-white focus:outline-none focus:ring-2 focus:ring-red-400"
                          onClick={() => setOpen(false)}
                        >
                          <XMarkIcon
                            className="h-8 w-8 font-bold text-black"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </Transition.Child>

                    <div className="flex h-full flex-col bg-white shadow-xl">
                      <div className="sm:px-6 md:px-0 pt-8 pb-4">
                        <div className="w-[90%] border-b border-gray-400 pb-4 text-3xl font-semibold tracking-wide m-auto flex items-center justify-between">
                          <p>Shopping Cart</p>
                          <p>X Items</p>
                        </div>
                        {/* <Dialog.Title className="md:text-2xl text-md py-1 rounded-xl w-[85%] m-auto font-paw font-semibold flex justify-start text-gray-900 bg-gradient-to-r md:py-2 shadow-xl from-purple-200 to-purple-800">
                                                    My Cart
                                                </Dialog.Title> */}
                      </div>
                      <div className="relative h-full py-2 flex-1 w-[90%] m-auto sm:px-6 md:px-0">
                        <div className="w-full text-slate-500 pb-6 flex items-center justify-between">
                          <p className="w-[48%]">PRODUCT DETAILS</p>
                          <div className="w-[48%] flex items-center justify-between">
                            <p className="w-[31%] flex items-center justify-center">
                              QUANTITY
                            </p>
                            <p className="w-[31%] flex items-center justify-center">
                              PRICE
                            </p>
                            <p className="w-[31%] flex items-center justify-center">
                              TOTAL
                            </p>
                          </div>
                        </div>
                        <div className="w-full overflow-y-scroll h-[78%] md:h-[73%] flex flex-col gap-5">
                          <div className="flex flex-col pb-5 gap-5">
                            <CartProduct />
                            <CartProduct />
                            <CartProduct />
                            <CartProduct />
                            <CartProduct />
                            <CartProduct />
                            <CartProduct />
                            <CartProduct />
                          </div>
                          {/* <div className='bg-purple-100 p-2 font-paw rounded-md'>
                                                        <h3 className='font-semibold'>
                                                            Cancellation Policy
                                                        </h3>
                                                        <p>
                                                            Orders cannot be cancelled once packed for delivery. In case of unexpected delays, a refund will be provided, if applicable.</p>
                                                    </div> */}
                        </div>
                        <Link
                          to={"/auth/checkout"}
                          className="fixed w-[90%] bottom-1 flex font-paw justify-between items-center bg-purple-500 text-white rounded-lg px-4 md:py-4 py-2 cursor-pointer mt-4 hover:bg-purple-600"
                        >
                          <div className="flex gap-3 items-center">
                            <div>Total</div>
                            <p className="text-2xl">1950</p>
                          </div>
                          <div className="flex justify-center items-center">
                            <span className="text-lg">Checkout</span>
                            <BiChevronRight className="font-bold text-xl" />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default Cart;
