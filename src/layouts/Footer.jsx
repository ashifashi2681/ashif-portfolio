import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import { LuFacebook, LuInstagram, LuYoutube } from "react-icons/lu";
import { MdWhatsapp } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { BiSend } from "react-icons/bi";

import { NavLink } from "react-router-dom";

function Footer() {
	return (
		<div className="bg-black text-white">
				<div className="container flex justify-end items-center h-16">
					<p>@2024 Personal</p>
				</div>
		</div>
	);
}

export default Footer;


/* 

<div className=" w-[90%] max-w-[1300px] mx-auto pb-12">
				<div className="flex md:flex-col gap-2 items-center justify-between border-b-2 border-[#475467] py-8">
					<p className="text-fs-xxl font-[600] text-white">
						Lets Connect there
					</p>
					<button className="group flex items-center gap-2 bg-[#fd853a] text-white text-fs-md font-[500] py-2 px-6 md:px-5 rounded-full cursor-pointer ">
						Hire me{" "}
						<span className=" transform -rotate-45 group-hover:rotate-0 transition duration-200 ease-linear">
							<IoArrowForwardOutline />
						</span>
					</button>
				</div>

				<div className=" grid grid-cols-2 lg:grid-cols-1 gap-2 lg:gap-6 border-b-2 border-[#475467]  py-10">
					<div className="flex flex-col gap-6 justify-center lg:border-b-2 border-[#475467] lg:pb-6">
						<div className="text-white text-2xl">brand</div>
						<div>
							<p className="text-white text-fs-base">
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Rerum cupiditate recusandae,
								vero sapiente ratione incidunt harum tenetur
								expedita similique quasi esse animi, natus
								libero sequi. Eos, sit doloribus?
								Exercitationem, ducimus?
							</p>
						</div>
						<div className="flex items-center gap-4 text-white">
							<span className=" cursor-pointer hover:text-[#fd853a] text-fs-md">
								<LuFacebook />
							</span>
							<span className=" cursor-pointer hover:text-[#fd853a] text-fs-md">
								<LuYoutube />
							</span>
							<span className=" cursor-pointer hover:text-[#fd853a] text-fs-md">
								<LuInstagram />
							</span>
							<span className=" cursor-pointer hover:text-[#fd853a] text-fs-md">
								<MdWhatsapp />
							</span>
							<span className=" cursor-pointer hover:text-[#fd853a] text-fs-md">
								<FaXTwitter />
							</span>
						</div>
					</div>

					<div className="flex gap-8 flex-wrap">
						<div className=" ">
							<p className="text-fs-base font-[600] text-[#fd853a]">
								Navigation
							</p>
							<ul className="flex flex-col gap-3 mt-5 text-white text-fs-sm font-[500]">
								<li className=" w-fit hover:shadow-[6px_6px_8px_-5px_#fd853a] transition ">
									<NavLink>Home</NavLink>
								</li>
								<li className=" w-fit hover:shadow-[6px_6px_8px_-5px_#fd853a] transition">
									<NavLink>About Us</NavLink>
								</li>
								<li className=" w-fit hover:shadow-[6px_6px_8px_-5px_#fd853a] transition">
									<NavLink>Service</NavLink>
								</li>
								<li className=" w-fit hover:shadow-[6px_6px_8px_-5px_#fd853a] transition">
									<NavLink>Resume</NavLink>
								</li>
								<li className=" w-fit hover:shadow-[6px_6px_8px_-5px_#fd853a] transition">
									<NavLink>Project</NavLink>
								</li>
							</ul>
						</div>

						<div className=" ">
							<p className="text-fs-base font-[600] text-[#fd853a]">
								Contact
							</p>
							<ul className="flex flex-col gap-3 mt-5 text-[#fcfcfd] text-fs-sm font-[500]">
								<li>+91 7034 890 206</li>
								<li className=" w-fit hover:shadow-[6px_6px_8px_-5px_#fd853a] transition">
									<NavLink>ashifashi2681@gmail.com</NavLink>
								</li>
							</ul>
						</div>

						<div className="grow sm:self">
							<p className="text-fs-base font-[600] text-[#fd853a] whitespace-nowrap">
								Get the latest information
							</p>
							<div className="mt-5 relative rounded-xl overflow-hidden">
								<input
									type="email"
									placeholder="Email Address"
									className="w-full px-2 py-3 md:py-2 text-fs-base"
								/>
								<button className="absolute top-0 bottom-0 right-0 px-3 bg-[#fd853a] text-fs-md text-white cursor-pointer">
									<BiSend />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

*/