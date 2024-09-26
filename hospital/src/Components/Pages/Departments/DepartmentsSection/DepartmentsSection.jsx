import React from 'react';
import styles from './DepartmentsSection.module.css';

const DepartmentCard = ({ title, imageUrl }) => (
  <div className={`col-md-3 col-lg-2 border-0 ${styles.DepartmentCard} `}>
    <h4 className="pt-3 fs-5 fw-bold">{title}</h4>
    <div className="icon_holder">
      <img className="pt-3 pb-4" src={imageUrl} alt={title} />
    </div>
    <a className="btn fw-bold card-btn" href="#">
      Read More<i className="icofont-double-right"></i>
    </a>
  </div>
);


const DepartmentsSection = ({ title, departments }) => (
  <section className={`${styles.DepartmentsSection} text-center pt-5 pb-5`}>
    <div className="container">
      <div className="title">
        <h2 className="fw-light">We Are The</h2>
        <h2 className="fw-bold">{title}</h2>
      </div>
      <div className="row pt-5 pb-5 gap-3 justify-content-center align-items-center">
        {departments.map((dept, index) => (
          <DepartmentCard 
            key={index}
            title={dept.title}
            imageUrl={dept.imageUrl}
          />
        ))}
      </div>
    </div>
  </section>
);

export default DepartmentsSection;
