import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        upcomingMovies:null,
        topRatedMovies:null
    },
    reducers:{
        addNowPlayingMovies:(state , action)=>{
            state.nowPlayingMovies= action.payload
            // console.log(state.nowPlayingMovies)
        },

        addTrailerVideo: (state, action) => {
            state.trailerVideo=action.payload;
            // console.log(action.payload)
        },
        addPopularMovies:(state , action)=>{
            state.popularMovies= action.payload
            // console.log(state.nowPlayingMovies)
        },
        addTopRatedMovies:(state , action)=>{
            state.topRatedMovies= action.payload


        },
        addUpcomingMovies:(state , action)=>{
            state.upcomingMovies= action.payload


        }

    }
})


export const {addNowPlayingMovies , addTrailerVideo,addTopRatedMovies ,addUpcomingMovies, addPopularMovies} = movieSlice.actions;
export default movieSlice.reducer;