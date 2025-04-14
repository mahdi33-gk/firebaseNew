import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';




const Home = () => {
    const authinfo =useContext(AuthContext);
    return (
        <div>
            <h2>this is home {authinfo.name}</h2>
        </div>
    );
};

export default Home;