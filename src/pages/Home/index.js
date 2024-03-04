import React from "react";
// import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ServiceSection from "./ServiceSection";
import AboutSection from "./AboutSection";
import StatsSection from "./StatsSection";
import PortfolioSection from "./PortfolioSection";
import ClientSection from "./clientSection";
import PricingSection from "./PricingSection";
import Testimonials from "./Testimonials";
import BlogSection from "./BlogSection";
// import FooterSection from "./FooterSection";

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />
      <ServiceSection />
      <AboutSection />
      <StatsSection />
      <PortfolioSection />
      <ClientSection />
      <PricingSection />
      <Testimonials />
      <BlogSection />
      {/* <FooterSection /> */}
    </>
  );
};

export default Home;
