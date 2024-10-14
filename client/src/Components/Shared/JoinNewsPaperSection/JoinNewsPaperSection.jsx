import React from 'react';
import styles from './JoinNewsPaperSection.module.css'; // Assuming you have a CSS file for styling

const JoinNewsPaperSection = () => {
    return (
        <section className={styles.JoinUs}>
            <div className="container">
                <div className="row py-5 justify-content-center align-items-center">
                    <div className="col-md-4 text-center">
                        <h2 className="mb-4">Join Our Newsletter</h2>
                    </div>
                    <div className="col-md-6 bg-white py-3">
                        <form className="d-flex justify-content-between">
                            <input
                                type="email"
                                className="form-control w-50 border-0"
                                placeholder="Enter Your Email"
                            />
                            <button type="submit" className="px-4 py-2 ml-3">
                                Subscribe Now
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JoinNewsPaperSection;
