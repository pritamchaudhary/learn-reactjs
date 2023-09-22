import React, { useState } from 'react'
import {auth, gooogleProvider} from '../config/firebase'
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log(auth?.currentUser?.email);

    const signIn = async() => {
        try{
            await createUserWithEmailAndPassword(auth, email, password);
        }
        catch(err){
            console.log(err);
        }
    }
    const signInWithGoogle = async() => {
        try{
            await signInWithPopup(auth, gooogleProvider);
        }
        catch(err){
            console.log(err);
        }
    }
    const logout = async() => {
        try{
            await signOut(auth);
        }
        catch(err){
            console.log(err);
        }
    }
  return (
    <div>
        <input type="text" placeholder='Email...' onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='Password...' onChange={(e) => setPassword(e.target.value)} />
        <button onClick={signIn}>Sign In</button>

        <button onClick={signInWithGoogle}>Sign In With Google</button>
        <button onClick={logout}>LogOut</button>
    </div>
  )
}

export default Auth