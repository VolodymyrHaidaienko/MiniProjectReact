import React from 'react';
import {configureStore} from "@reduxjs/toolkit";
import movieReduser from "./slice/movie.slice";
import singleMovieReduser from "./slice/single.MovieSlice";

const store = configureStore({
    reducer:{
        movies:movieReduser,
        singleMovie:singleMovieReduser
    }
})

export default store;