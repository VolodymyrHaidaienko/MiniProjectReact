import React from 'react';
import {configureStore} from "@reduxjs/toolkit";
import movieReduser from "./slice/movie.slice";
import singleMovieReduser from "./slice/single.MovieSlice";
import movieTopReduser from "./slice/topRated.slice";
import searchMovieReduser from "./slice/search.slice";

const store = configureStore({
    reducer:{
        movie:movieReduser,
        singleMovie:singleMovieReduser,
        topmovie:movieTopReduser,
        searchMovie:searchMovieReduser
    }
})

export default store;