import React, { createContext } from 'react';
import auth from './firebase.init';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const creatUser = (email,password) =>{
      return createUserWithEmailAndPassword(auth,email,password)  
    }
    const signInusr =(email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
    const contextInfo ={
        creatUser,
        signInusr
    }
    return (
        <AuthContext.Provider value={contextInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;