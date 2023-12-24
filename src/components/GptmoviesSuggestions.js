import React from 'react'
import { useSelector } from 'react-redux'
import Movielist from './Movielist'

const GptmoviesSuggestions = () => {

    const gpt = useSelector((store)=>store.search)
    const {movieResults, movieName } = search
    if(!movieName) return;



  return (
    <div className='p-4 m-4 bg-black  text-white'>
    {
        movieName.map((movieName , index)=>(
            <Movielist title={movieName} movies={movieResults[index]} />
        ))
    }
      
    </div>
  )
}

export default GptmoviesSuggestions
