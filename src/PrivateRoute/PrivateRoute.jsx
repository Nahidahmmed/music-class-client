import React from 'react'
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../Providers/AuthProvider';
import { Spinner } from '@nextui-org/react';

export default function PrivateRoute({children}) {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return  <div className='w-52 mx-auto my-auto'><Spinner className='w-52 ' color="default"/></div>;
    }
    if (user?.email) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>
};
