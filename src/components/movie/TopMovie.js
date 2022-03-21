import React from 'react';
import {Link, Outlet} from "react-router-dom";



const TopMovie = (payload) => {
    const {id, title, overview, backdrop_path} = payload.item
    return (
        <div className="ContentMovie">
            <div className="Photo"><img src={'https://image.tmdb.org/t/p/w500' + backdrop_path} width={400}/></div>
            <div>Number: {id} </div>
            <div><h2>Title: <Link to={id.toString()} state={{...payload.item}}>{title}</Link></h2></div>
            <div>{overview}</div>
            <Outlet/>
        </div>
    );
};

export default TopMovie;
