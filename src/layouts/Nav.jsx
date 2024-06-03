import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineFileDownload } from "react-icons/md";
import { RiCloseLine, RiMenu5Line } from "react-icons/ri";

function Nav() {
	const [active, setActive] = useState(false);

	return (
		<div className="bg-white fixed top-0 left-0 right-0 shadow-md z-50">
			<div className="container flex justify-between items-center py-4 md:py-3">
				<div className="text-fs-lg font-[600]">
					<NavLink to="/">brand</NavLink>
				</div>

				<ul
					className={`flex items-center gap-8 text-fs-base font-[600] md:absolute md:flex-col md:left-0 md:right-0 md:top-[95%] md:bg-white clip md:pb-5 md:gap-5 ${
						active && "clip-active"
					}`}>
					<li className="nav-link relative">
						<NavLink to="/skill">Skill</NavLink>
					</li>
					<li className="nav-link relative">
						<NavLink to="/projects">Projects</NavLink>
					</li>
					<li className="nav-link relative">
						<NavLink to="/about">About me</NavLink>
					</li>
					<li className="nav-link relative">
						<NavLink to="/experience">Experience</NavLink>
					</li>
					<li className="nav-link relative">
						<NavLink to="/contact">Contact me</NavLink>
					</li>
				</ul>

				<button className="bg-primary text-white text-fs-base font-[500] flex items-center gap-2 py-2 px-4 rounded cursor-pointer shine md:hidden">
					Resume
					<span className="text-fs-md">
						<MdOutlineFileDownload />
					</span>
				</button>

				<span
					className="menu md:block hidden text-fs-md bg-black text-white p-2 rounded-full cursor-pointer"
					onClick={() => setActive(!active)}>
					{!active ? <RiMenu5Line /> : <RiCloseLine />}
				</span>
			</div>
		</div>
	);
}

export default Nav;
