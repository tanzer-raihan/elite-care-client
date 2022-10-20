import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className="container py">
                <div className='row row-col-md-3 g-4'>
                    <div className="col-md-4">
                        <h5 className='fw-bold text-secondary'>Services</h5>
                        <h6>Emergency Check up</h6>
                        <h6>Monthly Check up</h6>
                        <h6>Weekly Check up</h6>
                        <h6>Deep Check up</h6>
                    </div>
                    <div className="col-md-4">
                        <h5 className='fw-bold text-secondary'>Oral Health</h5>
                        <h6>Fluoride Treatment</h6>
                        <h6>Cavity Filling</h6>
                        <h6>Teeth Whitening</h6>
                    </div>
                    <div className="col-md-4">
                        <h5 className='fw-bold text-secondary'>Address</h5>
                        <h6>Kotchandpur, Jhenaidah</h6>
                        <h6>Contact: +8801707553114</h6>
                        <h6>Email: tanzerraihan@gmail.com</h6>
                    </div>
                   

                </div>
            </div>
            <div className='text-center'>
                        <small className='fw-bold text-secondary'>Copyright: © Md Tanzer Raihan. All rights reserved.</small>
                    </div>

        </div>
    );
};

export default Footer;