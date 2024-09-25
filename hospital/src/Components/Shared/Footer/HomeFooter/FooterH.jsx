import React from 'react';
import FooterHCss from './FooterH.module.css';

const FooterH = () => {
    return (
        <footer className={FooterHCss.footer}>
            <div className="container pt-5 pb-5 text-center text-md-start text-black-50">
                <div className="row">
                    <div className="col-md-6 col-xl-3 pt-5">
                        <div className="Contact_info">
                            <h5 className="text-dark fw-bold">Contact info</h5>
                            <p>
                                Rapidiously seize wireless strategic theme areas and corporate
                                testing procedures. Uniquely
                            </p>
                            <ul className="list-unstyled lh-lg">
                                <li>
                                    <i className="icofont-home text-info"></i>
                                    suite 02 New Elephant Road usa
                                </li>
                                <li>
                                    <i className="icofont-phone text-info"></i>
                                    +880 142 258 123, 02-96936
                                </li>
                                <li className="text-dark">
                                    <i className="icofont-email text-info"></i>
                                    info@mukti.com
                                </li>
                                <li className="text-dark">
                                    <i className="icofont-web text-info"></i>
                                    info@mukti.com
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3 pt-5">
                        <div className="Our_doctors text-dark">
                            <h5 className="text-dark fw-bold">Our Doctors</h5>
                            <ul className="list-unstyled lh-lg">
                                <li><i className="icofont-double-right"></i> Dr. Nick Sims</li>
                                <li><i className="icofont-double-right"></i> Dr. Michael Linden</li>
                                <li><i className="icofont-double-right"></i> Dr. Max Turner</li>
                                <li><i className="icofont-double-right"></i> Dr. Amy Adams</li>
                                <li><i className="icofont-double-right"></i> Dr. Julia Jameson</li>
                                <li><i className="icofont-double-right"></i> Dr. Michael Linden</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3 pt-5">
                        <div className="Our_Services text-dark">
                            <h5 className="text-dark fw-bold">Our Services</h5>
                            <ul className="list-unstyled lh-lg">
                                <li><i className="icofont-double-right"></i> Outpatient Surgery</li>
                                <li><i className="icofont-double-right"></i> Cardiac Clinic</li>
                                <li><i className="icofont-double-right"></i> Ophthalmology Clinic</li>
                                <li><i className="icofont-double-right"></i> Gynaecological Clinic</li>
                                <li><i className="icofont-double-right"></i> Outpatient Rehabilitation</li>
                                <li><i className="icofont-double-right"></i> Ophthalmology Clinic</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3 pt-5">
                        <div className="Opening_Hours">
                            <h5 className="text-dark fw-bold">Opening Hours</h5>
                            <div id="content" className="d-flex">
                                <ul className="list-unstyled lh-lg">
                                    <li>Saturday</li>
                                    <li>Sunday</li>
                                    <li>Monday</li>
                                    <li>Tuesday</li>
                                    <li>Wednesday</li>
                                    <li>Thursday</li>
                                </ul>
                                <ul className="list-unstyled lh-lg">
                                    <li>8:00 am-10:00 pm</li>
                                    <li>6:00 am-8:00 pm</li>
                                    <li>6:00 am-2:00 pm</li>
                                    <li>7:00 am-9:00 pm</li>
                                    <li>10:00 am-12:00 pm</li>
                                    <li>2:00 pm-6:00 pm</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="copy-right pt-5 mt-5">
                        <p className="text-center">
                            Copyright @ 2021 <span className={FooterHCss.one}>Mukti</span> . Designed By
                            <span className={FooterHCss.two}>LabArtisan</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterH;
