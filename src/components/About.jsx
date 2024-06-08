import React from "react";
import AvatarOne from "./3d/AvatarOne";

function About() {
	return (
		<div className="container py-20 md:py-14 my-10 md:my-8" id="about">
			<div className="grid grid-cols-2 md:grid-cols-1">
				<div className="">
					<h4 className="text-fs-xl mb-6">
						About <span className="font-[700]">Me</span>
					</h4>
					<p className="text-fs-base text-[#71717A] leading-8 my-2">
						Hey there! I'm Ashif, a frontend developer with a
						passion for creating engaging and seamless user
						experiences. With a solid foundation in HTML, CSS, and
						JavaScript, I specialize in crafting dynamic web
						applications using React.
					</p>

					<p className="text-fs-base text-[#71717A] leading-8 my-2">
						I love diving deep into React projects, utilizing state
						management with Redux Toolkit to efficiently manage
						application data and enhance performance. Additionally,
						I enjoy integrating various React libraries like Swiper
						for interactive sliders, AOS for smooth animations,
						React Router DOM for seamless navigation, and React
						Icons for scalable vector icons.
					</p>

					<p className="text-fs-base text-[#71717A] leading-8 my-2">
						Beyond traditional web development, I also have a keen
						interest in the world of 3D graphics and interactive
						visualizations. I've been exploring the fascinating
						realm of Three.js, leveraging its power to create
						immersive and interactive 3D experiences right in the
						browser.
					</p>

					<p className="text-fs-base text-[#71717A] leading-8 my-2">
						My journey into web development began with frontend
						design, where I honed my skills in creating visually
						stunning interfaces. As I delved deeper, I found myself
						drawn to backend development, exploring technologies
						like Node.js and Express.js to complement my frontend
						expertise.
					</p>
				</div>

				<div className="md:h-[50vh]">
					<AvatarOne name="avatar" />
				</div>
			</div>
		</div>
	);
}

export default About;
