import React from 'react'
import { experience } from '../db/data';

function Experience() {
  return (
		<div className="bg-black my-10 md:my-8 py-16 md:py-8">
			<div className="container text-white">
				<h4 className="text-fs-xl mb-6 text-center">
					My <span className="font-[700]">Experience</span>
				</h4>
				<div>
					{experience.map((item, i) => (
						<div
							key={i}
							className="border border-[#71717A] rounded-md p-5 my-8 md:my-4">
							<div className="flex items-center justify-between ">
								<h4 className="text-fs-md font-[500] mb-1">
									{item.title}
								</h4>
								<p className="text-fs-sm">{item.date}</p>
							</div>
							<p className='mb-3'>{item.location}</p>
							<p className="text-fs-sm text-[#71717A]">
								{item.desc}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
  );
}

export default Experience