import React from "react";
import { NavLink } from "react-router-dom";
import { LuFacebook, LuGithub, LuInstagram, LuTwitter } from "react-icons/lu";
import AvatarOne from "./3d/AvatarOne";

function Hero() {
	return (
		<div className="container mt-20 md:mt-16">
			<div className="grid grid-cols-2 md:grid-cols-1">
				<div className="">
					<h2 className=" text-fs-xxl font-[400] mb-4">
						Hello I'am <span className="font-[600]">Ashif.</span>{" "}
						<br /> <span className="font-[600]">Web</span>{" "}
						<span className="text-stroke-3 text-white font-[600]">
							Developer
						</span>
						<br /> Based In{" "}
						<span className="font-[600]">India</span>
					</h2>
					<p className="text-fs-base text-[#71717A] leading-8 mb-10">
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Debitis ratione accusantium molestias veniam
						accusamus ipsa dolore, doloribus sed, quae at ab natus
						facilis vero commodi tempore aperiam. Voluptas, non
						repudiandae vero dolorem eius veniam nostrum blanditiis
						explicabo, hic eum vel.
					</p>
				</div>
				<div className="md:h-[50vh]">
					<AvatarOne
						name="avatar-anim"
					/>
				</div>
			</div>

			<div className="flex items-center gap-5">
				<NavLink>
					<div className="border-[2px] w-fit border-black rounded p-2 text-fs-base hover:bg-black hover:text-white transition">
						<LuInstagram />
					</div>
				</NavLink>
				<NavLink>
					<div className="border-[2px] w-fit border-black rounded p-2 text-fs-base hover:bg-black hover:text-white transition">
						<LuFacebook />
					</div>
				</NavLink>
				<NavLink>
					<div className="border-[2px] w-fit border-black rounded p-2 text-fs-base hover:bg-black hover:text-white transition">
						<LuGithub />
					</div>
				</NavLink>
				<NavLink>
					<div className="border-[2px] w-fit border-black rounded p-2 text-fs-base hover:bg-black hover:text-white transition">
						<LuTwitter />
					</div>
				</NavLink>
			</div>
		</div>
	);
}

export default Hero;
