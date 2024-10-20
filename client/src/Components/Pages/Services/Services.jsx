import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PagesHeroSection from "../../Shared/PagesHeroSection/PagesHeroSection";
const servicesCard = {
    id: 1,
    imageSrc: "/images/01.jpg",
    title: "Family Health Solutions",
    text: "Proced arrain manu produc rather conve quvat mantan this conven multscplinari testin motin was procedur aamng proced arrain manu produc rather conve quvat mantan this convenmultscplinari testiners motin was procedur arramin"
};


const Services = () => {
  return (
    <>
      <PagesHeroSection title="Our Best Services" subTitle="Services" />
      <section id="services">
        <div className="d-flex align-items-center justify-content-center py-5">
          <div className="card border-0 w-75 my-5">
            <div className="container">
              <div className="row g-0">
                <div className="col-md-12 col-lg-6">
                  <img
                    src={servicesCard.imageSrc}
                    className="img-fluid w-100 h-100"
                    alt={`photo of ${servicesCard.title}`}
                  />
                </div>
                <div className="col-md-12 col-lg-6">
                  <div className="card-body">
                    <h5 className="card-title mt-3">{servicesCard.title}</h5>
                    <p className="card-text">{servicesCard.text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
