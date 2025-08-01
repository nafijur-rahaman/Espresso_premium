import React from 'react';
import { AuthContext } from './AuthContext';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase/firebase.init';
import Login from '../Components/Login';
const AuthProvider = ({children}) => {

 const createUser = (email,pass)=>{

    return createUserWithEmailAndPassword(auth,email,pass);
    
 }

 const LoginUser = (email,pass)=>{
    return signInWithEmailAndPassword(auth,email,pass);

 }


 const contextData = {
    createUser,
    LoginUser
 }


    return (
       <AuthContext value={contextData} >
            {children}
       </AuthContext>
    );
};

export default AuthProvider;