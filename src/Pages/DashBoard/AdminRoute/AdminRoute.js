import React from 'react';
import useAuth from './../../../Hooks/Auth/useAuth';
import { useEffect } from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
    const { isAdmin } = useAuth();


    return isAdmin ? children : <Navigate to='/home'></Navigate>
};

export default AdminRoute;