import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const UpdateBannerSection = () => {

    const [banner, setBanner] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/banner/${id}`)
            .then((res) => res.json())
            .then((info) => setBanner(info));
    }, [banner]);


    const handleBannerSection = (event) => {
        event.preventDefault();
        const bannerHeading = event.target.bannerHeading.value;
        const bannerDetails = event.target.bannerDetails.value;
        const bannerText = event.target.bannerText.value;
        const imageOne = event.target.imageOne.value;
        const buttonText = event.target.buttonText.value;
        const buttonURL = event.target.buttonURL.value;

        const bannerSection = {
            bannerHeading,
            bannerDetails,
            bannerText,
            imageOne,
            buttonText,
            buttonURL,
          
        };

        const url = `http://localhost:5000/update-banner/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(bannerSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Banner is Updated');
            });
    };

    return (

        <>
            <HeaderBottom></HeaderBottom>
            <div>
                <section id="services" class="services-area pt-120 pb-90 fix mb-5 " >
                    <div class="container mb-5">
                        <div class="row">

                        </div>
                        <div class="row">

                            <div class="col-lg-8 col-md-12">
                                <h2 className='mb-5'> Update Banner</h2>



                                <form class="contact-form " onSubmit={handleBannerSection}>
                                    <div class="row">
                                        <div className="col-lg-12 col-md-12 pb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="bannerHeading" defaultValue={banner.bannerHeading} placeholder="Banner Heading One" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 pb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="bannerDetails" defaultValue={banner.bannerDetails} placeholder="Banner Details " required />
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-12 col-md-12 pb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="bannerText" defaultValue={banner.bannerText} placeholder="Banner Text" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 pb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="imageOne" defaultValue={banner.imageOne} placeholder="Image One" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 pb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="buttonText" defaultValue={banner.buttonText} placeholder="Button Text" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 pb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="buttonURL" defaultValue={banner.buttonURL} placeholder="Button URL" required />
                                            </div>
                                        </div>
                                        
                                       

                                        <div class="slider-btn">
                                            <button class="default-btn" data-animation="fadeInRight" data-delay=".8s">Update Banner</button>
                                        </div>
                                    </div>

                                </form>

                            </div>


                        </div>
                    </div>
                </section>
            </div>
        </>

    );
};

export default UpdateBannerSection;