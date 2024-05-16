import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";



const NavBar = () => {

  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }
  const [users, setUser] = useState([]);
  const [logo, setLogo] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);


  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((res) => res.json())
      .then((info) => setUser(info));
  }, []);




  return (



    <>

<div className="navbar-area">
  {/* Menu For Mobile Device */}
  <div className="mobile-nav">
  {
          logo.map(l=><a className="navbar-brand" href="/">
          <img src={l.logo} className="logo-one" alt="Logo" />
          <img src={l.logo} className="logo-two" alt="Logo" />
        </a> )
        }
  </div>
  {/* Menu For Desktop Device */}
  <div className="main-nav">
    <div className="container-fluid">
      <nav className="container-max-2 navbar navbar-expand-md navbar-light ">
        {
          logo.map(l=><a className="navbar-brand" href="/">
          <img src={l.logo} className="logo-one" alt="Logo" />
          <img src={l.logo} className="logo-two" alt="Logo" />
        </a> )
        }
        
        <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
           
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about-sec" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#services-sec" className="nav-link">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#pricing-sec" className="nav-link">
                Pricing Plan
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact-sec" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
          <div className="side-nav d-in-line align-items-center">
            
            <div className="side-item">
              <div className="nav-add-btn">
                <div className="d-flex list-unstyled ">
                    
                      {
                        user?.email ?
                          <li>
                            <Link to="/dashboard" className="nav-menu-btn text-decoration-none m-2">Dashboard</Link>
                          </li>
                          :
                          <li>
                            <Link to="/login" className="nav-menu-btn text-decoration-none m-2">Log in</Link>
                          </li>
                      }
                    

                    
                      {
                        users.map(u => u.userEmail === user?.email && u.userRole === 'Admin' &&
                          <li>
                            <Link to="/admin" className="nav-menu-btn text-decoration-none m-2">Admin</Link>
                          </li>
                        )
                      }
                    
                  </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
  <div className="side-nav-responsive">
    <div className="container">
      <div className="dot-menu">
        <div className="circle-inner">
          <div className="circle circle-one" />
          <div className="circle circle-two" />
          <div className="circle circle-three" />
        </div>
      </div>
      <div className="container">
        <div className="side-nav-inner">
          <div className="side-nav justify-content-center  align-items-center">
            <div className="side-item">
              <div className="search-box">
                <i className="flaticon-loupe" />
              </div>
            </div>
            <div className="side-item">
              <div className="user-btn">
                <a href="#">
                  <i className="flaticon-contact" />
                </a>
              </div>
            </div>
            <div className="side-item">
              <div className="nav-add-btn">
                <a href="#" className="nav-menu-btn border-radius">
                  Contact us 
                  <i className="bx bx-plus" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    
    </>
  );
};

export default NavBar;
