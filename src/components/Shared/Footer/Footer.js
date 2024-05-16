import React, { useEffect, useState } from "react";
import { Link, } from "react-router-dom";

const Footer = () => {



  const [footerSocial, setFooterSocial] = useState([]);
  const [footerCopyright, setFooterCopyright] = useState([]);

  const [logo, setLogo] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);




  const [footerAddress, setFooterAddress] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:5000/footer-address`)
      .then((res) => res.json())
      .then((info) => setFooterAddress(info));
  }, [footerAddress]);

  useEffect(() => {
    fetch(`http://localhost:5000/footer-social`)
      .then((res) => res.json())
      .then((info) => setFooterSocial(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/copyrights`)
      .then((res) => res.json())
      .then((info) => setFooterCopyright(info));
  }, [footerCopyright]);



  const handleSubscriber = (event) => {
    event.preventDefault();
    const subemail = event.target.subemail.value;




    const addItem = {
      subemail,



    };

    const url = `http://localhost:5000/add-subscriber`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addItem),
    })
      .then((res) => res.json())
      .then((result) => {
        
        alert('Subscribers Request is Sent');
      });


  }










  return (



    <>

    {
      footerSocial.map(f=> <footer className="footer-area footer-bg pt-100 pb-70">
      <div className="container">
        <div className="footer-top">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-6">
              {
                logo.map(l=> <div className="footer-img">
                <img src={l.logo} className="footer-img1" alt="Images" />
                <img src={l.logo} className="footer-img2" alt="Images" />
              </div>)
              }
              
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="footer-social-icon">
                <ul className="social-link">
                  <li>
                    <a href={f.fblink} target="_blank"><i className="bx bxl-facebook" /></a>
                  </li> 
                <li>
                    <a href={f.inslink} target="_blank"><i className="bx bxl-instagram" /></a>
                  </li> 
                 <li>
                    <a href={f.youlink} target="_blank"><i className="bx bxl-youtube" /></a>
                  </li> 
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-midal pt-45 pb-70">
          <div className="row">
            <div className="col-lg-4 col-sm-5">
              <div className="footer-widget">
                <h3>About Us</h3>
                <p>{f.aboutText}</p>
              </div>
            </div>
            
            <div className="col-lg-4 col-sm-5">
              <div className="footer-widget ps-5">
                <h3>Quick Link</h3>
                <ul className="footer-list">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="#about-sec">About</a>
                  </li>
                  <li>
                    <a href="#services-sec">Services</a>
                  </li>
                  <li>
                    <a href="#pricing-sec">Pricing</a>
                  </li>
                  <li>
                    <a href="#contact-sec">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-7">
              <div className="footer-widget">
                <h3>Newsletter</h3>
                <p>To get the latest news and latest up- dates from us</p>
                <div className="newsletter-area">
                  <form onSubmit={handleSubscriber} className="newsletter-form" data-toggle="validator" method="POST">
                    <input type="email" className="form-control" placeholder="Your Email*" name="subemail" required autoComplete="off" />
                    <button className="default-btn" type="submit">
                      Subscribe  
                    </button>
                    <div id="validator-newsletter" className="form-result" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-right-area">
          {
            footerCopyright.map(c=> <div className="copy-right-text text-center">
            <p>
              {c.copyrightText}
             
            </p>
          </div>)
          }
          
        </div>
      </div>
    </footer>)
    }



    
    </>
  );
};

export default Footer;
