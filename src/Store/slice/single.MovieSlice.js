import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services/popularMovieService";


const initialState = {
    movie: {},
    status: null
}


export const getMovie = createAsyncThunk(
    'singleMovie/getMovie',
    async (movieId) => {
        try {
            return await movieService.getMovieDetails(movieId)
        } catch (e) {
            console.log(e)
        }
    }
)

const singleMovieSlice = createSlice({
    name: 'singleMovie',
    initialState,
    reducers: {},
    extraReducers: {
        [getMovie.pending]: (state) => {
            state.status = 'pending'
        },
        [getMovie.fulfilled]: (state, action) => {
            state.movie = action.payload
        }

    }
});
const singleMovieReduser = singleMovieSlice.reducer;
export default singleMovieReduser;
