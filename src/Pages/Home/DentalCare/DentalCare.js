import React from 'react';
import './DentalCare.css'
import img1 from '../../../assets/images/treatment (1).jpg'

const DentalCare = () => {
    return (
        <div className='careContainer py'>
            <div className='container'>
                <div className='row row-col-md-2 d-flex align-items-center'>
                    <div className='col-md-6'>
                        <img className='img-fluid' src={img1} alt="" />


                    </div>
                    <div className='col-md-6'>
                        <h2 className='fw-bold themeColor'>Exceptional Dental Care, on Your Terms</h2>
                        <p >
                            Permanent teeth can last a lifetime with good care. The risk of tooth decay, gum disease and tooth loss can be reduced with good oral hygiene, a low-sugar and acid diet, use of a mouthguard when playing sport, and regular dental visits.. It is recommended that everyone, including young children, visit the dentist twice a year. Modern techniques mean that dental treatment can be carried out with no, or very little, discomfort.
                        </p>
                        <button className='careBtn'>Take Our Care</button>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default DentalCare;