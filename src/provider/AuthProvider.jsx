/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import app from '../firebas/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});

    const registerUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
          setUser(loggedInUser);
        });
        return () => {
          unSubscribe();
        };
      }, []);

    const authInfo= {
        user,
        registerUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;