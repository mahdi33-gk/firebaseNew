import React, { createContext } from 'react';

const AuthProvider = ({children}) => {
    const AuthContext = createContext(null);
    const providerStaff = {
        name: 'ok jaan,tai hobe'
    }
    console.log(children)
    return (
        <AuthContext.Provider value={providerStaff}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;