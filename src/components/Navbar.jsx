import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "../Pages/Cart";
import { useSelector } from "react-redux";
import CartSlice from "../redux/slices/CartSlice";

const Navbar = () => {

	const {cart} = useSelector((state) => state);
	return (
		<div >
			<nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
				<NavLink to="/">
					<div className=" ml-5 ">
						<img src="../logo.jpeg" width={70} className=" mix-blend-screen opacity-200 rounded-3xl" />
					</div>
				</NavLink>

				<div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
					<NavLink to="/">
						<p>Home</p>
					</NavLink>

					<NavLink to="/cart">
						<div className="relative">
							<FaShoppingCart className=" text-2xl" />
							{
								cart.length > 0 && 
								<span className="absolute -top-2 -right-2 bg-green-500 w-4 h-4 flex animate-pulse items-center justify-center p-1 text-xs rounded-full">{cart.length}</span>
							}
						</div>
					</NavLink>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
