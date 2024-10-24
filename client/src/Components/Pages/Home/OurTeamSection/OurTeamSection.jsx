import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./OurTeamSection.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchRandomDoctors } from "../../../../APIs/DoctorApi";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesome
import { faUserDoctor } from "@fortawesome/free-solid-svg-icons"; // Import specific icon

// Array for badge colors
const badgeColors = ["#37cade", "#3ea5ea", "#0383ce", "#30549f"];

const DoctorCard = ({ doctor, badgeColor }) => (
  <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4">
    <div className="card h-100 shadow-sm">
      <img
        src={process.env.REACT_APP_API_BASE_URL + "/" + doctor.DoctorImage}
        className={`card-img-top ${styles.doctorImage}`} /* Apply the image styles */
        alt={doctor.name}
      />
      <div className="card-body p-0">
        <div
          className={`${styles.badgeCustom} p-3 text-white`}
          style={{
            backgroundColor: badgeColor,
          }}
        >
          <h5 className="mb-1">{doctor.name}</h5>
          <p className="mb-0">{doctor.department.name}</p>
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
  const { doctors, error, loading } = useSelector(
    (state) => state.doctorsSlice
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRandomDoctors());
  }, [dispatch]);

  if (loading) {
    return (
      <section className={`py-5 ${styles.ourTeamSection}`}>
        <div className="container text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={`py-5 ${styles.ourTeamSection}`}>
        <div className="container text-center">
          <h2 className="text-danger">{error}</h2>
        </div>
      </section>
    );
  }

  if (!doctors || doctors.length === 0) {
    return (
      <section className={`py-5 ${styles.ourTeamSection}`}>
        <div className="container text-center">
          <div className="text-center mb-5">
            <h2 className="fw-light">Meet Our</h2>
            <h3 className="fw-bold">Multi Professional Doctors</h3>
          </div>
          <div
            className="alert alert-warning d-flex align-items-center"
            role="alert"
          >
            <FontAwesomeIcon icon={faUserDoctor} size="2x" className="me-3" />
            <div>
              <h4 className="alert-heading">No Doctors Available</h4>
              <p className="mb-0">
                It seems we currently have no doctors available. Please check
                back later!
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-5 ${styles.ourTeamSection}`}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-light">Meet Our</h2>
          <h3 className="fw-bold">Multi Professional Doctors</h3>
        </div>

        <div className="row">
          {doctors.map((doctor, index) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              badgeColor={badgeColors[index % badgeColors.length]}
            />
          ))}
        </div>

        <div className="text-center mt-4">
          <Link to="/doctors" className="btn btn-primary btn-lg">
            View All Doctors &raquo;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
