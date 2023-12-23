import React from 'react'
import MovieCard from './MovieCard'
import { IMG_URL } from '../utils/constants'

const Movielist = ({title , movies}) => {
    // console.log(movies)
    if (!movies) {
        return null; // or return some fallback UI if appropriate
      }
  return (
    <div className='px-6  text-white'>
            <h1 className='text-3xl font-semibold py-4'>{title}</h1>

    <div className='flex overflow-x-scroll '>
        <div className='flex  '>
        {
            movies.map((movie)=>(
                <MovieCard key={movie.id} posterPath={movie.poster_path}/>

            ))
        }
        </div>
    </div>
      
    </div>
  )
}

export default Movielist
