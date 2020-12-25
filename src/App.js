import './App.css';
import React, {useState} from 'react';
import Navbar from './Components/Navbar/Navbar.js';
import Dashboard from './Components/Dashboard/Dashboard';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';


var firebaseConfig = {
  apiKey: "AIzaSyDL5Aq0SEVdOZ8r5KlYz7lw8zFh6YLtJGM",
  authDomain: "playlist-de583.firebaseapp.com",
  databaseURL: "https://playlist-de583.firebaseio.com",
  projectId: "playlist-de583",
  storageBucket: "playlist-de583.appspot.com",
  messagingSenderId: "445367789807",
  appId: "1:445367789807:web:bfeadbf9b22905586e931a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

const SignIn =  () => {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
    </>
  )

}

const SignOut = () => {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}


function App() {

  const [user] = useAuthState(auth);
  const [playlistMenu, setPlaylistMenu] = useState("show")
  const [radioMenu, setRadioMenu] = useState("show")
  const [myPick, setPick] = useState()

  return (
      <div>
        <Navbar user={user} setPick={setPick} setPlaylistMenu={setPlaylistMenu} setRadioMenu={setRadioMenu} inOut={user ? <SignOut/> : <SignIn/>} />
        {user ? <Dashboard myPick={myPick} setPick={setPick} playlistMenu={playlistMenu} setPlaylistMenu={setPlaylistMenu} radioMenu={radioMenu} setRadioMenu={setRadioMenu} /> : null }

        <div>here</div>
      </div>
  );
}

export default App;
