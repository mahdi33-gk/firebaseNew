import React, { createContext, useEffect, useState } from 'react';
import auth from './firebase.init';
import {createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
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
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }

    },[])
    const signOuTuser =()=>{
        return signOut(auth);
    }
    const signInWithGoogleHandler = () => {
        signInWithPopup(auth,provider);
    }
    const contextInfo ={
        creatUser,
        signInusr,
        user,
        signOuTuser,
        loading
    }
    return (
        <AuthContext.Provider value={contextInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;