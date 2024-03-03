import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ServiceSection from "./ServiceSection";
import AboutSection from "./AboutSection";
import StatsSection from "./StatsSection";
import PortfolioSection from "./PortfolioSection";
import ClientSection from "./clientSection";
import PricingSection from "./PricingSection";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <AboutSection />
      <StatsSection />
      <PortfolioSection />
      <ClientSection />
      <PricingSection />
      <Testimonials />
    </>
  );
};

export default Home;
