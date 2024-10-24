import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./FeedsSection.module.css";
import FeedsCard from "./FeedsCard";

const newsFeedData = [
  {
    imgSrc: "/images/1 (1).jpg",
    imgAlt: "News Image 1",
    date: "March 24, 2021",
    title: "Globa Empoer Extenve Chanels Extensve Creat Method",
    text: "Complete actuarez centi centricing colora and sharin without anstaled anding bases aweme medicalplus Template.",
  },
  {
    imgSrc: "/images/2 (1).jpg",
    imgAlt: "News Image 2",
    date: "March 24, 2021",
    title: "Globa Empoer Extenve Chanels Extensve Creat Method",
    text: "Complete actuarez centi centricing colora and sharin without anstaled anding bases aweme medicalplus Template.",
  },
  {
    imgSrc: "/images/3.jpg",
    imgAlt: "News Image 3",
    date: "March 24, 2021",
    title: "Globa Empoer Extenve Chanels Extensve Creat Method",
    text: "Complete actuarez centi centricing colora and sharin without anstaled anding bases aweme medicalplus Template.",
  },
];

const FeedsSection = () => {
  return (
    <section className={styles.feeds}>
      <div className="container-md mx-auto">
        <div className="text-center mb-4">
          <h3 className={styles.title}>News Feed</h3>
          <h4 className={styles.subtitle}>Be The First To New Stories</h4>
        </div>
        <div className="row">
          {newsFeedData.map((news, index) => (
            <FeedsCard key={index} news={news} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedsSection;