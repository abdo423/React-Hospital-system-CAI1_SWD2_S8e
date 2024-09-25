import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PagesHeroSection from '../../Shared/PagesHeroSection/PagesHeroSection';
const servicesData = [
    {
        id: 1,
        title: 'Cardiology',
        description: 'Comprehensive cardiac care and treatment.',
        icon: 'fa-heartbeat'
    },
    {
        id: 2,
        title: 'Neurology',
        description: 'Advanced neurological diagnostics and treatments.',
        icon: 'fa-brain'
    },
    {
        id: 3,
        title: 'Orthopedics',
        description: 'Expert orthopedic care for bones and joints.',
        icon: 'fa-bone'
    }
];

const Services = () => {
    return (
        <>
         <PagesHeroSection title="Our Best Services" subTitle="Services" />

        <div className="container mt-5">
            <h2 className="text-center mb-4">Our Services</h2>
            <div className="row">
                {servicesData.map(service => (
                    <div key={service.id} className="col-md-4">
                        <div className="card mb-4 shadow-sm">
                            <div className="card-body text-center">
                                <i className={`fas ${service.icon} fa-3x mb-3`}></i>
                                <h5 className="card-title">{service.title}</h5>
                                <p className="card-text">{service.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default Services;