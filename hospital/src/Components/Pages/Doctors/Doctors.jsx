import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PagesHeroSection from '../../Shared/PagesHeroSection/PagesHeroSection';

const doctors = [
    { id: 1, name: 'Dr. John Doe', specialty: 'Cardiology' },
    { id: 2, name: 'Dr. Jane Smith', specialty: 'Neurology' },
    { id: 3, name: 'Dr. Emily Johnson', specialty: 'Pediatrics' },
];

const Doctors = () => {
    return (
        <>
            <PagesHeroSection title="Our Professional Team" subTitle="Doctors" />
            <div className="container mt-5">
                <h1 className="text-center mb-4">Our Doctors</h1>
                <ul className="list-group">
                    {doctors.map((doctor) => (
                        <li key={doctor.id} className="list-group-item">
                            <h2>{doctor.name}</h2>
                            <p>Specialty: {doctor.specialty}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Doctors;