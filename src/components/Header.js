import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
   
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const [dropDown , setDropDown]= useState(false);
  const user = useSelector(store=>store.user)
  const navigate= useNavigate()

  function clickHandler(){
    setDropDown((prev)=>!prev)
  }
  function signOutHandler(){
signOut(auth).then(() => {
  // Sign-out successful.
  
  navigate("/")
}).catch((error) => {
  // An error happened.
  // build error page
  
});
      }

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between '>
      <img className='w-44' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" />

{ user &&
<div className='flex p-2'>

<img onClick={clickHandler} className="w-12 h-12" src="https://i.pinimg.com/474x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg" alt="" />
{
  dropDown?
  (
    <div className='bg-black text-white p-2 absolute top-[4rem] right-[5.5rem] h-[15rem] w-[10rem]  from-black '>
    <p>Mange Profile</p>
    <p>Account</p>
  <p>Help Centre</p>
  <hr className='p-1 mt-2' />
  <div className="flex justify-center">
        <button className='bg-black' onClick={signOutHandler}>Sign Out</button>
      </div>
  </div>
  ):
  ""
}
  
</div>

}
    </div>
  )
}

export default Header
