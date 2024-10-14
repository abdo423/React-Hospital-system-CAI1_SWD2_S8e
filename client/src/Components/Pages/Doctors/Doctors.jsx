import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PagesHeroSection from "../../Shared/PagesHeroSection/PagesHeroSection";
import DoctorsSection from "./DoctorsSection/DoctorsSection";
const Doctors = () => {
  return (
    <>
      <PagesHeroSection title="Our Professional Team" subTitle="Doctors" />
      <DoctorsSection />
    </>
  );
};

export default Doctors;
