import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export default function Navbar() {

    const navigate = useNavigate();

    const {cartItems, setCartItems, totalPrice} = useContext(CartContext)

    function handleCartNavigation(e) {
        navigate('/cart')

    } 

    return (
        <>
            <div className="navbar bg-base-100 mt-1">
  <div className="flex-1">
    <Link className="btn btn-ghost text-xl" to={"/dashboard"}>StudentStash</Link>
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered ml-6 w-24 md:w-auto" />
    </div>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="badge badge-sm indicator-item">{cartItems.length}</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold">{`${cartItems.length} items`}</span>
          <span className="text-info">{`Subtotal: ${totalPrice}`}</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block" onClick={handleCartNavigation}>View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><Link className="justify-between" to="/profile">Profile</Link></li>
        <li><Link className="justify-between" to="/profile">Listings</Link></li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        </>
    )
}