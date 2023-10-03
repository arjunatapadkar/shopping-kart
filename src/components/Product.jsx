import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/CartSlice";

const Product = ({ post }) => {
	const [selected, setSelected] = useState(false);
	const { cart } = useSelector((state) => state);

	const dispatch = useDispatch();

	const addToCart = () => {
		dispatch(add(post));
		toast.success("item added to cart");
		setSelected(true);
	};
	const removeFromCart = () => {
		dispatch(remove(post.id));
		toast.success("item romoved from cart");
		setSelected(false);
	};

	return (
		<div className="flex flex-col items-center justify-between hover:scale-110 transition duration-200 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline outline-1">
			<div>
				<p className=" text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
					{post.title}
				</p>
			</div>

			<div>
				<p className=" w-40 text-gray-400 font-normal text-[10px] text-left">
					{post.description.split(" ").splice(0, 10).join(" ") + "..."}
				</p>
			</div>

			<div className="h-[180px]">
				<img src={post.image} alt="cloth_img" className="w-full h-full " />
			</div>

			<div className="flex justify-between  w-full px-2 items-center mt-5 ">
				<div>
					<p className=" text-green-500 font-semibold">${post.price}</p>
				</div>

				<button onClick={() => setSelected(!selected)} className='border-gray-700 font-semibold text-[12px] rounded-full px-3 p-1 uppercase text-gray-700 border-2 hover:bg-slate-700 hover:text-white transition duration-200 ease-in'>
					{selected ? (
						<p onClick={removeFromCart} className=''>Remove Item</p>
					) : (
						<p onClick={addToCart}>Add to cart</p>
					)}
				</button>
			</div>
		</div>
	);
};

export default Product;
