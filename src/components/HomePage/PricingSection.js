import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './PricingSection.css';


const PricingSection = () => {

  const [pricing, setPricing] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:5000/pricings`)
      .then((res) => res.json())
      .then((info) => setPricing(info));
  }, []);

  return (


    
    <>
  <div className="pricing-area ptb-100" id='pricing-sec'>
  <div className="container-fluid">
    <div className="section-title text-center">
      <span className="sp-after">Pricing Plan</span>
      <h2 className="h2-color">Price &amp; Plans <b>Packages</b></h2>
    </div>
    <div className="price-width">
      <div className="row">

      {
              pricing.map(b => b.packageName === 'Basic' && <div className="col-lg-4 col-sm-6">
              <div className="pricing-card">
                <div className="pricing-card-into color-bg1">
                  <i className="flaticon-banner pricing-icon color-1" />
                  <h3 className="color-1">{b.packageName} Plan</h3>
                  <div className="price-rate">
                    <h2 className="color-1">$ {b.packagePrice}</h2>
                    
                  </div>
                  <ul>
                    <li><i className="bx bx-check" /> {b.packagePointOne}</li>
                    <li><i className="bx bx-check" /> {b.packagePointTwo}</li>
                    <li><i className="bx bx-check" /> {b.packagePointThree}</li>
                    <li><i className="bx bx-check" />{b.packagePointFour}</li>
                    <li><i className="bx bx-check" /> {b.packagePointFive}</li>
                    <li><i className="bx bx-check" /> {b.packagePointSix}</li>
                    
                  </ul>

                  <Link to={`/order-now/${b._id}`} className="purchase-btn button-bg1">
                      {b.packageButtonText} <i className="far fa-long-arrow-right" />
                    </Link>
                </div>
              </div>
            </div>)}


            {
              pricing.map(s => s.packageName === 'Premium' && <div className="col-lg-4 col-sm-6">
              <div className="pricing-card">
                <div className="pricing-card-into color-bg2">
                  <i className="flaticon-mortgage-loan pricing-icon color-2" />
                  <h3 className="color-2">{s.packageName} Plan</h3>
                  <div className="price-rate">
                    <h2 className="color-2">$ {s.packagePrice}</h2>
                    
                  </div>
                  <ul>
                    <li><i className="bx bx-check" />  {s.packagePointOne}</li>
                    <li><i className="bx bx-check" /> {s.packagePointTwo}</li>
                    <li><i className="bx bx-check" /> {s.packagePointThree}</li>
                    <li><i className="bx bx-check" /> {s.packagePointFour}</li>
                    <li><i className="bx bx-check" />  {s.packagePointFive}</li>
                    <li><i className="bx bx-check" /> {s.packagePointSix}</li>
                    <li><i className="bx bx-check" /> {s.packagePointSeven}</li>
                    
                  </ul>
                  <Link to={`/order-now/${s._id}`} className="purchase-btn button-bg1">
                      {s.packageButtonText} <i className="far fa-long-arrow-right" />
                    </Link>
                </div>
              </div>
            </div>  )}

            {
              pricing.map(p => p.packageName === 'Standard' &&   <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
              <div className="pricing-card">
                <div className="pricing-card-into color-bg3">
                  <i className="flaticon-processing pricing-icon color-3" />
                  <h3 className="color-3">{p.packageName} Plan</h3>
                  <div className="price-rate">
                    <h2 className="color-3">$ {p.packagePrice}</h2>
                   
                  </div>
                  <ul>
                    <li><i className="bx bx-check" />{p.packagePointOne}</li>
                    <li><i className="bx bx-check" /> {p.packagePointTwo}</li>
                    <li><i className="bx bx-check" /> {p.packagePointThree}</li>
                    <li><i className="bx bx-check" /> {p.packagePointFour}</li>
                    <li><i className="bx bx-check" />{p.packagePointFive}</li>
                    <li><i className="bx bx-check" />{p.packagePointSix}</li>
                  </ul>
                  <Link to={`/order-now/${p._id}`} className="purchase-btn button-bg1">
                      {p.packageButtonText} <i className="far fa-long-arrow-right" />
                    </Link>
                </div>
              </div>
            </div>)}
        
        
       
      </div>
    </div>
  </div>
  <div className="pricing-shape">
    <div className="shape1">
      <img src="assets/img/shape/shape7.png" alt="Images" />
    </div>
    <div className="shape2">
      <img src="assets/img/shape/shape4.png" alt="Images" />
    </div>
    <div className="shape3">
      <img src="assets/img/shape/shape5.png" alt="Images" />
    </div>
    <div className="shape4">
      <img src="assets/img/shape/shape6.png" alt="Images" />
    </div>
    <div className="shape5">
      <img src="assets/img/shape/shape4.png" alt="Images" />
    </div>
    <div className="shape6">
      <img src="assets/img/shape/shape8.png" alt="Images" />
    </div>
  </div>
</div>

    
    </>
  );
};

export default PricingSection;