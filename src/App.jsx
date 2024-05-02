import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import FeaturesSection from "./Components/FeaturesSection";

const App = () => {
	return (
		<>
			<Navbar />
			<div className="max-w-7xl mx-auto pt-20 px-6">
				<HeroSection />
        <FeaturesSection />
			</div>
		</>
	);
};

export default App;
