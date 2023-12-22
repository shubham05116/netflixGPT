import React, { useEffect } from 'react'
import Login from './Login'
import { onAuthStateChanged } from "firebase/auth";
import { createBrowserRouter } from 'react-router-dom'

import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { RouterProvider } from 'react-router-dom';
import SignUp from './SignUp';
import Browse from './Browse';



const Body = () => {
  const dispatch= useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/signup",
      element: <SignUp />
    },
    {
      path: "/browse",
      element: <Browse />
    }
  ]);

 useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid, email , displayName} = user;
      dispatch(addUser({
        uid:uid,
        email:email,
        displayName:displayName
      }))
      // ...
    } else {

      dispatch(removeUser())
    }
  });
  

 },[])

  return (
    <div>
    <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
