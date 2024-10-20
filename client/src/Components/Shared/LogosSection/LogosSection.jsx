
import React from 'react';
import styles from './LogosSection.module.css';
import  'bootstrap/dist/css/bootstrap.min.css';
const logos = [
    { src: '/images/1 (1).png', alt: 'Logo 1' },
    { src: '/images/2 (1).png', alt: 'Logo 2' },
    { src: '/images/3 (1).png', alt: 'Logo 3' },
    { src: '/images/4.png', alt: 'Logo 4' },
    { src: '/images/5.png', alt: 'Logo 5' },
    { src: '/images/6.png', alt: 'Logo 6' },
];

const LogosSection = () => {
    return (
        <section className={styles.logos}>
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-evenly">
                {logos.map((logo, index) => (
                    <div className="p-2" key={index}>
                        <img src={logo.src} className="img-fluid" alt={logo.alt} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LogosSection;