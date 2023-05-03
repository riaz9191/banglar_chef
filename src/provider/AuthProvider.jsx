import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const registerUser = (name,email,password) =>{
        return createuser
    }

    const authInfo= {
        registerUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;