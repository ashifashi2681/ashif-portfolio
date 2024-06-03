import React from "react";
import { LuFacebook, LuGithub, LuInstagram, LuTwitter } from "react-icons/lu";
import { NavLink } from "react-router-dom";

function Contact() {
	return (
		<div className="container my-10 md:my-8 overflow-hidden">
			<div className="flex md:flex-col-reverse gap-10">
				<div className="flex-1" data-aos="fade-right">
					<form>
						<div className="relative my-4">
							<input
								type="text"
								className=" border border-solid border-[#71717A] w-full p-2 text-fs-sm rounded bg-transparent  "
								required
							/>
							<label className="absolute left-0 top-[50%] translate-y-[-50%] p-2 mx-2 text-fs-sm text-[#71717A] bg-white leading-[1px] -z-10 transition ">
								Your Name
							</label>
						</div>

						<div className="relative my-4">
							<input
								type="mail"
								className=" border border-solid border-[#71717A] w-full p-2 text-fs-sm rounded bg-transparent  "
								required
							/>
							<label className="absolute left-0 top-[50%] translate-y-[-50%] p-2 mx-2 text-fs-sm text-[#71717A] bg-white leading-[1px] -z-10 transition ">
								Email
							</label>
						</div>

						<div className="relative my-4">
							<textarea
								type="text"
								rows={5}
								placeholder="Message"
								className=" border border-solid border-[#71717A] w-full p-2 text-fs-sm rounded bg-transparent"
							/>
						</div>

						<div className="flex items-center gap-5">
							<button className="bg-primary text-white text-fs-sm font-[500] flex items-center gap-2 py-2 px-4 rounded cursor-pointer shine">
								Get In Touch
							</button>

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
					</form>
				</div>

				<div className="flex-1" data-aos="fade-left">
					<h2 className="text-fs-xxl font-[700] leading-tight mb-5">
						Let's{" "}
						<span className="text-stroke-3 text-white">talk</span>{" "}
						for <br /> Somthing special
					</h2>

					<p className="text-fs-base text-[#71717A]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Cupiditate eum laborum corporis, dignissimos magni nam
						at facere pariatur doloremque deleniti architecto error
						veniam incidunt harum, placeat repellat temporibus
						suscipit id?
					</p>
				</div>
			</div>
		</div>
	);
}

export default Contact;
