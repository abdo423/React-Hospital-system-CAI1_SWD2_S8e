import React from 'react';
import styles from './AppointmentServiceSection.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

const AppointmentServiceSection = () => {
  return (
    <div className={styles.containerFluid}>
      <div className={styles.row}>
        {/* Service Section */}
        <div className={`${styles.col} ${styles.serviceSection}`}>
          <div className={styles.serviceContent}>
            <h3>24 Hours<br />Opening Our Services</h3>
            <ul>
              <li><span>Saturday</span><span>8:00 am - 10:00 pm</span></li>
              <li><span>Sunday</span><span>6:00 am - 8:00 pm</span></li>
              <li><span>Monday</span><span>6:00 am - 2:00 pm</span></li>
              <li><span>Tuesday</span><span>7:00 am - 9:00 pm</span></li>
              <li><span>Wednesday</span><span>10:00 am - 12:00 pm</span></li>
              <li><span>Thursday</span><span>2:00 am - 6:00 pm</span></li>
              <li><span>Friday</span><span>Closed</span></li>
            </ul>
          </div>
        </div>

        {/* Appointment Section */}
        <div className={`${styles.col} ${styles.appointmentSection}`}>
          <div className={styles.appointmentContent}>
            <h3>Make An<br />Appointment Now</h3>
            <form action="#" method="post">
              <div className={styles.formGroup}>
                <input type="text" className={styles.formControl} placeholder="Your Name" required />
              </div>
              <div className={styles.formGroup}>
                <select className={styles.formControl} required>
                  <option>Select Departments</option>
                  <option>Cardiology</option>
                  <option>Neurology</option>
                  <option>Oncology</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <input type="tel" className={styles.formControl} placeholder="Phone Number" required />
              </div>
              <div className={styles.formGroup}>
                <input type="date" className={styles.formControl} required />
              </div>
              <button type="submit" className={styles.btnPrimary}>
                Appointment Now
                <FontAwesomeIcon icon={faAngleDoubleRight} className={styles.icon} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentServiceSection;

