import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FeedsSection from './FeedsSection/FeedsSection';
import JoinNewsPaperSection from '../../Shared/JoinNewsPaperSection/JoinNewsPaperSection';
import LogosSection from '../../Shared/LogosSection/LogosSection';
import AboutUsSection from '../../Shared/AboutUsSection/AboutUsSection';
import HeroSection from './HeroSection/HeroSection';
import DepartmentsSection from './DepartmentsSection/DepartmentsSection';
import AppointmentServiceSection from './AppointmentServiceSection/AppointmentServiceSection';
import OurTeamSection from './OurTeamSection/OurTeamSection';

const Home = () => {
    return (
        <>
         <HeroSection/>

        <AboutUsSection />
        <DepartmentsSection/>
        <OurTeamSection/>
        <AppointmentServiceSection/>
        <FeedsSection/>
        <LogosSection/>
        <JoinNewsPaperSection/>
        </>
        
    );
}

export default Home;