import {BrowserRouter, Routes, Route} from "react-router-dom"
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Cart from "./components/Cart";
import Settings from "./components/Settings";
import ConfirmationPage from "./components/ConfirmationPage";
import {CartContext} from "./contexts/CartContext";
import { useState } from "react";


function App() {
  const [cartItems, setCartItems] = useState([
    {
        id: 1,
        name: "Product 1",
        price: 29.99,
        quantity: 2,
        imageUrl: "https://via.placeholder.com/150"
    },
    {
        id: 2,
        name: "Product 2",
        price: 49.99,
        quantity: 1,
        imageUrl: "https://via.placeholder.com/150"
    },
    {
        id: 3,
        name: "Product 3",
        price: 19.99,
        quantity: 3,
        imageUrl: "https://via.placeholder.com/150"
    }
]);

const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="App">
      <CartContext.Provider value={{cartItems, setCartItems, totalPrice}}>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path='/confirm' element={<ConfirmationPage/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/settings" element={<Settings/>}></Route>


        </Routes>
      </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;
