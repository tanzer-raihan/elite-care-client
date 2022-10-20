import React, { useState, useEffect } from 'react';
import Calendar from './../../../Appoinment/Calendar/Calendar';
import SingleAppointmentCard from '../../SingleAppointmentCard/SingleAppointmentCard'

import useAuth from './../../../../Hooks/Auth/useAuth';





const MyAppointment = () => {
    const [date, setDate] = useState(new Date());
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();
    const [myAppointment, setMyAppointment] = useState();
   

    useEffect(() => {
        fetch(`http://localhost:5000/appointment?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyAppointment(data))
            .finally(() => {
                setLoading(false)
            })
    }, [myAppointment])

    return (
        <div className=''>
            <div className='row row-col-md-2 g-3'>
                <div className='col-md-6'>
                    <div>
                        <Calendar date={date} setDate={setDate}></Calendar>
                    </div>

                </div>
                <div className='col-md-6'>
                    <div className='myAppointmentCard'>
                        <h5 className='fw-bold themeColor text-center pb-3'>My Appointment</h5>
                        {!loading && <div className='row row-col-1 g-3'>
                            {myAppointment?.length > 0 ?
                                myAppointment?.map(singleAppointment => <SingleAppointmentCard
                                    key={singleAppointment._id}
                                    singleAppointment={singleAppointment}
                                ></SingleAppointmentCard>)
                                : <h6 className='fw-bold text-center text-secondary'>You have no booked appointment</h6>}


                        </div>
                        }
                        {loading && <div className='text-center fw-bold'>
                            <h5 className='themeColor'>Loading....</h5>
                        </div>}

                    </div>

                </div>

            </div>

        </div>
    );
};

export default MyAppointment;