import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Header.module.css"; // Import CSS module
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/js/bootstrap.bundle.min'; // This includes Popper.js and Bootstrap JS

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/contact", label: "Contact" },
  { path: "/departments", label: "Departments" },
  { path: "/doctors", label: "Doctors" },
  { path: "/blogs", label: "Blogs" },
];

const Header = () => {
  return (
    <header>
      {/* Contact Section */}
      <section className={styles.contact}>
        <div className="container mx-auto">
          <div className="row align-items-center">
            <div className={`col-md-3 col-sm-12 text-center text-md-start mb-3 mb-md-0 ${styles.logo}`}>
              <a href="#">
                <img
                  src="/images/logo (1).png"
                  alt="Logo"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className={`col-md-7 col-sm-12 d-flex justify-content-between align-items-center flex-wrap ${styles.contactUs}`}>
              <div className="col d-flex align-items-center mb-2">
                <img src="/images/1.png" alt="phone icon" />
                <p className="mb-0 ms-2">
                  <span>Number:</span>
                  <br />+88012345678
                </p>
              </div>
              <div className="col d-flex align-items-center mb-2">
                <img src="/images/2.png" alt="email icon" />
                <p className="mb-0 ms-2">
                  <span>Email: </span>
                  <br />Mutiki@gmail.com
                </p>
              </div>
              <div className="col d-flex align-items-center mb-2">
                <img src="/images/3.png" alt="address icon" />
                <p className="mb-0 ms-2">
                  <span>Address:</span>
                  <br />12 North West New York 100
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navbar */}
      <nav className={`navbar navbar-expand-lg ${styles.navbar}`  }>
        <div className="container">
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
            aria-controls="main"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.path}>
                  <Link className="nav-link" to={link.path}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
