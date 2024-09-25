import React from 'react';
import styles from "./PagesHeroSection.module.css"; // Assuming you have a CSS file for styling

const PagesHeroSection = ({title,subTitle}) => {
    return (
        <section
            id={styles.heroSection}
            className="position-relative w-100 overflow-hidden text-white text-center"
        >
            <img
                src="https://cdn.wallpapersafari.com/25/85/bREnu7.jpg"
                alt="hospital image"
                className="img-fluid w-100"
            />
            <div
                className="position-absolute w-100 text-center"
                style={{ top: '40%', transform: 'translateY(-50%)' }}
            >
                <h1 className="display-3 font-weight-bold mb-3">{title}</h1>
                <p className="text-dark">
                    <span className="font-weight-bold">Home</span> &ndash; {subTitle}
                </p>
            </div>
        </section>
    );
};

export default PagesHeroSection;