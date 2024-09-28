import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FeedsSection from './FeedsSection/FeedsSection';
import JoinNewsPaperSection from '../../Shared/JoinNewsPaperSection/JoinNewsPaperSection';
import LogosSection from '../../Shared/LogosSection/LogosSection';
import AboutUsSection from '../../Shared/AboutUsSection/AboutUsSection';
import HeroSection from './HeroSection/HeroSection';
import DepartmentsSection from './DepartmentsSection/DepartmentsSection';

const Home = () => {
    return (
        <>
         <HeroSection/>

        <AboutUsSection />
        <DepartmentsSection/>
        <FeedsSection/>
        <LogosSection/>
        <JoinNewsPaperSection/>
        </>
        
    );
}

export default Home;