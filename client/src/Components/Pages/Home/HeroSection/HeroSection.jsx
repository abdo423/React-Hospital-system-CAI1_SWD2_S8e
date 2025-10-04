
import styles from './HeroSection.module.css';
import React from 'react';
const HeroSection = () => {
    return (
        <section  className={styles.hero}>
            <img src="/images/1.jpg" alt="" className={styles.heroImg} />
            <div className={`container align-items-center justify-content-between d-flex ${styles.container}`}>
                <div className={`content col-sm-12 col-md-5 ${styles.content}`}>
                    <p className="fw-bold">Best Medical Clinic</p>
                    <h2 className="fs-1">
                        <span>Bringing Health</span> To Life For The Whole Family...
                    </h2>
                    <button className="btn btn-primary">Get Appointments &gt;&gt; </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;