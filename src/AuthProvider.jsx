import React, { createContext, useEffect, useState } from 'react';
import auth from './firebase.init';
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const creatUser = (email,password) =>{
      return createUserWithEmailAndPassword(auth,email,password)  
    }
    const signInusr =(email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
    // onAuthStateChanged(auth,(currentUser)=>{
    //     if(currentUser){
    //         console.log(currentUser)
    //         setUser(currentUser)
    //     }
    //     else{
    //         console.log('there no one buddy!')
    //         setUser(null)
    //     }
    // })

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, (creatUser)=>{
            console.log(creatUser);
            setUser(creatUser)
        })
        return ()=>{
            unsubscribe()
        }

    },[])
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