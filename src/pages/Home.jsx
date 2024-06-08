import React from "react";
import Layout from "../layouts/Layout";
import About from "../components/About";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";

function Home() {
	return (
		<Layout>
			<div className="">
				<Hero />
				<Skills />
				<Projects />
				<About />
				<Experience />
				<Contact />
			</div>
		</Layout>
	);
}

export default Home;
