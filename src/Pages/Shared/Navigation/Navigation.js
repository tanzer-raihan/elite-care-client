import React, { useEffect, useState } from 'react';
import './Navigation.css'
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/Auth/useAuth';

const Navigation = () => {
    const [change, setChange] = useState(false);
    const{user,logOut}=useAuth();
    const handleChange = () => {
        if (window.scrollY >= 80) {
            setChange(true);
        }
        else {
            setChange(false);
        }

    }
    const handleLogOut=()=>{
        logOut();
    }

    useEffect(() => {
        window.addEventListener('scroll', handleChange)
    }, [])
    return (
        <div className='position-relative'>
            <nav className={change ? 'navbar navbar-expand-lg fixed-top navScroll ' : 'navbar navbar-expand-lg fixed-top '}>
                <div className="container-fluid ">

                    <div>
                        <h4 className='fw-bold themeColor ms-2'><i className="fa-solid fa-user-doctor"></i> EliteCare</h4>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    <div className="collapse navbar-collapse navContainer " id="navbarTogglerDemo02">
                        <ul className="navbar-nav mb-lg-0 navUl position-absolute end-0">
                            <li className="nav-item">
                                <NavLink activeclassname='active' className="navLink" to='/home'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeclassname='active'  className="navLink" to='/appointment'>Appointment</NavLink>
                            </li>
                            {user?.email && <li className="nav-item">
                                <NavLink activeclassname='active'  className="navLink" to='/dashboard'>DashBoard</NavLink>
                            </li>}
                           
                            <li className="nav-item">
                                {!user?.email? <NavLink activeclassname='active'  className="navLink" to='/signin'>Sign-In</NavLink>: <button className='signOutBtn' onClick={handleLogOut}>Sign-Out</button>}
                            </li>
                        </ul>

                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Navigation;