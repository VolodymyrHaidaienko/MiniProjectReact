import React from 'react';
import './SinglMuvie.css'
import './MediaSinglMuvie.css'

const SinglMuvie = (item) => {
    console.log(item)
    let {title, overview, backdrop_path}=item.item
    return (
        <div className="Movie">
            <div><img src={'https://image.tmdb.org/t/p/w500'+backdrop_path}/></div>
            <div>
                <div><h2>Title: {title}</h2></div>
                <div className="Overview"><h3>Overview:</h3> {overview}</div>
            </div>


        </div>
    );
};

export default SinglMuvie;