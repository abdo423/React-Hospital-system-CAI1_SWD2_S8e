import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import FooterCSS from "./Footer.module.css";

const Footer = () => {
  const contactInfo = {
    description:
      "Rapidiously seize wireless strategic theme areas and corporate testing procedures. Uniquely.",
    address: "Suite 02, New Elephant Road, USA",
    phone: "+880 142 258 123, 02-96936",
    email: "info@mukti.com",
    website: "www.mukti.com",
  };

  const openingHours = {
    days: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
    hours: [
      "8:00 am - 10:00 pm",
      "6:00 am - 8:00 pm",
      "6:00 am - 2:00 pm",
      "7:00 am - 9:00 pm",
      "10:00 am - 12:00 pm",
      "2:00 pm - 6:00 pm",
    ],
  };

  return (
    <footer className={FooterCSS.footer}>
      <div className="container pt-5 pb-5 text-center text-md-start text-black-50">
        <div className="row pt-5">
          {/* Contact Info */}
          <div className="col-md-6 col-xl-3 pt-5">
            <div className="Contact_info">
              <h5 className="text-dark fw-bold">Contact info</h5>
              <p>{contactInfo.description}</p>
              <ul className="list-unstyled lh-lg">
                <li>
                  <i className="icofont-home"></i> {contactInfo.address}
                </li>
                <li>
                  <i className="icofont-phone"></i> {contactInfo.phone}
                </li>
                <li className="text-dark">
                  <i className="icofont-email"></i> {contactInfo.email}
                </li>
                <li className="text-dark">
                  <i className="icofont-web"></i> {contactInfo.website}
                </li>
              </ul>
            </div>
          </div>
         { /* Our Doctors */}
          <div className="col-md-6 col-xl-6 text-center text-md-start pt-5">
            <div className="Our_doctors text-dark">
              <img
                className="pb-3"
                src="/images/logo (1).png"
                alt="Company Logo"
              />
              <p>
                Proactively predominate empowered portals via robust
                infrastructure. Conveniently scale scalable initiatives rather
                than magnetic action items.
              </p>
              <h4 className="fw-bold pb-4">Subscribe to Our Newsletter</h4>
              <div className="email-section d-flex justify-content-center justify-content-md-start">
                <i className="icofont-ui-email icofont-1x"></i>
                <input
                  className="w-75 rounded-0 border-0 email_input"
                  type="email"
                  placeholder="Enter Your Email"
                />
                <input
                  className={`btn rounded-0 fw-bold ${FooterCSS.subscribe_btn}`}
                  type="submit"
                  value="Subscribe Now"
                />
              </div>
            </div>
          </div>
          {/* Opening Hours */}
          <div className="col-md-6 col-xl-3 text-center text-md-start pt-5">
            <div className="Opening_Hours">
              <h5 className="text-dark fw-bold">Opening Hours</h5>
              <div className="d-flex justify-content-center justify-content-md-start">
                <div className="ul list-unstyled lh-lg">
                  {openingHours.days.map((day, index) => (
                    <li key={index}>{day}</li>
                  ))}
                </div>
                <div className="ul list-unstyled lh-lg">
                  {openingHours.hours.map((hour, index) => (
                    <li key={index}>{hour}</li>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Copyright Section */}
          <div className="copy-right pt-5 mt-5">
            <p className="text-center">
              Copyright &copy; {new Date().getFullYear()}{" "}
              <span className={FooterCSS.one}>Mukti</span> . Designed by{" "}
              <span className={FooterCSS.two}>LabArtisan</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
