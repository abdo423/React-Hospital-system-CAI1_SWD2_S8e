import React from 'react';
import Form from './ContactUsSesction/Form';
import Map from './ContactUsSesction/map';
import PagesHeroSection from '../../Shared/PagesHeroSection/PagesHeroSection';
const ContactUs = () => {
    return (
        <>
          <PagesHeroSection title="Contact Information" subTitle="Contact Us" />
            <Form />
            <Map />
        </>
    );
};

export default ContactUs;
