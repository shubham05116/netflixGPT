import React, { useEffect  } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { addTrailerVideo } from '../utils/movieSlice';
import { useDispatch } from 'react-redux';


const useTrailerVideo =(id)=>{



// const[trailer , setTrailerId] = useState("")
  const dispatch = useDispatch();

  const vedioPlaying = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_OPTIONS);

    const response = await data.json();
    // console.log(response);
    const filterData = response.results.filter((video) => video.type == "Trailer")
    const trailer = filterData.length? filterData[0]: response.results[0];
    // console.log(trailer)
    // setTrailerId(filterData[0].key)
    dispatch(addTrailerVideo(trailer))
    // console.log(filterData[0])

  }

  useEffect(() => {
    vedioPlaying();
  }, [])

}
  export default useTrailerVideo;