import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {movieService} from "../../services/popularMovieService";


const initialState = {
    movieList: [],
    status: null,
    page:1

}

export const getAllMovie = createAsyncThunk(
    'movie/getAllMovie',
    async () => {
        try {
            const movies = await movieService.getAll()
            return movies
        }catch (e){
            console.log(e)
        }

    }
)

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllMovie.pending]:(state)=>{
            state.status = 'pending'
        },
        [getAllMovie.fulfilled]:(state, action)=>{
            const {results} = action.payload
            state.movieList = state.movieList.concat(results)

        }

    }
});
const movieReduser = movieSlice.reducer;
export default movieReduser;
