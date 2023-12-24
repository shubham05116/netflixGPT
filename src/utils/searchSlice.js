import { createSlice } from "@reduxjs/toolkit";



const searchSlice = createSlice({
    name: "search",
    initialState: {
        gptSearch: false,
        gptMovies: null,
        movieNames: null,
        movieResults: null

    },
    reducers: {

        addGptSearch: (state, action) => {
            state.gptSearch = !state.gptSearch
        },
        addGptMovieResult: (state, action) => {
            const { movieNames, movieResults } = action.payload

            state.movieNames = movieNames
            state.movieResults = movieResults
        }

    }
})

export const { addGptSearch, addGptMovieResult } = searchSlice.actions
export default searchSlice.reducer