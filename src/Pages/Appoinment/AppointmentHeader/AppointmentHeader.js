import React from 'react';
import Calendar from '../Calendar/Calendar';
import image from '../../../assets/images/destists2.png'
import './AppointmentHeader.css'

const AppointmentHeader = ({ date, setDate }) => {


    return (
        <div className='appointmentBanner d-flex align-items-center'>
         
            <div className='container bannerContent'>
                <div className='row row-col-md-2 g-4 pt-5'>
                    <div className='col-md-4 '>
                        <div className='mt-5'>
                            <Calendar date={date} setDate={setDate}></Calendar>
                        </div>
                    </div>
                    <div className='col-md-8'>
                        <div className='ms-5'>
                            <img className='img-fluid' src={image} alt="" />
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default AppointmentHeader;