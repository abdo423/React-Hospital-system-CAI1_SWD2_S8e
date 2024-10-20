import React, { useState } from 'react';
import FormCSS from './Form.module.css';
const Form = () => {
    // State to hold form data
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission, e.g., send the data to an API
        console.log('Form data submitted:', formData);
    };

    return (
        <section className={` ${FormCSS.ContactUs} pt-5 pb-5 mp-5`} >
            <div className="container pt-5 pb-5 ">
                <div className="row ">
                    <div className="col-md-12 col-lg-6">
                        <h3 className="pb-3">Contact Information</h3>
                        <div className={FormCSS.infoCard}>
                            <h5>Office Address:</h5>
                            <p className="text-black-50">
                                Suite 02, Level 12, Sahera Tropical Center 218 <br /> New Elephant Road, Dhaka - 1205
                            </p>
                        </div>
                        <div className={FormCSS.infoCard}>
                            <h5>Phone Number:</h5>
                            <p className="text-black-50">
                                +8801678170593, 01919-264687, <br /> 02-9611936
                            </p>
                        </div>
                        <div className={FormCSS.infoCard}>
                            <h5>Email Address:</h5>
                            <p className="text-black-50">support@LabArtisan</p>
                        </div>
                        <div className={FormCSS.infoCard}>
                            <h5>Website Address:</h5>
                            <p className="text-black-50">http://LabArtisan</p>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <h3 className="mb-5">We Love To Hear From You</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group mb-4">
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group mb-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group mb-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group mb-4">
                                <textarea
                                    className="form-control"
                                    name="message"
                                    rows="4"
                                    placeholder="Write a message...."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block rounded-0">
                                Send Message »
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Form;
