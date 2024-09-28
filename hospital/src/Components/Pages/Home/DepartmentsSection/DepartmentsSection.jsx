import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./DepartmentsSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faHospitalUser,
  faUserDoctor,
  faHospital,
  faStethoscope,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
const departmentFooter = [
  { icon: faHospitalUser, title: "152+", desc: "Patients Every Day" },
  { icon: faUserDoctor, title: "122+", desc: "Qualified Doctors" },
  { icon: faHospital, title: "3+", desc: "Years Experience" },
  { icon: faStethoscope, title: "105+", desc: "Diagnosis Variety" },
];

const departmentPhotos = [
  { id: 1, imageSrc: "/images/01.png" },
  { id: 2, imageSrc: "/images/03.png", link: "#" },
  { id: 3, imageSrc: "/images/04.png", link: "#" },
  { id: 4, imageSrc: "/images/05.png", link: "#" },
  { id: 5, imageSrc: "/images/06.png", link: "#" },
  { id: 6, imageSrc: "/images/07.png", link: "#" },
  { id: 7, imageSrc: "/images/08.png", link: "#" },
  { id: 8, imageSrc: "/images/09.png", link: "#" },
];
const  departmentSummry = {
  title: "Speciality Rhinology 1",
  content:
    "Procedur arrain manu producs rather convenet cuvate mantna this man Manucur produc rather conven cuvatie mantan this conven cuvate bad Credibly envisioneer ubiquitous niche markets transparen relations Dramatically enable worldwide action items whereas magnetic source motin was procedur arramin",
  listContent: [
    "Qualified Doctors",
    "Feel like Home Services",
    "24x7 Emergency Services",
    "Outdoor Checkup",
    "General Medical",
    "Easy and Affordable Billing",
  ],
};

const DepartmentsSection = () => {
  return (
    <>
      <section className={style.department}>
        <div className="title-of-section">
          <p className="text-center pb-3 pt-5 fs-2">We Are The</p>
          <h2 className="text-center pb-4 fw-bold">
            Best Our Departments Center
          </h2>
        </div>
        <div className={style.theContentOfSection}>
          <div className={style.departmentsPhotos}>
            <div className="container">
              <div className=" row justify-content-center ">
                {departmentPhotos.map((el) => (
                  <div
                    key={el.id}
                    className="col-lg-1 col-md-3 col-sm-6 p-1 mx-2 mb-3 text-center"
                  >
                    <div className={style.photo}>
                      <a href={el.link}>
                        <img
                          src={el.imageSrc}
                          alt={`photo ${el.id} placeholder`}
                        />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={`${style.departmentSummry} position-relative`}>
            <div className="container">
              <div className={`${style.summry} row shadow`}>
                <div className="col-lg-6 col-md-12 col-sm-12 ps-3">
                  <div className="text lh-lg">
                    <h5 className="pt-5 fw-bold">{departmentSummry.title}</h5>
                    <p>{departmentSummry.content}</p>
                    <ul className="row list-unstyled">
                      {departmentSummry.listContent.map((item, index) => (
                        <li
                          key={index}
                          className="col-lg-6 col-md-12 col-sm-12 my-1"
                        >
                          <FontAwesomeIcon
                            icon={faCheck}
                            className="me-2"
                            style={{
                              color: "#0071e1",
                              paddingRight: "10px",
                              fontSize: "large",
                              fontWeight: 900,
                            }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a href="#" className="text-decoration-none">
                      <button
                        className={`${style.primaryButton} border-0 p-3 mb-3`}
                      >
                        Appointment Now
                        <FontAwesomeIcon icon={faAngleRight} />
                      </button>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 p-3 d-flex align-items-stretch justify-content-center">
                  <div className="image-holder">
                    <img
                      src="/images/ph 1.jpg"
                      className="img-fluid h-100"
                      alt="image placeholder"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={`row p-5 mb-5 ${style.DepartmentsFooter}`}>
              {departmentFooter.map((item, index) => (
                <div key={index} className="col-md-3 col-sm-6 mb-4">
                  <div className="d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="display-4 text-white me-3"
                    />
                    <div className="text-white">
                      <h3 className="fw-bold mb-0">{item.title}</h3>
                      <p className="mb-0">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DepartmentsSection;
