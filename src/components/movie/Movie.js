import './Movie.css'
import './MediaMovie.css'
import {Link, Outlet} from "react-router-dom";

const Movie = (payload) => {
    let {id, title, overview, backdrop_path, popularity} = payload.item

    return (
        <div className="ContentMovie">
            <div>
                <div className="Photo"><img src={'https://image.tmdb.org/t/p/w500' + backdrop_path} width={400}/></div>


                <div>
                    <h2>Title:<Link to={id.toString()} state={{...payload.item}}> {title}</Link></h2>
                </div>
                <div className="Overview">Overview: {overview}</div>
                <div>
                    <h3> Popularity: {popularity}</h3>
                </div>
            </div>
            <Outlet/>


        </div>
    )
}
export {Movie}

