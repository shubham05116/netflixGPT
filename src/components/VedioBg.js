import React from 'react'

import { useSelector } from 'react-redux'

import useTrailerVideo from '../Custom hooks/useTrailerVideo';

const VedioBg = ({ id }) => {
  const trailerVideo = useSelector(store=> store.movies?.trailerVideo)
  // const dispatch = useDispatch();
  
useTrailerVideo(id);

  return (
    <div className='w-screen overflow-hidden'>
      <iframe 
      className='w-screen aspect-video'
     
        src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&rel=0&autoplay=1&mute=1&modestbranding=1&showinfo=0&rel=0" }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen></iframe>

    </div>
  )
}

export default VedioBg
