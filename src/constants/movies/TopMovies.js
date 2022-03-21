import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import TopMovie from "../../components/movie/TopMovie";
import {getAllTopMovie} from "../../Store/slice/topRated.slice";





const TopMovies = () => {
    const movieTopList = useSelector(state => state.topmovie.movieTopList);
    const searchmovie = useSelector((state) => state.searchMovie.searchObject)


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllTopMovie());
    }, []);


    let itemsToRender;
    if (searchmovie.length > 0){
        return (
            <div className="Movies">
                {
                    searchmovie.map(movieItem => <TopMovie key={movieItem.id} item={movieItem}/>)
                }

            </div>
        )
    } else if (movieTopList) {
        return (
            <div className="Movies">
                {
                    movieTopList.map(movieItem => <TopMovie key={movieItem.id} item={movieItem}/>)
                }

            </div>
        );
    } else {
        itemsToRender = "Loading...";
    }
    return <div>{itemsToRender}</div>;


};

export default TopMovies;