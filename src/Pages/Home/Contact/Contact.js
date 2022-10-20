import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className='contactContainer py'>
            <div className="container">
                <div className='text-center pb-4'>
                    <h6 className='fw-bold themeColor'>Contact Us</h6>
                    <h4 className='fw-bold text-light'>Stay Connected With Us</h4>
                </div>
                <div className='d-flex justify-content-center'>
                    <form>
                        <p> <input type="email" className='inputField' required placeholder='Email' /></p>
                        <p> <input type="text" className='inputField' required placeholder='Subject' /></p>
                        <p><textarea name="message" placeholder='Write Your Message' id="" cols="30" rows="5" className='inputField'></textarea></p>
                        <button className='submitBtn'>Submit</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Contact;