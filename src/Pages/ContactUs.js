import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const ContactUs = () => {

  const navigate = useNavigate();
  const [footerAddress, setFooterAddress] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/footer-address`)
      .then((res) => res.json())
      .then((info) => setFooterAddress(info));
  }, [footerAddress]);





  const handleMessage = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const number = event.target.number.value;
    const subject = event.target.subject.value;
    const message = event.target.message.value;
    const messageStatus = event.target.messageStatus.value;


    const addItem = {
      name,
      email,
      number,
      subject,
      message,
      messageStatus,

    };

    const url = `http://localhost:5000/add-message`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addItem),
    })
      .then((res) => res.json())
      .then((result) => {
        
        alert('Message is Send');
      });
  };

  const [action, setAction] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/actions`)
      .then((res) => res.json())
      .then((info) => setAction(info));
  }, []);



  return (




<>

<div className="contact-section pt-100 pb-70" id='contact-sec'>
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-5">
        <div className="contact-img">
          <img src="assets/img/contact-img.png" alt="Images" />
        </div>
      </div>
      <div className="col-lg-7">
        <div className="contact-wrap">
          <div className="contact-form">
            <div className="section-title">
              <span className="sp-before sp-after">Contact</span>
              <h2>Contact With Us</h2>
            </div>
            <form onSubmit={handleMessage} id="contactForm">
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <div className="form-group">
                    <i className="bx bx-user" />
                    <input type="text" name="name" id="name" className="form-control" required data-error="Please enter your name" placeholder="Your Name*" />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="form-group">
                    <i className="bx bx-user" />
                    <input type="email" name="email" id="email" className="form-control" required data-error="Please enter your email" placeholder="E-mail*" />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="form-group">
                    <i className="bx bx-phone" />
                    <input type="text" name="number" id="phone_number" required data-error="Please enter your number" className="form-control" placeholder="Your Phone" />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="form-group">
                    <i className="bx bx-file" />
                    <input type="text" name="subject" id="msg_subject" className="form-control" required data-error="Please enter your subject" placeholder="Your Subject" />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-lg-6 mb-20">
                  <div className="default-form-single-item">
                  <input id="input_phone" type="tel" name="messageStatus"  value="UnRead" hidden placeholder="Your Subject" />
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <i className="bx bx-envelope" />
                    <textarea name="message" className="form-control" id="message" cols={30} rows={8} required data-error="Write your message" placeholder="Your Message" defaultValue={""} />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <button type="submit" className="default-btn border-radius">
                    Send Message
                    <i className="bx bx-plus" />
                  </button>
                  <div id="msgSubmit" className="h3 text-center hidden" />
                  <div className="clearfix" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



</>
  );
};

export default ContactUs;