import React from 'react'

import { useSelector } from 'react-redux'

import useTrailerVideo from '../Custom hooks/useTrailerVideo';

const VedioBg = ({ id }) => {
  const trailerVideo = useSelector(store=> store.movies?.trailerVideo)
  // const dispatch = useDispatch();
  
useTrailerVideo(id);

  return (
    <div>
      <iframe width="560"
        height="315"
        src={"https://www.youtube.com/embed/"+trailerVideo?.key }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen></iframe>

    </div>
  )
}

export default VedioBg
