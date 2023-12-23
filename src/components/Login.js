import React, { useRef, useState } from 'react';
import Header from './Header';
import { Link, useNavigate } from 'react-router-dom';
import { checkDataValidation } from '../utils/validate';
import { signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => {

    const email = useRef(null);
    const dispatch = useDispatch();

    const name = useRef(null)
    const password = useRef(null);
    const [ErrorMessage, setErrorMessage] = useState("");
    const [signUp, setSignUp] = useState(false)


    const handleValidation = () => {
        const message = checkDataValidation(email.current.value, password.current.value);
        setErrorMessage(message)

        if (message === null) {
            if (!signUp) {
                signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                    .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        // console.log(user)
                        // navigate("/browse")

                        // ...
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                    });
            }

            else {
                createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        // console.log(user);
                        updateProfile(user, {
                            displayName: name.current.value,
                            photoURL: "https://example.com/jane-q-user/profile.jpg"
                        }).then(() => {
                            const { uid, email, displayName, photoURL } = auth.currentUser
                            dispatch(addUser({
                                uid: uid,
                                email: email,
                                displayName: displayName,
                                photoURL: photoURL
                            }))

                            // navigate("/browse")

                        }).catch((error) => {
                            // An error occurred
                            // ...
                        });
                        //   console.log(displayName)
                        // ...
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        // ..
                    });
            }

        }

    }

    function clickHandler() {
        setSignUp(prev => !prev)
    }


    return (
        <div>
            <Header />
            <div className='absolute'>
                <img className='w-[100vw] h-full'
                    src='https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_small.jpg'
                    alt=''
                />
            </div>
            <div className='h-screen text-white flex flex-col items-center justify-center'>
                <form onSubmit={(e) => e.preventDefault()} className='absolute mt-20 p-14 bg-black w-1/3 bg-opacity-80'>
                    <h1 className='text-white font-bold text-3xl py-4'>
                        {signUp ? "Sign Up" : "Log In"}
                    </h1>

                    {signUp && (<div>
                        <input
                            ref={name}
                            className='rounded-lg my-4 p-4 w-full bg-gray-700'
                            type='text'
                            placeholder='Name of User'
                        />

                        <br />
                    </div>)}
                    <input
                        ref={email}
                        className='rounded-lg my-4 p-4 w-full bg-gray-700'
                        type='email'
                        placeholder='Email or Phone Number'
                    />

                    <br />
                    <input
                        ref={password}
                        className='rounded-lg my-4 p-4 w-full bg-gray-700'
                        type='password'
                        placeholder='Password'
                    />
                    <br />
                    <p className='text-red-700 font-semibold'>{ErrorMessage}</p>

                    <button className='my-6 p-4 w-full rounded-lg bg-red-600 text-white font-semibold' onClick={handleValidation}>
                        {signUp ? "Sign Up" : "Log In"}
                    </button>

                    <p className='cursor-pointer py-4 text-white' onClick={clickHandler} >
                        {
                            signUp ? " Already signed up ? Sign In Now" : "New to Netflix ? Sign Up Now"
                        }
                    </p>



                </form>
            </div>
        </div>
    );
};

export default Login;
