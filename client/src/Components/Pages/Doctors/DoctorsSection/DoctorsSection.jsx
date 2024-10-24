import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./DoctorsSection.module.css"; // Import CSS module
import { fetchDoctors } from "../../../../APIs/DoctorApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserDoctor } from "@fortawesome/free-solid-svg-icons";

const DoctorsSection = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => {
    console.log(state); // This will show the structure of your state
    return state.doctorsSlice.doctors; // Make sure the state has `doctors` slice
  });

  useEffect(() => {
    dispatch(fetchDoctors());
    console.log(doctors);
  }, [dispatch]);

  if (!doctors || doctors.length === 0) {
    return (
      <section id="our-doctors" className={styles.ourDoctors}>
        <div className="container">
          <h2 className="text-center mb-5">
            Meet Our <br />
            <span className="fw-bolder">Mutiki Professional Doctors</span>
          </h2>
          <div className="row justify-content-center">
            <div className="col text-center">
              <div className="alert alert-warning d-flex align-items-center" role="alert">
                <FontAwesomeIcon icon={faUserDoctor} size="2x" className="me-3" />
                <div>
                  <h4 className="alert-heading">No Doctors Found</h4>
                  <p className="mb-0">
                    We are currently updating our doctor listings. Please check back later!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

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
                  src={
                    process.env.REACT_APP_API_BASE_URL +
                    "/" +
                    doctor.DoctorImage
                  }
                  alt={doctor.name}
                  className={`card-img-top rounded ${styles.doctorImage}`}
                />
                <div className={`card-body px-0 ${styles.doctorDetails}`}>
                  <h3 className="card-title h5">{doctor.name}</h3>
                  <p className="card-text">{doctor.department.name}</p>
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
