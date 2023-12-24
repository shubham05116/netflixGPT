import React, { useEffect, useState } from 'react'
import Header from './Header';
import useNowPlayingMovies from '../Custom hooks/useNowplayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../Custom hooks/usePopularMovies';

import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
import useUpcomingMovies from '../Custom hooks/useUpcomingMovies';
import useTopRatedMovies from '../Custom hooks/useTopRatedMovies';


const Browse = () => {

  const gpt = useSelector((store) => store.search?.gptSearch)

  useNowPlayingMovies();
  // console.log(usePopularMovies())
  useTopRatedMovies();
  useUpcomingMovies();
  usePopularMovies();
  // console.log(useUpcomingMovies())

  return (
    <div>
      <Header />
      {
        gpt ? <GptSearch /> : <div>
          <MainContainer />
          <SecondaryContainer />
        </div>
      }



    </div>
  )
}

export default Browse
