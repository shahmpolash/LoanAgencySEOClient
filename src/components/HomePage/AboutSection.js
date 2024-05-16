import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AboutSection = () => {

  const [about, setAbout] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/about`)
      .then((res) => res.json())
      .then((info) => setAbout(info));
  }, []);





  return (

  

    <>
    {
      about.map(a=> <div className="about-area pt-100 pb-70" id="about-sec">
      <div className="container-fluid">
        <div className="container-max">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-img">
                <img src={a.aboutImgOne} alt="Images" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <span className="sp-after">About us</span>
                  <h2 className="h2-color">{a.aboutHeading}</h2>
                </div>
                <h3>
                {a.aboutText}
                </h3>
                <p>
                {a.aboutDetails}
                </p>
                <div className="about-btn">
                  <a href="#contact-sec" className="default-btn">
                    Contact Us
                    <i className="bx bx-plus" />
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-shape">
        <div className="shape-1">
          <img src="assets/img/about/about-shape1.png" alt="Images" />
        </div>
        <div className="shape-2">
          <img src="assets/img/shape/shape1.png" alt="Images" />
        </div>
        <div className="shape-3">
          <img src="assets/img/shape/shape2.png" alt="Images" />
        </div>
        <div className="shape-4">
          <img src="assets/img/shape/shape3.png" alt="Images" />
        </div>
        <div className="shape-5">
          <img src="assets/img/shape/shape4.png" alt="Images" />
        </div>
      </div>
    </div>)
    }









    
    </>
  );
};

export default AboutSection;
