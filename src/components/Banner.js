import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Banner.css';

const Banner = () => {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/banner`)
      .then((res) => res.json())
      .then((info) => setBanners(info));
  }, []);



  const handleSubscriber = (event) => {
    event.preventDefault();
    const subscriberEmail = event.target.subscriberEmail.value;

    const sunscribe = {
      subscriberEmail

    };

    const url = `http://localhost:5000/add-subscriber`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(sunscribe),
    })
      .then((res) => res.json())
      .then((result) => {

        alert('Thanks For Subscribe..');
      });
  };



  return (



    <>

    {
      banners.map(b=><div className="banner-area">
      <div className="container-fluid">
        <div className="container-max-2">
          <div className="col-lg-7">
            <div className="banner-content">
              <div className="title">
                <i className="flaticon-idea" />
                <span>{b.bannerText}</span>
              </div>
              <h1>{b.bannerHeading}</h1>
              <p>{b.bannerDetails}</p>
              <div className="banner-btn">
                <a href={b.buttonURL} className="get-btn">
                {b.buttonText}
                  <i className="bx bx-plus" />
                </a>
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-shape-right">
        <img src="assets/img/home1/home-one-shape.png" alt="Images" />
      </div>
      <div className="banner-img">
        <img src={b.imageOne} alt="Images" />
      </div>
      <div className="banner-shape">
        <div className="shape1">
          <img src="assets/img/home1/home-one-shape3.png" alt="Images" />
        </div>
        <div className="shape2">
          <img src="assets/img/home1/home-one-shape1.png" alt="Images" />
        </div>
        <div className="shape3">
          <img src="assets/img/home1/home-one-shape2.png" alt="Images" />
        </div>
        <div className="shape4">
          <img src="assets/img/home1/home-one-shape4.png" alt="Images" />
        </div>
        <div className="shape5">
          <img src="assets/img/home1/home-one-shape5.png" alt="Images" />
        </div>
      </div>
    </div> )
    }








    </>
  );
};

export default Banner;
