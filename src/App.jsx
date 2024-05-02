import React from "react";
import "./App.css";
import FeaturesSection from "./Components/FeaturesSection";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import Workflow from "./Components/Workflow";
import PricingSection from "./Components/PricingSection";
import Testimonials from "./Components/Testimonials";
import FooterSection from "./Components/FooterSection";

const App = () => {
	return (
		<>
			<Navbar />
			<div className="max-w-7xl mx-auto pt-20 px-6">
				<HeroSection />
				<FeaturesSection />
				<Workflow />
				<PricingSection />
				<Testimonials />
				<FooterSection />
			</div>
		</>
	);
};

export default App;
