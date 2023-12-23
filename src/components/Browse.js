import React, { useEffect, useState } from 'react'
import Header from './Header';
import { API_OPTIONS } from '../utils/constants';

const Browse = () => {
  
  const [movies , setMovies ]= useState([])

  const getNowPlayingMovies=  async()=>{
  const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
  const response= await data.json();
console.log(response)
    // .then(response => response.json())
    // .then(response => setMovies(response.results))
    // .catch(err => console.error(err));
    setMovies(response.results)
  }

  useEffect(()=>{
    getNowPlayingMovies();
  },[])


  return (
    <div>
    <Header/>
     
{
  movies.map((movie)=>(
    <div>
    {/* {movie.poster_path}
     */}
     <img src={movie.poster_path} alt="" />
    </div>
  ))
}
    </div>
  )
}

export default Browse
