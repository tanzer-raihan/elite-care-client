import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import './BookingModal.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ handleClose, open, name, time, appointmentDay }) => {
    const nameRef=React.useRef();
    const emailRef=React.useRef();
    const contactRef=React.useRef();
    const handleBooking = (event) => {
        event.preventDefault();
        const service=name;
        const client=nameRef.current.value;
        const email=emailRef.current.value;
        const contact=contactRef.current.value;
        const appointmentTime=time;
        const date=appointmentDay;
        const appointmentInfo={service,client,email,contact,appointmentTime,date};
    
        fetch('http://localhost:5000/appointment',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(appointmentInfo)
        })
        .then(res=>res.json())
        .then(data=>{
           if(data?.insertedId){
            alert('Booking successfull');
           }
           
        })
        .finally(()=>{
            event.target.reset();
            handleClose();
        })


    }
    return (
        <div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div>
                        <h6 className='fw-bold pb-3 themeColor'>{name}</h6>
                        <form onSubmit={handleBooking}>
                            <div>
                                <p>
                                    <input type="text" className="appointmentField disabledField" value={appointmentDay} disabled />
                                </p>
                                <p>
                                    <input type="text" className="appointmentField disabledField" value={time} disabled />
                                </p>
                                <p>
                                    <input type="text" className="appointmentField" placeholder='Full Name' required ref={nameRef}/>
                                </p>
                                <p>
                                    <input type="text" className="appointmentField" placeholder='Contact Number' required ref={contactRef}/>
                                </p>
                                <p>
                                    <input type="email" className="appointmentField" placeholder='Email' required ref={emailRef}/>
                                </p>

                            </div>
                            <div>
                                <button type='submit' className='submitBtn'>Book Appointment </button>
                                <button onClick={handleClose} className='submitBtn mt-2'>Cancel Appointment</button>
                            </div>
                        </form>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default BookingModal;