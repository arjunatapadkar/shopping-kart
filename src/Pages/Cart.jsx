import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
	const { cart } = useSelector((state) => state);
	const [totalAmount, setTotalAmount] = useState(0);

	useEffect(() => {
		setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
	}, [cart]);
	return (
		<div>
			{cart.length > 0 ? (
				<div className="flex p-10 justify-end items-center">
					<div className="w-[70%]">
						{cart.map((item, index) => {
							return <CartItem key={index} item={item} itemIndex={index}  className="mb-5"/>;
						})}
					</div>

					<div className="p-20">
						<div >
							<div className="text-3xl mb-5">Your Cart</div>
							<div className="text-lg mb-3">Summary</div>
							<p>
								<span>Total Items: {cart.length}</span>
							</p>
						</div>
						<div>
							<p className="mb-5">Total Amount: ${totalAmount}</p>
							<button className=" bg-blue-900 px-5 py-1 text-white">CheckOut</button>
						</div>
					</div>
				</div>
			) : (
				<div className=" h-screen w-full flex flex-col justify-center items-center gap-4">
					<h1>Cart Empty</h1>
					<Link to="/">
						<button className=" bg-blue-900 px-5 py-1 text-white">Shop Now</button>
					</Link>
				</div>
			)}
		</div>
	);
};

export default Cart;
