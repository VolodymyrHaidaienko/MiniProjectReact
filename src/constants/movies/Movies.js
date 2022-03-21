import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllMovie} from "../../Store/slice/movie.slice";
import {Movie} from "../../components";
import './Movies.css'
import './MediaMovies.css'
import {Outlet} from "react-router-dom";


export var pageNumber = 1;

const Movies = () => {
    const movieList = useSelector(state => state.movie.movieList);
    const searchmovie = useSelector((state) => state.searchMovie.searchObject)
    const [count, setcount] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllMovie());
    }, [count]);


    const PageNumberPlus = () => {
        pageNumber = pageNumber + 1;
        setcount(pageNumber);

    }


    let itemsToRender;

    if (searchmovie.length > 0){
        return (
            <div className="Movies">
                {
                    searchmovie.map(movieItem => <Movie key={movieItem.id} item={movieItem}/>)
                }

            </div>
        )
    }else if (movieList) {
        return (
            <div className="Movies">
                {
                    movieList.map(movieItem => <Movie key={movieItem.id} item={movieItem}/>)
                }
                <div className="ButtonPages">
                    <button onClick={PageNumberPlus}>Next page</button>

                </div>
                <Outlet/>
            </div>
        );
    } else {
        itemsToRender = "Loading...";
    }
    return <div>{itemsToRender}</div>;





};

export default Movies;