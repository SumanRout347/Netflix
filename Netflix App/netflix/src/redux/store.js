import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import moviereducer from "./movieSlice"
import gptReducer from "./gptSlice"

export const store=configureStore({
    reducer:{
        user:userReducer,
        movies:moviereducer,
        gpt:gptReducer
    }
})