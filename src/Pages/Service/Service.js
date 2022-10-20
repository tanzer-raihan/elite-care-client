import React from 'react';
import './service.css'
import img1 from '../../../src/assets/images/fluoride.png'
import img2 from '../../../src/assets/images/cavity.png'
import img3 from '../../../src/assets/images/whitening.png'

const Service = () => {
    return (
        <div className='py container'>
            <div className=' text-center'>
                <h5 className='fw-bold themeColor'>Our Services</h5>
                <h4 className='fw-bold'>Services We Provide</h4>
            </div>
            <div className='row col-col-md-3 g-4 py-5'>
                <div className='col-md-4'>
                    <div className='text-center serviceCard'>

                        <img src={img1} alt="" />
                        <div className='py-4'>
                            <h5 className=' fw-bold'>Fluroide Treatment</h5>
                            <p className='text-secondary'>The process involves painting a varnish containing high levels of fluoride onto the surface of the tooth twice a year to prevent decay. It works by strengthening tooth enamel, making it more resistant to decay.</p>
                        </div>

                    </div>

                </div>
                <div className='col-md-4'>
                    <div className='text-center serviceCard'>
                        <img src={img2} alt="" />
                        <div className='py-4'>
                            <h5 className='fw-bold'>Cavity Feeling</h5>
                            <p className='text-secondary'>A cavity filling is when the dentist fills the opening in your tooth with some kind of material. The hope is to urge obviate your symptoms and make the tooth more aesthetically pleasing.</p>
                        </div>
                    </div>

                </div>
                <div className='col-md-4'>
                    <div className='text-center serviceCard'>
                        <img src={img3} alt="" />
                        <div className='py-4'>
                            <h5 className='fw-bold'>Teeth Whitening</h5>
                            <p className='text-secondary'>Many times teeth are beautifully shaped, but are with dark color. Bleaching is the perfect solution to get a brighter and whiter smile. we recommend Teeth Whitening treatment before any Cosmetic dental treatment.</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Service;