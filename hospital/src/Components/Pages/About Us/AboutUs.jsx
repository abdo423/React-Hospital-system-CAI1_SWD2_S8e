import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const aboutUsContent = [
    {
        title: "Our Mission",
        description: "To provide the best healthcare services to our community with compassion and excellence."
    },
    {
        title: "Our Vision",
        description: "To be the leading healthcare provider in the region, known for our innovative and patient-centered approach."
    },
    {
        title: "Our Values",
        description: "Integrity, Compassion, Excellence, Collaboration, and Innovation."
    }
];

const AboutUs = () => {
    return (
        <div className="container mt-5">
            <h1>About Us</h1>
            <div className="row">
                {aboutUsContent.map((item, index) => (
                    <div key={index} className="col-md-4">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutUs;