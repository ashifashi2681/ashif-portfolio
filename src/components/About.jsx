import React from "react";
import AvatarOne from "./3d/AvatarOne";

function About() {
	return (
		<div className="container my-10 md:my-8">
			<div className="grid grid-cols-2 md:grid-cols-1">
				<div className="">
					<h4 className="text-fs-xl mb-6">
						About <span className="font-[700]">Me</span>
					</h4>
					<p className="text-fs-base text-[#71717A] leading-8">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Adipisci iste quasi vero alias dolorum reiciendis nemo
						dolore enim, beatae illum eum saepe cumque, nulla,
						sapiente minima quod sit blanditiis libero magni autem
						quia explicabo delectus incidunt! Voluptates ratione
						expedita, voluptatibus necessitatibus recusandae autem
						officia fuga ex animi nisi ut tempora consectetur
						debitis maxime enim repudiandae tenetur dicta voluptas
						delectus ab!
					</p>
					<br />
					<p className="text-fs-base text-[#71717A] leading-8">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Vero beatae et sint eveniet a. Repellat vitae enim
						eveniet nam assumenda laborum ipsum odit vero ipsam
						architecto beatae sunt ducimus eligendi corrupti
						cupiditate, ut dolor asperiores dolores molestias
						expedita ratione accusantium laudantium quidem! Laborum
						repudiandae nisi nemo, esse tempora tenetur porro?
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
