import React, { useRef } from 'react';
import './MakeAdmin.css'
import image1 from '../../../../assets/images/login.png'
import useAuth from './../../../../Hooks/Auth/useAuth';
const MakeAdmin = () => {
    const {idToken}=useAuth();
    const emailRef=useRef();
    const handleAddAdmin=(event)=>{
        event.preventDefault();
        const email=emailRef.current.value;
        fetch('http://localhost:5000/users/admin',{
            method:'POST',
            headers:{
                'content-type':'application/json',
                'authorization': `Bearer ${idToken}`
            },
            body:JSON.stringify({email})
          
        })
            .then(res=>res.json())
            .then(data=>{
                if(data?.modifiedCount>0){
                    alert('Sucessfully add as an admin')
                }
            })
            .finally(()=>{
                event.target.reset();
            })

    }
    return (
        <div className='container text-center '>
            <div className='row row-col-md-2 g-3 d-flex align-items-center '>
                <div className='col-md-5'>
                    <div className='addAdminContainer'>
                        <h3 className='fw-bold py-3 themeColor' >Make An Admin</h3>
                        <div >
                            <form onSubmit={handleAddAdmin} >
                                <p><input className='addAdminField ' type="email" ref={emailRef} placeholder='Email..' required /></p>
                                <button type='submit' className='adminBtn'>Confirm</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <img className='img-fluid' src={image1} alt="" />
                </div>

            </div>
        </div>
    );
};

export default MakeAdmin;