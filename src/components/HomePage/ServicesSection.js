import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ServicesSection = () => {


  const [items, setItems] = useState([]);
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/service-items`)
      .then((res) => res.json())
      .then((info) => setItems(info));
  }, []);


  useEffect(() => {
    fetch(`http://localhost:5000/service`)
      .then((res) => res.json())
      .then((info) => setService(info));
  }, []);


  return (

    <>

<div className="service-widget-area pt-50 pb-70" id="services-sec">
  <div className="container">
    {
      service.map(s=><div className="section-title text-center">
      <span className="sp-before sp-after">{s.serviceHeading}</span>
      <h2 className="h2-color">{s.servicesubHeading}</h2>
    </div> )
    }
    
    <div className="row pt-45">

    {
        items.map(i=> <div className="col-lg-4 col-md-6">
        <div className="service-card">
          <a href="/">
            <img src={i.serviceIcon} alt="Images" />
          </a>
          <h3><a href="/">{i.serviceTitle}</a></h3>
          <p>
          {i.serviceDetails}
          </p>
          <div className="service-card-shape">
            
          </div>
        </div>
      </div> )
      }
     
      
      
    
      
    </div>
  </div>
</div>

    </>


  );
};

export default ServicesSection;
