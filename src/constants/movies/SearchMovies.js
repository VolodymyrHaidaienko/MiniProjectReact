import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {searchGetMovie} from "../../Store/slice/search.slice";




const SearchSingleMovie = () => {

    const [filmvalue, setfilmvalue] = useState('')

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(searchGetMovie(filmvalue))
    }, [filmvalue])
    return (
        <div>
            <div className="form">
                <form className="search_form">
                    <input
                        type="text"
                        placeholder="Search movie..."
                        className="search_input"
                        onChange={(event => setfilmvalue(event.target.value))}
                    />
                </form>
            </div>

        </div>
    )
};
export default SearchSingleMovie;