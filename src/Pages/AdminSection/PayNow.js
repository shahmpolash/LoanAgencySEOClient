import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams, BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import auth from '../../firebase.init';
import HeaderBottom from '../../components/HomePage/HeaderBottom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_live_51PGTTpEZsgwFu3XiC0dbKFvj7UY0i8xKYN5WWqcTLW6WiKQhAjKyADhtkQaFZtXbVK6bNyA9V4nrLNQgGYcOfBkc00DybBxWLH');

const PayNow = () => {
  const { id } = useParams();
  const [order, setOrder] = useState([]);
  const [user] = useAuthState(auth);
  const currentDomain = window.location.origin;

  useEffect(() => {
    fetch(`http://localhost:5000/order/${id}`)
      .then((res) => res.json())
      .then((info) => setOrder(info));
  }, [id]);


  return (
    <BrowserRouter> {/* Wrap your component with BrowserRouter */}
      <>
        <HeaderBottom />
        <div>
          <section id="services" className="services-area pt-120 pb-90 fix mb-5 vh-50">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-12">
                  <Elements stripe={stripePromise}>
                    <CheckoutForm />
                  </Elements>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    </BrowserRouter>
  );
};

export default PayNow;
