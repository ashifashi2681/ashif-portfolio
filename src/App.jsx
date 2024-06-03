import React from "react";
import Home from "./pages/Home";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
function App() {
	return (
		<>
			<Home />
		</>
	);
}

export default App;
