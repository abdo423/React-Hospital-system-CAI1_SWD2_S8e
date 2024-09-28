import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./FeedsSection.module.css";

const FeedsCard = ({ news, index }) => {
    return (
        <div key={index} className="col-lg-4 col-md-6 col-sm-10 col-12 mb-4">
            <div className={`card border shadow ${styles.card}`}>
                <img className="card-img-top" src={news.imgSrc} alt={news.imgAlt} />
                <div className={`card-body ${styles.cardBody}`}>
                    <p className={`${styles.cardDate} mb-2`}>By Admin {news.date}</p>
                    <h5 className={`card-title ${styles.cardTitle}`}>{news.title}</h5>
                    <p className={`card-text ${styles.cardText}`}>{news.text}</p>
                    <hr />
                    <a href="#" className={styles.cardButton}>Read More »</a>
                </div>
            </div>
        </div>
    );
};

export default FeedsCard;