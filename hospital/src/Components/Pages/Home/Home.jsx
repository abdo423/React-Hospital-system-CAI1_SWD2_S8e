import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import OurTeamSection from './OurTeam/OurTeam';
import AppointmentServiceSection from './AppointmentService/AppointmentService';

const Home = () => {
  return (
    <>
       <OurTeamSection/>
       <AppointmentServiceSection/>
    </>

  );
};

export default Home;

