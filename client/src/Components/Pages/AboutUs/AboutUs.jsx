import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PagesHeroSection from "../../Shared/PagesHeroSection/PagesHeroSection";
import AboutUsSection from "../../Shared/AboutUsSection/AboutUsSection";
import LogosSection from "../../Shared/LogosSection/LogosSection";  
const AboutUs = () => {
  return (
    <>
      <PagesHeroSection title="About The Mutki" subTitle="About Us" />
      <AboutUsSection />
      <LogosSection/>
    </>
  );
};

export default AboutUs;
