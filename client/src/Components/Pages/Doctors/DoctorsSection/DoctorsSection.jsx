import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./DoctorsSection.module.css"; // Import CSS module

const doctors = [
  {
    imgSrc: "/images/01 (1).jpg",
    name: "Dr. Jason Kovalsky",
    specialty: "Cardiologist",
  },
  {
    imgSrc: "/images/02 (1).jpg",
    name: "Patricia Mcneel",
    specialty: "Pediatrician",
  },
  {
    imgSrc: "/images/03 (1).jpg",
    name: "William Khanna",
    specialty: "Throat Specialist",
  },
  {
    imgSrc: "/images/04 (1).jpg",
    name: "Eric Patterson",
    specialty: "Therapist",
  },
  {
    imgSrc: "/images/04 (1).jpg",
    name: "Mark Trevor",
    specialty: "Therapist",
  },
  {
    imgSrc: "/images/03 (1).jpg",
    name: "Nolim Smith",
    specialty: "Volunteer",
  },
  {
    imgSrc: "/images/02 (1).jpg",
    name: "Jason Kovalsky",
    specialty: "Rehabilitation Specialist",
  },
  {
    imgSrc: "/images/01 (1).jpg",
    name: "Sarah Milles",
    specialty: "Volunteer",
  },
];

const DoctorsSection = () => {
  return (
    <section id="our-doctors" className={styles.ourDoctors}>
      <div className="container">
        <h2 className="text-center mb-5">
          Meet Our <br />
          <span className="fw-bolder">Mutiki Professional Doctors</span>
        </h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center">
          {doctors.map((doctor, index) => (
            <div className="col" key={index}>
              <div className="card h-100 border-0">
                <img
                  src={doctor.imgSrc}
                  alt={doctor.name}
                  className={`card-img-top rounded ${styles.doctorImage}`}
                />
                <div className={`card-body px-0 ${styles.doctorDetails}`}>
                  <h3 className="card-title h5">{doctor.name}</h3>
                  <p className="card-text">{doctor.specialty}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
