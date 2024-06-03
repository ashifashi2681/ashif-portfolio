import React from "react";
import { projects } from "../db/data";
import { NavLink } from "react-router-dom";
import { HiOutlineExternalLink } from "react-icons/hi";

function Projects() {
	return (
		<div
			className="bg-black text-white py-16 md:py-8 my-10 md:my-8 overflow-hidden"
			data-aos="fade-up">
			<div className="container ">
				<h4 className="text-fs-xl text-center">
					My <span className="font-[700]">Projects</span>
				</h4>

				<div>
					{projects.map((project, i) => (
						<div
							id={i}
							className="flex md:flex-col-reverse items-center gap-20 md:gap-10 even:flex-row-reverse md:even:flex-col-reverse my-12">
							<div
								className="flex-1 w-full h-full object-cover overflow-hidden rounded-3xl"
								data-aos="fade-right">
								<img src={project.img} alt={project.title} />
							</div>
							<div className="flex-1" data-aos="fade-left">
								<h2 className="text-fs-xl font-[600] mb-4 md:mb-2">
									{project.id}
								</h2>
								<h4 className="text-fs-lg font-[600] mb-4 md:mb-2">
									{project.title}
								</h4>
								<p className="text-fs-base text-[#71717A] mb-4 ">
									{project.description}
								</p>
								<span className=" text-fs-md md:text-fs-lg w-fit block">
									<NavLink to={project.link}>
										<HiOutlineExternalLink />
									</NavLink>
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Projects;
