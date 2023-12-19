import React, { useState } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

const Login = () => {


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
                <form className='absolute mt-20 p-14 bg-black w-1/3 bg-opacity-80'>
                    <h1 className='text-white font-bold text-3xl py-4'>
                        Sign In
                    </h1>


                    <input
                        className='rounded-lg my-4 p-4 w-full bg-gray-700'
                        type='email'
                        placeholder='Email or Phone Number'
                    />
                    <br />
                    <input
                        className='rounded-lg my-4 p-4 w-full bg-gray-700'
                        type='password'
                        placeholder='Password'
                    />
                    <br />
                    <button className='my-6 p-4 w-full rounded-lg bg-red-600 text-white font-semibold'>
                        Sign In
                    </button>
                    <input type='checkbox' name='' id='' />
                    <Link
                        to='/signup'>
                        <p className='cursor-pointer py-4 text-white' >
                            New to Netflix ? Sign In Now
                        </p>

                    </Link>

                </form>
            </div>
        </div>
    );
};

export default Login;
