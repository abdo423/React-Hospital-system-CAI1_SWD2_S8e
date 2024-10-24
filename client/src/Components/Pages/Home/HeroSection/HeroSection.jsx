import { useState, useEffect } from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
    // Step 1: Define state to store the banner data
    const [bannerData, setBannerData] = useState({
        title: '',
        subTitle: '',
        bannerCover: ''
    });
    
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(null);

    // Step 2: Fetch data from API
    useEffect(() => {
        const fetchBannerData = async () => {
            try {
                const response = await fetch('/api/banners'); // Adjust API route as needed
                if (!response.ok) {
                    throw new Error('Failed to fetch banner data');
                }
                const data = await response.json();
                
                // Assuming you want the first banner in the array (or you can adjust based on API response)
                setBannerData(data[0]);  
                setIsLoading(false);
            } catch (error) {
                setIsError(error.message);
                setIsLoading(false);
            }
        };
        
        fetchBannerData();
    }, []); // Empty array ensures it runs once on component mount

    // Step 3: Handle loading and error states
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {isError}</div>;
    }

    // Step 4: Use the banner data in the JSX
    return (
        <section className={styles.hero}>
            <img src={bannerData.bannerCover} alt="Banner" className={styles.heroImg} />
            <div className={`container align-items-center justify-content-between d-flex ${styles.container}`}>
                <div className={`content col-sm-12 col-md-5 ${styles.content}`}>
                    <p className="fw-bold">Best Medical Clinic</p>
                    <h2 className="fs-1">
                        <span>{bannerData.title}</span> {bannerData.subTitle}
                    </h2>
                    <button className="btn btn-primary">Get Appointments &gt;&gt;</button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
