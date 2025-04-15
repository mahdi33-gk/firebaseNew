import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import { Navigate } from 'react-router-dom';

const Private = ({children}) => {
    const {user,loading} = useContext(AuthContext);

    if(user){
        return children;
    }
    if(loading){
        return <span><span className="loading loading-bars loading-xl"></span></span>
    }
    return (
        <div>
            <Navigate to={'/login'}></Navigate>
        </div>
    );
};

export default Private;