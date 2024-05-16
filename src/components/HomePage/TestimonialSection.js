import React, { useEffect, useState } from "react";

const TestimonialSection = () => {
  const [testimonial, setTestimonial] = useState([]);

  const [testimonialtext, setTestimonialText] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/testimonialtext`)
      .then((res) => res.json())
      .then((info) => setTestimonialText(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/testimonials`)
      .then((res) => res.json())
      .then((info) => setTestimonial(info));
  }, []);


  const divStyle = {
    backgroundImage: "url(img/testimonial/test-bg-aliments.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundColor: "#fff7f5",
  };

  return (

    <>

      <div className="testimonial-display-section section-top-gap-150">
        <div className="box-wrapper">
          <div className="section-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 offset-xl-2">
                  {
                    testimonialtext.map(t => <div className="section-content section-content-gap-80 text-center">
                      <h6 className="section-tag tag-blue">{t.testimonialText}</h6>
                      <h3 className="section-title">{t.testimonialHeading}</h3>
                      <span className="icon-seperator"><img src="assets/images/icons/section-seperator-shape.png" alt /></span>
                    </div>)
                  }

                </div>
              </div>
            </div>
          </div>

          {
            testimonial.map(a => <div className="testimonial-wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    {/* Start Testimonial Slider - Content */}
                    <div className="testimonial-content-slider">
                      <div className="swiper-container">
                        <div className="swiper-wrapper">

                          <div className="testimonial-single-content-item swiper-slide">
                            <p>{a.desc}</p>
                            <ul className="review-star">
                              <li className="fill"><i className="icofont-star" /></li>
                              <li className="fill"><i className="icofont-star" /></li>
                              <li className="fill"><i className="icofont-star" /></li>
                              <li className="fill"><i className="icofont-star" /></li>
                              <li className="blank"><i className="icofont-star" /></li>
                            </ul>
                          </div>


                        </div>
                      </div>
                    </div>

                    {/* Start Testimonial Slider - Thumbnail */}
                    <div className="testimonial-thumb-slider">
                      <div className="swiper-container">
                        <div className="swiper-wrapper">

                          <div className="testimonilal-single-thumb-item swiper-slide">
                            <div className="image">
                              <img src={a.image} alt />
                            </div>
                            <div className="content">
                              <h5 className="name text-black">{a.personName}</h5>
                              <h6><span className="profession">{a.personTitle}</span></h6>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>)
          }

        </div>
        {/* ...::: End Testimonial Display Section :::... */}
      </div>




    </>



  );
};

export default TestimonialSection;
