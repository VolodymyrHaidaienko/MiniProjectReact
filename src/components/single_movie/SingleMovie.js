import React, {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {getMovie} from "../../Store/slice/single.MovieSlice";
import {useParams} from "react-router-dom";
import SinglMuvie from "./SinglMuvie";
import './SingleMovie.css'



const SingleMovie = () => {
    const movie = useSelector((state) => state.singleMovie.movie)
    console.log("Movie title is = " + movie.title)

    const dispatch = useDispatch();
    const {movieId} = useParams();
    useEffect(() => {
        dispatch(getMovie(movieId))
    }, [])
    if (movie){
        return (
            <div className="FilmDetails">
                {<SinglMuvie item={movie}/>}
            </div>
        );
    } else return <div>'Loading...'</div>

};

export default SingleMovie;