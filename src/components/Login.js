import React, { useRef, useState } from 'react';
import Header from './Header';
import { Link, useNavigate } from 'react-router-dom';
import { checkDataValidation } from '../utils/validate';
import { auth } from '../utils/firebase';
import {  signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {

    const email = useRef(null);
    const password = useRef(null);
    const [ErrorMessage, setErrorMessage] = useState("");
const navigate = useNavigate();


    const handleValidation = () => {
        const message = checkDataValidation(email.current.value, password.current.value);
        setErrorMessage(message)

        if (message === null) {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)
                    navigate("/browse")

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
        }

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
                        Log In
                    </h1>


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
                       Log In
                    </button>
                    <Link
                        to='/signup'>
                        <p className='cursor-pointer py-4 text-white' >
                            New to Netflix ? Sign Up Now
                        </p>

                    </Link>

                </form>
            </div>
        </div>
    );
};

export default Login;
