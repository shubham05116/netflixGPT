import React, { useEffect, useState } from 'react'
import Header from './Header';
import useNowPlayingMovies from '../Custom hooks/useNowplayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {
  
useNowPlayingMovies();

  return (
    <div>
    <Header/>
     <MainContainer/>
     <SecondaryContainer/>

    </div>
  )
}

export default Browse
