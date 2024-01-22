import React, { useState } from 'react';
import product from "../../Images/product.png";

const CartUi = () => {
    const [items, setItems] = useState([
        { name: "Royal Canin Mini Starter Dry Food", quantity: 2, price: 250 },
        { name: "Royal Canin Mini Starter Dry Food", quantity: 2, price: 250 },
        { name: "Royal Canin Mini Starter Dry Food", quantity: 2, price: 250 },
        { name: "Royal Canin Mini Starter Dry Food", quantity: 2, price: 250 }
    ]);

    const removeItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };

    const increaseQuantity = (index) => {
        const updatedItems = [...items];
        updatedItems[index].quantity += 1;
        updatedItems[index].price += 250; // Change the price logic accordingly
        setItems(updatedItems);
    };

    const decreaseQuantity = (index) => {
        const updatedItems = [...items];
        if (updatedItems[index].quantity > 1) {
            updatedItems[index].quantity -= 1;
            updatedItems[index].price -= 250; // Change the price logic accordingly
        }
        setItems(updatedItems);
    };

    return (
        <div className="flex w-full justify-center mt-8">
            {/* Left Side */}
            <div className="w-4/5  p-4">
                <h1 className="text-2xl font-bold  font-Raleway ">Shopping Cart</h1>
                <hr className="my-4  border-black  border-1" />

                <table className="w-full border-collapse">
                    <thead>
                        <tr className="font-Raleway">
                            <th className="text-left">Product Details</th>
                            <th className="text-center">Quantity</th>
                            <th className="text-center">Price</th>
                            <th className="text-center">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr className="border-b" key={index}>
                                <td className="flex items-center">
                                    <img src={product} alt="Product" className="w-16 h-16 mr-4" />
                                    <div>
                                        <p className="font-semibold font-Raleway">{item.name}</p>
                                        <p className='text-[#FF3547] text-sm font-Raleway uppercase'> {item.quantity} <span className='text-xs'>kg</span></p>
                                        <button onClick={() => removeItem(index)} className="text-red-500 font-Raleway">Remove</button>
                                    </div>
                                </td>
                                <td className="text-center">
                                    <button onClick={() => decreaseQuantity(index)} className="border px-2">-</button>
                                    <span className="mx-2 font-semibold">{item.quantity}</span>
                                    <button onClick={() => increaseQuantity(index)} className="border px-2">+</button>
                                </td>
                                <td className="text-center font-semibold">₹{item.price}</td>
                                <td className="text-center font-semibold">₹{item.price * item.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <a href="/" className="mt-8 block text-blue-500">
                    <i className="fas fa-arrow-left mr-2"></i>
                    Continue to Shopping
                </a>
            </div>

            
           {/* Right Side */}
           <div className="w-2/5 p-4  border-l-2 bg-[#FBFBFB]">
                <h1 className="text-2xl font-semibold">Order Summary</h1>
                <hr className="my-4 border-black  border-1" />
                <div className="my-8 flex justify-between items-center font-Raleway font-bold text-xl">
                    <p className=' font-semibold'> Item 4</p>
                    <p className='font-semibold '>₹ 920</p>
                </div>
                <label htmlFor="price" className="block text-xl mb-2 font-medium leading-6 text-gray-900">
                    Price
                </label>
                <form className=" ">
                    <select className="w-64 p-3 border font-raleway ">
                        <option value="standard">Standard Delivery</option>
                        <option value="express">Express Delivery</option>
                    </select>
                </form>

                <form className="mt-8">
                    <input
                        type="text"
                        placeholder="Enter your code"
                        className="w-64 border p-2 font-Raleway rounded mr-2"
                    />
                    <button className="bg-[#FF3547] text-white font-Raleway px-2 py-1 my-2 rounded">Apply Promo Code</button>
                </form>

                <hr className="my-8 border-black  border-1" />

                <div className="flex justify-between font-bold font-Raleway text-xl">
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
