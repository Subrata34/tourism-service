import React, { useState,useEffect } from "react"
import initializetion from "./firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged  } from "firebase/auth";


initializetion()
const useFirebase=()=>{
const [user,setUser]=useState({});
const [error,setError]=useState('')
const auth=getAuth()
const googleProvider= new GoogleAuthProvider();
const signInUsingGoogle=()=>{
    signInWithPopup(auth,googleProvider)
    .then(result=>{
        console.log(result.user)
        setUser(result.user)
    })
    .catch(error=>{
        setError(error.message);
    })
}
return{
    user,
    error,
    signInUsingGoogle
}
}