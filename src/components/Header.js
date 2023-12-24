import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';
import { addGptSearch } from '../utils/searchSlice';

const Header = () => {
  const [dropDown, setDropDown] = useState(false);
  const user = useSelector(store => store.user)
  const gpt = useSelector((store) => store.search?.gptSearch)

  const navigate = useNavigate()
  const dispatch= useDispatch();

  function clickHandler() {
    setDropDown((prev) => !prev)
  }
  function signOutHandler() {
    signOut(auth).then(() => {

      navigate("/")
    }).catch((error) => {

    });
  }

  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email , displayName} = user;
        dispatch(addUser({
          uid:uid,
          email:email,
          displayName:displayName
        }))
        navigate("/browse")
        // ...
      } else {
  
        dispatch(removeUser())
        navigate("/")
      }
    });
    
    // when the component unmount unsubscribe it
  return ()=> unsubscribe();
   },[])

   function gptHandler(){
    dispatch(addGptSearch())
   }

  return (
    <div className='absolute w-full  px-6 py-2 bg-gradient-to-b from-black z-10 flex justify-between '>
      <img className='w-44' src={LOGO} />

      {user &&
        <div className='flex p-2'>
           <button onClick={gptHandler} className='bg-red-500 px-5 py-2 text-white mx-4 h-12 rounded-lg'>
           {gpt?"Homepage":" GPT Search"}
          </button>
          <img onClick={clickHandler} className="w-12 h-12" src="https://i.pinimg.com/474x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg" alt="" />
          {
            dropDown ?
              (
                <div className='bg-black text-white  absolute top-[4rem] right-[5.5rem] h-[15rem] w-[10rem]  from-black '>
                  <p>Mange Profile</p>
                  <p>Account</p>
                  <p>Help Centre</p>
                  <hr className='p-1 mt-2' />
                  <div className="flex justify-center">
                    <button className='bg-black' onClick={signOutHandler}>Sign Out</button>
                  </div>
                </div>
              ) :
              ""
          }

        </div>

      }
    </div>
  )
}

export default Header
