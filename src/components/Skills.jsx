import React from "react";
import {
	FaBootstrap,
	FaCss3Alt,
	FaFigma,
	FaGithub,
	FaHtml5,
	FaJs,
	FaNode,
	FaReact,
	FaShopify,
} from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { RiBlenderLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandOffice } from "react-icons/tb";
import { DiPhotoshop } from "react-icons/di";

import { Swiper, SwiperSlide } from "swiper/react";

import { Grid, Autoplay } from "swiper/modules";

function Skills() {
	const skills = [
		{
			name: "HTML5",
			icon: <FaHtml5 />,
			level: "99%",
		},
		{
			name: "CSS3",
			icon: <FaCss3Alt />,
			level: "95%",
		},
		{
			name: "JavaScript",
			icon: <FaJs />,
			level: "50%",
		},
		{
			name: "React",
			icon: <FaReact />,
			level: "85%",
		},
		{
			name: "Node JS",
			icon: <FaNode />,
			level: "70%",
		},
		{
			name: "Express JS",
			icon: <SiExpress />,
			level: "70%",
		},
		{
			name: "MongoDB",
			icon: <DiMongodb />,
			level: "40%",
		},
		{
			name: "Tailwind CSS",
			icon: <RiTailwindCssFill />,
			level: "95%",
		},
		{
			name: "Bootstrap",
			icon: <FaBootstrap />,
			level: "95%",
		},
		{
			name: "React Native",
			icon: <FaReact />,
			level: "40%",
		},
		{
			name: "Figma",
			icon: <FaFigma />,
			level: "50%",
		},
		{
			name: "Adobe PS",
			icon: <DiPhotoshop />,
			level: "80%",
		},
		{
			name: "Blender",
			icon: <RiBlenderLine />,
			level: "15%",
		},
		{
			name: "GitHub",
			icon: <FaGithub />,
			level: "30%",
		},
		{
			name: "Shopify",
			icon: <FaShopify />,
			level: "50%",
		},
		{
			name: "MS Office",
			icon: <TbBrandOffice />,
			level: "85%",
		},
	];

	return (
		<div className="container my-10 md:my-8">
			<h4 className="text-fs-xl mb-6 text-center">
				My <span className="font-[700]">Skills</span>
			</h4>

			<div>
				<Swiper
					breakpoints={{
						0: {
							slidesPerView: 2,
							spaceBetween: 10,
							grid: {
								rows: 2,
							},
						},
						480: {
							slidesPerView: 3,
							spaceBetween: 15,
							grid: {
								rows: 2,
							},
						},
						640: {
							slidesPerView: 3,
							spaceBetween: 20,
							grid: {
								rows: 2,
							},
						},
						768: {
							slidesPerView: 4,
							spaceBetween: 25,
							grid: {
								rows: 2,
							},
						},
						900: {
							slidesPerView: 5,
							spaceBetween: 30,
							grid: {
								rows: 2,
							},
						},
						1024: {
							slidesPerView: 6,
							spaceBetween: 35,
							grid: {
								rows: 2,
							},
						},
					}}
					loop={false}
					speed={5000}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					grid={{
						rows: 2,
						fill: "row",
					}}
					disableOnInteraction={false}
					spaceBetween={40}
					modules={[Grid, Autoplay]}
					className="mySwiper">
					{skills.map((skill, i) => (
						<SwiperSlide key={i}>
							<div className="border-2 border-black rounded aspect-square flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-black hover:text-white transition">
								<span className="text-fs-xxxl">
									{skill.icon}
								</span>
								<span className="text-fs-base font-[800] text-white">{skill.level}</span>
								<span className="text-fs-base font-[700]">
									{skill.name}
								</span>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default Skills;
