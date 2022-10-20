import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/Auth/useAuth';
import * as React from 'react';
import './SignIn.css'
import ProgressBar from '../Progress/ProgressBar';
const SignIn = () => {
    const { googleSignIn, user, error, emailSignIn, isLoading } = useAuth();
    const emailRef = React.useRef();
    const passwordRef = React.useRef();
    const location = useLocation();
    const navigate = useNavigate()
    let redirectUrl = location?.state?.from?.pathname || '/';

    const goToRegister = () => {
        navigate('/register');
    }
    const signInWithGoogle = () => {
        googleSignIn(redirectUrl);

    }
    const handleEmailSignIn = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        emailSignIn(email, password, event, redirectUrl)


    }
    React.useEffect(() => {
        if(user?.email){
            navigate(redirectUrl || '/')
        }
    }, [user?.email])
    return (
        <div>
            {!isLoading && <div className='signInContainer ' >

                <div className='signInForm mx-auto mt-3'>

                    <div className=' mt-3'>
                        <div className=''>
                            <h5 className=' text-center fw-bold'>Sign-In To Your Account</h5>
                        </div>
                        <form onSubmit={handleEmailSignIn} >
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

                        </form>
                        <div className='my-3'   >
                            <button onClick={signInWithGoogle} className='signInBtn'>Continue With Google</button>
                        </div>
                        <div>
                            <small className='notice'>By continuing, you agree to EliteCares's <span className='text-primary'>Conditions and Privacy-Policy Notice</span></small>
                        </div>
                        <div>
                            {error && <small className='text-danger'>{error}</small>}
                        </div>
                    </div>
                </div>
                <div className='text-center mt-3 text-secondary'>
                    <small className='d-block'>New to EliteCare?</small>
                </div>
                <div className='my-3 text-center'   >
                    <button onClick={goToRegister} className='create-account-btn'>Create your EliteCare Account</button>
                </div>
            </div>
            }
            <div className='signInContainer d-flex justify-content-center align-items-center'>
                <div>
                    {isLoading && <ProgressBar></ProgressBar>}

                </div>
            </div>

        </div>
    );
};

export default SignIn;