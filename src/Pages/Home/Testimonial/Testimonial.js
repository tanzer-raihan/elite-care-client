import React from 'react';
import './Testimonial.css'
import img1 from '../../../assets/images/people1.png'
import img2 from '../../../assets/images/people2.png'
import img3 from '../../../assets/images/people3.png'


const Testimonial = () => {
    return (
        <div className='testimonialContainer py'>
            <div className='container'>
                <div className='pb-5'>
                    <h6 className='themeColor fw-bold'>Testimonial</h6>
                    <h4 className='fw-bold'>What Our Clients Say</h4>
                </div>
                <div className='row row-col-md-3 g-3'>
                    <div className="col-md-4">
                        <div className='clientCard'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio vero odio voluptatem fuga minima fugit repudiandae doloremque dolorem commodi.</p>
                            <div className='d-flex align-items-center'>
                                <div className='client'>
                                    <img className='img-fluid' src={img1} alt="" />

                                </div>
                                <div className='ms-3'>
                                    <h6 className='fw-bold themeColor'>Henry Ward</h6>
                                    <small className='fw-bold text-secondary'>California</small>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4 ">
                        <div className='clientCard'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad inventore rerum error magni impedit corrupti exercitationem hic ducimus provident temporibus!</p>
                            <div className='d-flex align-items-center'>
                                <div className='client'>
                                    <img className='img-fluid' src={img2} alt="" />

                                </div>
                                <div className='ms-3'>
                                    <h6 className='themeColor fw-bold'>Lilly Rainhart</h6>
                                    <small className='text-secondary fw-bold'>Texas</small>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="clientCard">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium exercitationem nemo molestiae libero quae aspernatur quasi iure magni enim laudantium.</p>
                            <div className='d-flex align-items-center'>
                                <div className='client'>
                                    <img className='img-fluid' src={img3} alt="" />

                                </div>
                                <div className='ms-3'>
                                    <h6 className='fw-bold themeColor'>Jhuang Miyong</h6>
                                    <small className='fw-bold text-secondary'>Idaho</small>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Testimonial;