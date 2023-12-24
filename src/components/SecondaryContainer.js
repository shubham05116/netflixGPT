import React from 'react'
import Movielist from './Movielist'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
  if (!movies) return;

  return (
    <div className=' bg-black pl-12 '>
      <div className='-mt-60 relative z-20'>
        <Movielist title={"Now Playing"} movies={movies.nowPlayingMovies} />
      </div>
      <Movielist title={"Top Rated Movies"} movies={movies.topRatedMovies} />
      <Movielist title={"Upcoming Movies"} movies={movies.upcomingMovies} />
      <Movielist title={"Popular Movies"} movies={movies.nowPlayingMovies} />
      <Movielist title={"Now Playing"} movies={movies.nowPlayingMovies} />
    </div>
  )
}

export default SecondaryContainer
