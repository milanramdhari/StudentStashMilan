import { useContext, useState } from "react";
import Navbar from "./Navbar";
import { CartContext } from "../contexts/CartContext";

export default function Cart() {

    const {cartItems, setCartItems, totalPrice} = useContext(CartContext)

    //the filter function creates a new arrya that contain items that do not match the given id
    const handleRemove = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const handleChangeQuantity = (id, quantity) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity } : item
        ));
    };


    return (
        <>

            <Navbar />

            <div className="container mx-auto mt-10 px-4">
                <h1 className="text-3xl font-semibold mb-4">Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <div className="flex flex-col space-y-4">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex flex-col md:flex-row items-center bg-white p-4 shadow rounded-lg">
                                <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded mb-4 md:mb-0 md:mr-4" />
                                <div className="flex-grow text-center md:text-left">
                                    <h2 className="text-xl font-medium">{item.name}</h2>
                                    <p>${item.price.toFixed(2)}</p>
                                    <label className="block mt-2">
                                        Quantity:
                                        <input 
                                            type="number" 
                                            min="1" 
                                            value={item.quantity} 
                                            onChange={(e) => handleChangeQuantity(item.id, parseInt(e.target.value))} 
                                            className="ml-2 border rounded p-1 w-16"
                                        />
                                    </label>
                                </div>
                                <button className="btn btn-error mt-4 md:mt-0 md:ml-4">Contact</button>
                                <button onClick={() => handleRemove(item.id)} className="btn btn-error mt-4 md:mt-0 md:ml-4">
                                    Remove
                                </button>
                            </div>
                        ))}
                        <div className="flex flex-col md:flex-row justify-between items-center mt-6">
                            <h2 className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</h2>
                            <button className="btn btn-primary w-full md:w-auto mt-4 md:mt-0">Proceed to Checkout</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
