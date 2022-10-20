import React from 'react';
import './Doctor.css';
import appointmentImg from '../../../assets/images/appointment.png'
import doctor from '../../../assets/images/doctors.png'

const Doctor = () => {
    return (
        <div className='appointmentContainer '>
            <div className='row row-col-md-2 g-4 d-flex align-items-center '>

                <div className="col-md-6 ">
                    <h6 className='themeColor'>Appointment</h6>
                    <h4 className='text-light'>Make An Appointment Today</h4>
                    <p className='text-light'>
                        When you go for a dental check-up, your dentist should ask questions about your general health and medications. Many health conditions have an effect on your oral health and vice versa. Some medicines can affect your mouth or need to be taken into consideration before dental treatment.
                    </p>
                    <button className='careBtn'>Make An Appointment</button>
                </div>
                <div className='col-md-6'>
                    <img src={doctor} className='img-fluid doctor' alt="" />
                </div>
            </div>

        </div>
    );
};

export default Doctor;