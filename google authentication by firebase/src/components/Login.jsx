import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from './firebase.config';

const Login = () => {

    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider();

    const loginTogoogle = () => {
        console.log('login to google');

        signInWithPopup(auth, provider)
            .then(result => {
                console.log('User signed in ✅:', result.user);
                setUser(result.user); // ✅ now works!
            })
            .catch(error => {
                console.log('error', error);
            });
    };

    const singoutGoogle = () => {
        signOut(auth)
            .then(() => {
                console.log('User signed out ✅');
                setUser(null); // Clear user state on sign out
            })
            .catch(error => {
                console.log('error', error);
            });
    };

    return (
        <>
            <h1>this is login page</h1>

            {
                user ? 
                    <button onClick={singoutGoogle}>signout</button> 
                :
                    <div style={{ textAlign: 'center', paddingTop: '50px' }}>
                        <button onClick={loginTogoogle}>sign in with google</button>
                    </div>
            }

            
            <div>
                {user && (
                    <div>
                        <h2>User Info</h2>
                        <p>Name: {user.displayName}</p>
                        <p>Email: {user.email}</p>
                        <img src={user.photoURL} alt={user.displayName} />
                    </div>
                )}
            </div>
        </>
    );
};

export default Login;
