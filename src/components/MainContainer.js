import React from 'react'
import VedioBg from './VedioBg'
import VedioTitle from './VedioTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {

    const movies = useSelector(store=> store.movies?.nowPlayingMovies)

if(!movies) return;

const MainMovie = movies[0];
// console.log(MainMovie)

const {original_title, overview , id } = MainMovie;

  return (
    <div>
        <VedioTitle title={original_title} overview={overview}/>
    <VedioBg id={id}/>
      
    </div>
  )
}

export default MainContainer
