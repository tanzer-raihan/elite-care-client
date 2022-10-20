import React from 'react';
import BookingModal from '../BookingModal/BookingModal';
import './ServiceCard.css'

const ServiceCard = (props) => {
    const { name, time } = props.service;
    const{appointmentDay}=props;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
      
            <div className='col-md-4'>
                <div className='appointmentCard text-center'>
                    <h5 className='fw-bold themeColor'>{name}</h5>
                    <h6>{time}</h6>
                    <button onClick={handleOpen} className='careBtn mt-4'>Book Appointment</button>

                </div>
                <BookingModal
                    open={open}
                    setOpen={setOpen}
                    handleOpen={handleOpen}
                    handleClose={handleClose}
                    name={name}
                    time={time}
                    appointmentDay={appointmentDay}
                ></BookingModal>

            </div>
      
    );
};

export default ServiceCard;