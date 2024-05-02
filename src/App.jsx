import React from "react";
import "./App.css";
import FeaturesSection from "./Components/FeaturesSection";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import Workflow from "./Components/Workflow";
import PricingSection from "./Components/PricingSection";

const App = () => {
	return (
		<>
			<Navbar />
			<div className="max-w-7xl mx-auto pt-20 px-6">
				<HeroSection />
        <FeaturesSection />
        <Workflow />
        <PricingSection />
			</div>
		</>
	);
};

export default App;
