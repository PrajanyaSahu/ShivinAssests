import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import WhyUsSection from "./components/WhyUsSection";
import TradingCycleSection from "./components/Calculator";
import ProcessSection from "./components/ProcessSection";
import Footer from "./components/Footer";
import ContactUsSection from "./components/ContactUsSection";
import PlanSection from "./components/PlanSection";
import FeeStructureSection from "./components/FeeStructureSection";
import "./App.css";
import DownloadSection from "./components/DownloadSection";


function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <WhyUsSection />
      <PlanSection />
      <TradingCycleSection />
      <ProcessSection />
      <FeeStructureSection />
      <DownloadSection />
      <ContactUsSection />
      <Footer />
    </>
  );
}

export default App;
