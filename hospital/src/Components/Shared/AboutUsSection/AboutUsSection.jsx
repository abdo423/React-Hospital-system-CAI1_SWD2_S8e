import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./AboutUsSection.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';  

const AboutUsSection = () => {
    const aboutUsCards = [
        {
            id: 1,
            imageSrc: '/images/01 (2).png',
            title: 'Medical Treatment',
            text: 'Lorem ipsum dolor sit amete consectetur adipisicing elite.vlote optio animi?',
            link: '#'
        },
        {
            id: 2,
            imageSrc: '/images/02.png',
            title: 'Emergency Help',
            text: 'Lorem ipsum dolor sit amete consectetur adipisicing elite.vlote optio animi?',
            link: '#'
        },
        {
            id: 3,
            imageSrc: '/images/03 (2).png',
            title: 'Medical Professionals',
            text: 'Lorem ipsum dolor sit amete consectetur adipisicing elite.vlote optio animi?',
            link: '#'
        },
        {
            id: 4,
            imageSrc: '/images/04 (2).png',
            title: 'Qualified Doctors',
            text: 'Lorem ipsum dolor sit amete consectetur adipisicing elite.vlote optio animi?',
            link: '#'
        }
    ];

    return (
        <>
            <section className={style.aboutUsSection}>
                <div className={style.titleOfSection}> 
                    <p className="text-center pb-3 pt-5 fs-2">We Offer Specialized</p>
                    <h2 className="text-center pb-4 fw-bold">Orthopedics To Meet Your Needs</h2>
                </div>
                <div className={style.theContentOfSection}> 
                    <div className="container">
                        <div className="row">
                            {
                                aboutUsCards.map((el) => (
                                    <div className="col-lg-3 col-md-6 col-sm-12" key={el.id}>
                                        <div className={`card border-0 ${style.card}`}>
                                            <img src={el.imageSrc} alt={`photo ${el.id} place holder`} />
                                            <div className="card-body">
                                                <h5 className="card-title">{el.title}</h5>
                                                <p className="card-text">{el.text}</p>
                                                <a href={el.link} className="text-decoration-none fw-bold">
                                                    Read More
                                                    <FontAwesomeIcon icon={faAngleRight} /> 
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUsSection;