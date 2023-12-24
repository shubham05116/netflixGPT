import { createSlice } from "@reduxjs/toolkit";



const searchSlice = createSlice({
    name: "search",
    initialState: {
        gptSearch: false
    },
    reducers: {

        addGptSearch: (state, action) => {
            state.gptSearch = !state.gptSearch
        }

    }
})

export const { addGptSearch } = searchSlice.actions
export default searchSlice.reducer