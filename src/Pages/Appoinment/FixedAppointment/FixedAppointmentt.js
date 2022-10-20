import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import './FixedAppointment.css'

const FixedAppointmentt = ({ date }) => {
    const appointmentDay = new Date(date)?.toDateString();
    

    const [services, setServices] = useState();
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='fixedAppointmentContainer py'>
            <div className="container">
                <div className='text-center'>
                    <h5 className='fw-bold themeColor'>Available Service On {appointmentDay}</h5>
                    <h6 className='fw-bold text-secondary'>Please Select A Service</h6>

                </div>

                <div className='row row-col-md-3 g-4 pt-5'>
                    {
                        services?.map(service => <ServiceCard
                            key={service.name}
                            service={service}
                            appointmentDay={appointmentDay}
                           

                        ></ServiceCard>)
                    }

                </div>
            </div>
        </div>
    );
};

export default FixedAppointmentt;