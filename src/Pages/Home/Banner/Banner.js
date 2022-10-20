import React from 'react';
import './Banner.css'
import banner from '../../../assets/images/bg.png'
import imgSmile from '../../../assets/images/doctorsImg.png'

const Banner = () => {
    return (
        <div className='banner'>
            <div className="container">
                <div className='row row-col-md-2 g-3 d-flex justify-content-center align-items-center bannertext'>

                    <div className="col-md-6">
                        <h2 className='fw-bold'>Your New Smile Starts Here</h2>
                        <h6 className='fw-bold text-secondary'>Welcome to Your Doctor portal. 24/7 at your service. Contact us when you are in need. We are always there for you.</h6>
                        <button className='startedBtn mt-3'>Get Started</button>
                    </div>
                    <div className='col-md-6'>
                        <img className='img-fluid' src={imgSmile} alt="" />
                    </div>

                </div>

            </div>
            <div className='row row-col-md-3 g-3 bannerCard'>
                <div className="col-md-4">
                    <div className='bannerInfo info1'>
                        <div className='me-4'>
                            <p><i className="fa-regular fa-clock"></i></p>
                        </div>
                        <div>
                            <h5>Opening Hours</h5>
                            <h6>We have been determined to be 24/7 at your service.</h6>

                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className=' bannerInfo info2'>
                        <div className='me-4'>
                            <p><i className="fa-solid fa-phone"></i></p>
                        </div>
                        <div>
                            <h5> Call Us For AppointMent</h5>
                            <h6>Call Us: +8801707553114</h6>

                        </div>
                    </div>

                </div>
                <div className='col-md-4 '>
                    <div className="bannerInfo info3">
                        <div className='me-4'>
                            <p><i className="fa-solid fa-location-dot"></i></p>
                        </div>
                        <div>
                            <h5>Visit Us, Location</h5>
                            <h6>Kotchandpur, Jhenaidah</h6>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;