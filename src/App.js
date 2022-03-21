import Movies from "./constants/movies/Movies";
import {Route, Routes} from "react-router-dom";
import SingleMovie from "./components/single_movie/SingleMovie";
import Layout from "./Store/Layout";
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import TopMovies from "./constants/movies/TopMovies";
import './App.css'
import SearchMovies from "./constants/movies/SearchMovies";


const App = () => {


    return (
        <div>
            <div>
                <div><h2>Menu</h2></div>
                <div className="Menu">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Category movie
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="/movie/top_rated">Top_rated</Dropdown.Item>
                            <Dropdown.Item href="/">Best movie</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <div><SearchMovies/></div>
                </div>
            </div>
            <Routes>
                <Route path={'/'} elemtnt={<Layout/>}>
                    <Route path={'/'} element={<Movies/>}/>
                    <Route path={':movieId'} element={<SingleMovie/>}/>
                    <Route path={'/movie/top_rated'} element={<TopMovies/>}/>
                    <Route path={'/movie/top_rated/:movieId'} element={<SingleMovie/>}/>
                </Route>


            </Routes>

        </div>
    );
}

export default App;



