import React from 'react';
import './SingleAppointmentCard.css'
import useAuth from './../../../Hooks/Auth/useAuth';
import ProgressBar from '../../Authentication/Progress/ProgressBar';

const SingleAppointmentCard = ({ singleAppointment }) => {
    const { service, date, appointmentTime, _id } = singleAppointment;
    const { user } = useAuth();
    const userEmail = user?.email;
    const handleCancelAppointment = (_id) => {
        const proceed = window.confirm('Are you sure to delete your appointment?')
        if (proceed) {
            fetch(`http://localhost:5000/appointment?email=${userEmail}`, {
                method: 'DELETE',
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify({ canceledAppointment: _id })
            })
                .then(res=>res.json())
                .then(data=>{
                    if(data?.deletedCount){
                        alert("Cancellation  Successful")
                    }
                  
                })
        }
    }

    return (
        <div className='col-md-6'>
            <div className='singleAppointmentCard text-center'>
                <h5 className='mb-3 fw-bold themeColor'>{service}</h5>
                <p> <small>{date}</small></p>
                <p><small>{appointmentTime}</small></p>
                <button onClick={() => handleCancelAppointment(_id)} className='careBtn'>Cancel Appointment</button>
            </div>

        </div>
    );
};

export default SingleAppointmentCard;