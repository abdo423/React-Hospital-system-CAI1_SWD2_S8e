import React from "react";
import styles from "./BlogDetails.module.css"; // Import CSS module

function BlogDetails() {
  return (
    <>
      <section id="blogs-section" className={styles.blogSection}>
        <div className={`container mx-auto row gap-3 align-items-center justify-content-center ${styles.blogs}`}>
          <div className="blog-card col-lg-7">
            <div className={`card ${styles.card}`}>
              <div className={styles.imageContainer}>
                <img
                  src="/images/03.jpg"
                  alt="Blog image"
                  className="img-fluid card-img-top"
                />
              </div>
              <div className={`p-2 ${styles.blogContent}`}>
                <p className="text-primary">By Admin March 24, 2021</p>
                <h4>
                  <strong>
                    A wonderful serenity has taken possession of my entire soul
                    like these sweet mornings of spring which I enjoy.
                  </strong>
                </h4>
                <p className="text-secondary">
                  A wonderful serenity has taken possession of my entire soul
                  like these sweet mornings of spring which I enjoy with my
                  whole heart. I am alone and feel the charm of existence in
                  this spot which was created for the bliss of souls like mine.
                  I am so happy, my dear friend, so absorbed in the exquisite
                  sense of tranquil existence, that I neglect my talents. I
                  should be incapable of drawing a single stroke. A wonderful
                  serenity has taken possession of my entire soul like these
                  sweet mornings of spring which I enjoy with my whole heart. I
                  am alone and feel the charm of existence in this spot which
                  was created for the bliss of souls like mine. I am so happy,
                  my dear friend, so absorbed in the exquisite sense of tranquil
                  existence that I neglect my talents. I should be incapable of
                  drawing a single stroke.
                </p>
                <p className="text-secondary">
                  A wonderful serenity has taken possession of my entire soul
                  like these sweet mornings of spring which I enjoy with my
                  whole heart. I am alone and feel the charm of existence in
                  this spot which was created for the bliss of souls like mine.
                  I am so happy, my dear friend, so absorbed in the exquisite
                  sense of tranquil existence, that I neglect my talents. I
                  should be incapable of drawing a single stroke. A wonderful
                  serenity has taken possession of my entire soul like these
                  sweet mornings of spring which I enjoy with my whole heart. I
                  am alone and feel the charm of existence in this spot which
                  was created for the bliss of souls like mine. I am so happy,
                  my dear friend, so absorbed in the exquisite sense of tranquil
                  existence that I neglect my talents. I should be incapable of
                  drawing a single stroke.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogDetails;
