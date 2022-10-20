import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/Auth/useAuth';
import ProgressBar from '../Progress/ProgressBar';
import './register.css'
import { Stack } from '@mui/material/Stack';
import { Alert } from '@mui/material/Alert';
const Register = () => {
    const { registerWithEmail, isLoading, error,user } = useAuth();
    const navigate = useNavigate();
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const handleRegistration = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        registerWithEmail(email, password, name, event);


    }
    const goSignIn = () => {
        navigate("/signin");
    }
    return (
        <div className='register-container'>


            {!isLoading && <div>
                <div className='signInForm mx-auto mt-3'>

                    <div className=' mt-3'>
                        <div className=''>
                            <h5 className=' text-center fw-bold'>Register Your Account</h5>
                        </div>
                        <form onSubmit={handleRegistration} >
                            <div className='my-3'>
                                <small className='d-block fw-bold mb-1'>Enter your Name</small>
                                <input ref={nameRef} className='d-block emailField' type="name" required />
                            </div>
                            <div className='my-3'>
                                <small className='d-block fw-bold mb-1'>Enter your Email</small>
                                <input ref={emailRef} className='d-block emailField' type="email" required />
                            </div>
                            <div className='my-3'>
                                <small className='d-block fw-bold mb-1'>Enter your password</small>
                                <input ref={passwordRef} className='d-block passwordField' type="password" required />
                            </div>
                            <div className='my-3'   >
                                <button type='submit' className='signInBtn'>Continue</button>
                            </div>
                            <div>
                                <small className='notice'>By continuing, you agree to EliteCares's <span className='text-primary'>Conditions and Privacy-Policy Notice</span></small>
                            </div>

                        </form>

                        <div>
                            {error && <small>{error}</small>}
                            
                        </div>
                    </div>
                </div>
                <div className='text-center mt-3 text-secondary'>
                    <small className='d-block'>Already Have EliteCare Account?</small>
                </div>
                <div className='my-3 text-center'   >
                    <button onClick={goSignIn} className='create-account-btn'>Sign-In to EliteCare</button>
                </div>
            </div>
            }
            <div className='d-flex justify-content-center align-items-center'>
                <div>
                    {isLoading && <ProgressBar></ProgressBar>}

                </div>
            </div>

        </div>
    );
};

export default Register;