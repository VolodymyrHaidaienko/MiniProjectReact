import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllMovie} from "../../Store/slice/movie.slice";
import {Movie} from "../movie/Movie";
import './Movies.css'
import './MediaMovies.css'


export var pageNumber = 1;

const Movies = () => {
    const movieList = useSelector(state => state.movies.movieList);
    const [count, setcount] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllMovie());
    }, [count]);


    const PageNumberPlus = () => {
        pageNumber = pageNumber + 1;
        setcount(pageNumber);
        // return pageNumber
    }


    let itemsToRender;


    if (movieList) {
        return (
            <div className="Movies">
                {
                    movieList.map(movieItem => <Movie key={movieItem.id} item={movieItem}/>)
                }
                <div className="ButtonPages">
                    <button onClick={PageNumberPlus}>Next page</button>

                </div>
            </div>
        );
    } else {
        itemsToRender = "Loading...";
    }
    return <div>{itemsToRender}</div>;

};

export default Movies;