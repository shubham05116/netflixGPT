import React, { useEffect, useState } from 'react'
import Header from './Header';
import useNowPlayingMovies from '../Custom hooks/useNowplayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../Custom hooks/usePopularMovies';
import { useSelector } from 'react-redux';


const Browse = () => {

useNowPlayingMovies();
// console.log(usePopularMovies())
usePopularMovies();

  return (
    <div>
    <Header/>
     <MainContainer/>
     <SecondaryContainer/>

    </div>
  )
}

export default Browse
