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
		},
		{
			name: "CSS3",
			icon: <FaCss3Alt />,
		},
		{
			name: "JavaScript",
			icon: <FaJs />,
		},
		{
			name: "React",
			icon: <FaReact />,
		},
		{
			name: "Node JS",
			icon: <FaNode />,
		},
		{
			name: "Express JS",
			icon: <SiExpress />,
		},
		{
			name: "MongoDB",
			icon: <DiMongodb />,
		},
		{
			name: "Tailwind CSS",
			icon: <RiTailwindCssFill />,
		},
		{
			name: "Bootstrap",
			icon: <FaBootstrap />,
		},
		{
			name: "React Native",
			icon: <FaReact />,
		},
		{
			name: "Figma",
			icon: <FaFigma />,
		},
		{
			name: "Adobe PS",
			icon: <DiPhotoshop />,
		},
		{
			name: "Blender",
			icon: <RiBlenderLine />,
		},
		{
			name: "GitHub",
			icon: <FaGithub />,
		},
		{
			name: "MS Office",
			icon: <TbBrandOffice />,
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
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					grid={{
						rows: 2,
						fill: "row",
					}}
					spaceBetween={40}
					modules={[Grid, Autoplay]}
					className="mySwiper">
					{skills.map((skill, i) => (
						<SwiperSlide key={i}>
							<div className="border-2 border-black rounded aspect-square flex flex-col items-center justify-center gap-6 md:gap-4 cursor-pointer hover:bg-black hover:text-white transition">
								<span className="text-fs-xxxl">
									{skill.icon}
								</span>
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
