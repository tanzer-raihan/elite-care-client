import React, { useState } from 'react';
import './AppointmentMain.css'
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import FixedAppointmentt from '../FixedAppointment/FixedAppointmentt';
import Contact from '../../Home/Contact/Contact'



const AppointmentMain = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppointmentHeader
                date={date}
                setDate={setDate}
            ></AppointmentHeader>
            <FixedAppointmentt date={date}></FixedAppointmentt>
            <Contact></Contact>
            
            

        </div>
    );
};

export default AppointmentMain;