import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        selectedLanguage:"en",
        movieResult:null
        
    },
    reducers:{
        toggleSearch(state){
            state.showGptSearch=!state.showGptSearch
        },
        setLanguage(state,action){
            state.selectedLanguage=action.payload
        },
        addMovieResult(state,action){
            state.movieResult=action.payload
        }

    }
})

export const {toggleSearch,setLanguage,addMovieResult}=gptSlice.actions

export default gptSlice.reducer