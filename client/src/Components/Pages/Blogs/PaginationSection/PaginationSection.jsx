import React, { useState } from "react";
import styles from "./PaginationSection.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const PaginationSection = () => {
  // State to track the active page
  const [activePage, setActivePage] = useState(1);

  // Pages array for pagination
  const pages = [1, 2, 3];

  // Function to handle page click
  const handlePageClick = (page) => {
    setActivePage(page);
  };

  return (
    <section
      aria-label="Page navigation example"
      className={`my-4 ${styles.pagination}`}
    >
      <ul className={`pagination d-flex align-items-center justify-content-center ${styles.paginationList}`}>
        {/* Previous Button */}
        <li className={styles.pageItem}>
          <a
            className={`${styles.pageLink} rounded-circle d-flex align-items-center justify-content-center`}
            href="#"
            onClick={() => handlePageClick(activePage > 1 ? activePage - 1 : 1)}
          >
            «
          </a>
        </li>

        {/* Page Numbers */}
        {pages.map((page) => (
          <li
            key={page}
            className={`${styles.pageItem} ${activePage === page ? styles.active : ""} px-1`}
          >
            <a
              className={`${styles.pageLink} rounded-circle d-flex align-items-center justify-content-center ${activePage === page ? "text-white" : ""}`}
              href="#"
              onClick={() => handlePageClick(page)}
            >
              {page}
            </a>
          </li>
        ))}

        {/* Next Button */}
        <li className={styles.pageItem}>
          <a
            className={`${styles.pageLink} rounded-circle d-flex align-items-center justify-content-center`}
            href="#"
            onClick={() => handlePageClick(activePage < pages.length ? activePage + 1 : pages.length)}
          >
            »
          </a>
        </li>
      </ul>
    </section>
  );
};

export default PaginationSection;
