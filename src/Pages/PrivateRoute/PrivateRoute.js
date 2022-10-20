import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import useAuth from './../../Hooks/Auth/useAuth';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user } = useAuth();
    return user?.email ? children : <Navigate to="/signin" state={{ from: location }}></Navigate >
};

export default PrivateRoute;