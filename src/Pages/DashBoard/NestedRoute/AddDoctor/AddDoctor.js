import React from 'react';

import image1 from '../../../../assets/images/login.png'
const AddDoctor = () => {
    return (
        <div className='container text-center '>
            <div className='row row-col-md-2 g-3 d-flex align-items-center '>
                <div className='col-md-5'>
                    <div className='addAdminContainer'>
                        <h3 className='fw-bold py-3 themeColor' >Add A Doctor</h3>
                        <div >
                            <form >
                                <p><input className='addAdminField ' type="text" placeholder='Name..' required /></p>
                                <p><input className='addAdminField ' type="email" placeholder='Email..' required /></p>
                                <p><input className='addAdminField ' type="text" placeholder='Designation..' required /></p>
                                <p><input className='addAdminField ' type="link" placeholder='Image..' required /></p>
                                <button className='adminBtn'>Add Now</button>
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

export default AddDoctor;