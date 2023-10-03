import React from "react";
import { toast } from "react-hot-toast";
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";

const CartItem = ({ item, itemIndex }) => {
	const dispatch = useDispatch();

	const removeFromCart = () => {
		dispatch(remove(item.id));
		toast.success("Item Removed");
	};

	return (
		<div className="p-16">
			<div className="space-y-3 mb-4">
				<div className="h-[200px]">
					<img src={item.image} className='h-full' />
				</div>
				<div className="space-y-2">
					<h1 className="text-lg">{item.title}</h1>
					<h1 className="text-sm w-[70%]">{item.description}</h1>
					<div className="flex items-center gap-10">
						<p className=" text-green-500 font-semibold">${item.price}</p>
						<div onClick={removeFromCart}>
							<FcDeleteDatabase  className="text-3xl"/>
						</div>
					</div>
				</div>
			</div>
			<div className="w-[70%] h-1 bg-slate-400"></div>
		</div>
	);
};

export default CartItem;
