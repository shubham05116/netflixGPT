import React from 'react'

import { useSelector } from 'react-redux'

import useTrailerVideo from '../Custom hooks/useTrailerVideo';

const VedioBg = ({ id }) => {
  const trailerVideo = useSelector(store=> store.movies?.trailerVideo)
  // const dispatch = useDispatch();
  
useTrailerVideo(id);

  return (
    <div className='w-[1260px] '>
      <iframe 
      className='w-[1263px] aspect-video'
     
        src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1&showInfo=0&controls=0" }
        title="YouTube video player"
        frameBorder="0"
        allow=" allow=fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen></iframe>

    </div>
  )
}

export default VedioBg
