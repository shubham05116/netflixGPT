import React, { useState,useRef } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import { checkDataValidation } from '../utils/validate';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';


const SignUp = () => {

    
    const email = useRef(null);
    const password = useRef(null);
    const[ErrorMessage, setErrorMessage]=useState("");



    const handleValidation = () => {
      const message= checkDataValidation(email.current.value, password.current.value);
setErrorMessage(message)
if(message===null){
createUserWithEmailAndPassword(auth,email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
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
                <form onSubmit={(e)=>e.preventDefault()} className='absolute mt-20 p-14 bg-black w-1/3 bg-opacity-80'>
                    <h1 className='text-white font-bold text-3xl py-4'>
                        Sign Up
                    </h1>

                    <input
                        className='rounded-lg my-4 p-4 w-full bg-gray-700'
                        type='text'
                        placeholder='Name of User'
                    />

                    <br />
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
                        Sign Up
                    </button>
                    <input type='checkbox' name='' id='' />
                    <Link
                    to='/'>
                    <p className='cursor-pointer py-4 text-white'>

                    Already signed up ? Sign In Now

                    </p>

                    </Link>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
