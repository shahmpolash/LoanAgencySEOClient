import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Form, Link, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import HeaderBottom from '../../components/HomePage/HeaderBottom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';


const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
    }


    return (
        <>
            <HeaderBottom></HeaderBottom>
            <div>
                <section id="services" class="services-area pt-120 pb-90 fix mb-5 vh-50" >
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 col-md-12">

                                <Form onSubmit={handleSubmit}>


                                    <CardElement
                                        options={{
                                            style: {
                                                base: {
                                                    fontSize: '16px',
                                                    color: '#424770',
                                                    '::placeholder': {
                                                        color: '#aab7c4',
                                                    },
                                                },
                                                invalid: {
                                                    color: '#9e2146',
                                                },
                                            },
                                        }}
                                    />
                                    <button type="submit" disabled={!stripe}>
                                        Pay
                                    </button>
                                </Form>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default CheckoutForm;