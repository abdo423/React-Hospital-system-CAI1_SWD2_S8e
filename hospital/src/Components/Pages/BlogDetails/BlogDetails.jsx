import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';

function BlogDetails()
{
    return(
      <>
        <section id="blogs-section">
          <div className="blogs container mx-auto row gap-3 align-items-center justify-content-center ">
            
            <div className="blog-card col-lg-7">
              <div className="card">
                <div className="image-container">
                <img src="/images/03.jpg" alt="Blog image" className="img-fluid card-img-top" />
                </div>
                <div className="blog-content p-2">
                  <p className="text-primary">By Admin March 24, 2021</p>
                  <h4>
                  <strong>
                    A wonderf serenity has taken posesion of my entire souin like these sweet mornins sprin which enjoy
                  </strong>  
                  </h4>
                  <p className="text-secondary">
                    A wonderf serenity has taken poesion of my entire souin like these sweet mornins sprin which enjoy with my whole hear I am alone and feel the charm of existen spot which was creatie For the bliss of souls like mineingi am so happy my dear friend, so absoribed in the exquisite sense tranquil
    
    existence, that I neglect my talentsri I should bye incapable of drawin and sinle stroke A wonderful serenity has taken possession of my entire souing like these sweet mornins sprng enjoy with my whole heart. I am alone, and feel the charm of existthis spot which was creatied the bliss of souls like mineingi am so happy my dear friend, so absoribed in the exquisite sense tranquil existnce, that I neglect my talentsri I should bye incapable of drawin and single stroke enjoy with my whole heart. I am alone, and feel the charm of existencethis spot which was For the bliss of souls like mineingi am so happy my dear friend, so absoribed in the exquisite sense tranquil existence, that I neglect my talentsri I should bye incapable of drawing and single the present moment, and yet if feel that I never
    
    was a greater artst
    
    A wonderf serenity has taken poesion of my entire souin like these sweet mornins sprin which enjoy with my whole hear I am alone and feel the charm of existen spot which was creatie For the bliss of souls like mineingi am so happy my dear friend, so absoribed in the exquisite sense tranquil existence, that I neglect my talentsri I should bye incapable of drawin and sinle stroke A wonderful serenity has taken possession of my entire souing like these sweet mornins sprng enjoy with my whole heart. I am alone, and feel the charm of existthis spot which was creatied the bliss of souls like mineingi am so happy my dear friend, so absoribed in the exquisite sense tranquil existnce, that I neglect my talentsri I should bye incapable of drawin and single stroke enjoy with my whole heart. I am alone, and feel the charm of existencethis spot which was For present moment, and yet if feel that I never was a greater artst.
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
