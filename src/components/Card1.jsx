import React from "react";
import { FaArrowRight } from "react-icons/fa6";

function Card1() {
	return (
		<div className="bg-orange-400 w-80 h-96 relative rounded-3xl glass overflow-hidden">
			<div className=" px-5 py-4">
				<span className="text-white font-[500] text-fs-lg ">ul/ux design</span>
			</div>

			<div className="bg-pink-400">
				f
				{/* <img
					src="https://img.freepik.com/premium-photo/mobile-app-layout-design-home-repair-delivery-with-practical-functional-layout-concepts_655090-795869.jpg?w=740"
					alt="" className="w-full h-full object-cover"
				/> */}
			</div>

			<div className="bg-[#272727] w-fit h-fit absolute right-0 bottom-0 rounded-ss-[50%] border-t-[18px] border-l-[18px] border-[#272727] btn">
				<button className="bg-[#1d2939] text-white text-fs-lg font-[500] p-7 rounded-full -rotate-45 cursor-pointer">
					<FaArrowRight />
				</button>
			</div>
		</div>
	);
}

export default Card1;
