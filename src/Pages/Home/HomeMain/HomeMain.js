import React from 'react';
import Service from '../../Service/Service';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import DentalCare from '../DentalCare/DentalCare';
import Doctor from '../Doctor/Doctor';
import Testimonial from '../Testimonial/Testimonial';

const HomeMain = () => {
    return (
        <div>
           <Banner></Banner>
           <Service></Service>
           <DentalCare></DentalCare>
           <Doctor></Doctor>
           <Testimonial></Testimonial>
           <Contact></Contact>
           
        </div>
    );
};

export default HomeMain;