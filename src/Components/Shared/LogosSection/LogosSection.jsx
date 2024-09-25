import React from 'react';
import styles from "./LogosSection.module.css";

const LogosSection = () => {
    const logosImages = [
        {
            id: 1,
            imageSrc: '/images/1 (1).png'
        },
        {
            id: 2,
            imageSrc: '/images/2 (1).png'
        },
        {
            id: 3,
            imageSrc: '/images/3 (1).png'
        },
        {
            id: 4,
            imageSrc: '/images/4.png'
        },
        {
            id: 5,
            imageSrc: '/images/5.png'
        },
        {
            id: 6,
            imageSrc: '/images/6.png'
        },
    ];

    return (
        <section id={styles.logos}>
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-evenly">
                {logosImages.map((el) => (
                    <div key={el.id} className="p-2">
                        <img src={el.imageSrc} className="img-fluid" alt={`logo ${el.id}`} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LogosSection;
