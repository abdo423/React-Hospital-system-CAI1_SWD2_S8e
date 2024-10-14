import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './OurTeamSection.module.css';

const doctors = [
  {
    id: 1,
    name: 'Dr. Jason Kovalsky',
    specialty: 'Cardiologist',
    image: '/images/01 (1).jpg',
    badgeColor: '#37cade',
    phone: '658 222 127 964',
    email: 'admin@gmail.com'
  },
  {
    id: 2,
    name: 'Patricia Mcneel',
    specialty: 'Pediatrician',
    image: '/images/02 (1).jpg',
    badgeColor: '#3ea5ea',
    phone: '658 222 127 964',
    email: 'admin@gmail.com'
  },
  {
    id: 3,
    name: 'William Khanna',
    specialty: 'Throat Specialist',
    image: '/images/03 (1).jpg',
    badgeColor: '#0383ce',
    phone: '658 222 127 964',
    email: 'admin@gmail.com'
  },
  {
    id: 4,
    name: 'Eric Patterson',
    specialty: 'Therapist',
    image: '/images/04 (1).jpg',
    badgeColor: '#30549f',
    phone: '658 222 127 964',
    email: 'admin@gmail.com'
  }
];

const DoctorCard = ({ doctor }) => (
  <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
    <div className="card h-100 shadow-sm">
      <img src={doctor.image} className="card-img-top" alt={doctor.name} />
      <div className="card-body p-0">
        <div className={`${styles.badgeCustom} p-3 text-white`} style={{ backgroundColor: doctor.badgeColor}} >
          <h5 className="mb-1">{doctor.name}</h5>
          <p className="mb-0">{doctor.specialty}</p>
        </div>
        <div className="p-3">
          <p className="mb-1 text-muted">Phone: {doctor.phone}</p>
          <p className="mb-0 text-muted">Email: {doctor.email}</p>
        </div>
      </div>
    </div>
  </div>
);

const OurTeamSection = () => {
  return (
    <section  className={`py-5 ${styles.ourTeamSection}`}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-light">Meet Our</h2>
          <h3 className="fw-bold">Mukti Professional Doctors</h3>
        </div>

        <div className="row">
          {doctors.map(doctor => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>

        <div className="text-center mt-4">
          <a href="#" className="btn btn-primary btn-lg">
            View All Doctors &raquo;
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;