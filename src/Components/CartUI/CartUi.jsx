
import React from 'react';
import product from "../../Images/product.png"
const CartUi = () => {
    return (
        <div className="flex w-full justify-center mt-8">
            {/* Left Side */}
            <div className="w-4/5 p-4">
                <h1 className="text-2xl font-semibold">Shopping Cart</h1>
                <hr className="my-4  border-black  border-1" />

                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b">
                            <th className="text-left">Product Details</th>
                            <th className="text-center">Quantity</th>
                            <th className="text-center">Price</th>
                            <th className="text-center">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Sample Cart Items */}
                        {/* Replace the below section with a dynamic list of cart items */}
                        <tr className="border-b">
                            <td className="flex items-center">
                                <img src={product} alt="Product" className="w-16 h-16 mr-4" />
                                <div>
                                    <p className="font-semibold">Product Name</p>
                                    <p>Category, Brand</p>
                                    <button className="text-red-500">Remove</button>
                                </div>
                            </td>
                            <td className="text-center">
                                <button className="border px-2">-</button>
                                <span className="mx-2">2</span>
                                <button className="border px-2">+</button>
                            </td>
                            <td className="text-center">₹250</td>
                            <td className="text-center">₹500</td>
                        </tr>
                        <tr className="border-b">
                            <td className="flex items-center">
                                <img src={product} alt="Product" className="w-16 h-16 mr-4" />
                                <div>
                                    <p className="font-semibold">Product Name</p>
                                    <p>Category, Brand</p>
                                    <button className="text-red-500">Remove</button>
                                </div>
                            </td>
                            <td className="text-center">
                                <button className="border px-2">-</button>
                                <span className="mx-2">2</span>
                                <button className="border px-2">+</button>
                            </td>
                            <td className="text-center">₹250</td>
                            <td className="text-center">₹500</td>
                        </tr>
                        <tr className="border-b">
                            <td className="flex items-center">
                                <img src={product} alt="Product" className="w-16 h-16 mr-4" />
                                <div>
                                    <p className="font-semibold">Product Name</p>
                                    <p>Category, Brand</p>
                                    <button className="text-red-500">Remove</button>
                                </div>
                            </td>
                            <td className="text-center">
                                <button className="border px-2">-</button>
                                <span className="mx-2">2</span>
                                <button className="border px-2">+</button>
                            </td>
                            <td className="text-center">₹250</td>
                            <td className="text-center">₹500</td>
                        </tr>
                        <tr className="border-b">
                            <td className="flex items-center">
                                <img src={product} alt="Product" className="w-16 h-16 mr-4" />
                                <div>
                                    <p className="font-semibold">Product Name</p>
                                    <p>Category, Brand</p>
                                    <button className="text-red-500">Remove</button>
                                </div>
                            </td>
                            <td className="text-center">
                                <button className="border px-2">-</button>
                                <span className="mx-2">2</span>
                                <button className="border px-2">+</button>
                            </td>
                            <td className="text-center">₹250</td>
                            <td className="text-center">₹500</td>
                        </tr>
                        {/* End of Sample Cart Items */}
                    </tbody>
                </table>


                <a href="#" className="mt-8 block text-blue-500">
                    <i className="fas fa-arrow-left mr-2"></i>Continue to Shopping
                </a>
            </div>

            {/* Right Side */}
            <div className="w-2/5 p-4  border-l-2 bg-[#FBFBFB]">
                <h1 className="text-2xl font-semibold">Order Summary</h1>
                <hr className="my-4 border-black  border-1" />
                <div className="my-8 flex justify-between">
                    <p>Item 4</p>
                    <p>₹920</p>
                </div>
                <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                    Price
                </label>
                <form className=" ">
                    <select className="w-64 p-3 border">
                        <option value="standard">Standard Delivery</option>
                        <option value="express">Express Delivery</option>
                    </select>
                </form>

                <form className="mt-8">
                    <input
                        type="text"
                        placeholder="Enter your code"
                        className="w-64 border p-2 rounded mr-2"
                    />
                    <button className="bg-[#FF3547] text-white p-1 my-2 rounded">Apply Promo Code</button>
                </form>

                <hr className="my-8 border-black  border-1" />

                <div className="flex justify-between">
                    <p>Total Cost</p>
                    <p>₹2000</p>
                </div>

                <button className="bg-[#663BC0] text-white p-4 rounded-md mt-8 w-full">
                    Checkout
                </button>

            </div>
        </div>
    );
};

export default CartUi;