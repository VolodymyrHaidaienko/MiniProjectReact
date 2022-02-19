import Movies from "./components/movies/Movies";
import {Route, Routes} from "react-router-dom";
import SingleMovie from "./components/single_movie/SingleMovie";



const App = () => {


    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Movies/>}/>
                <Route path={':movieId'} element={<SingleMovie/>}/>

            </Routes>




        </div>
    );
}

export default App;
