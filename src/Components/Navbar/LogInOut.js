import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';


const auth = firebase.auth();

function LogInOut() {

    
    const [user] = useAuthState(auth);
    const [inOut] = (user ? {SignOut} : {SignIn})

    
    return(
        {inOut}
    );

}

export default LogInOut;