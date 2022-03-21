import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services/popularMovieService";


const initialState = {
    movieTopList: [],
    status: null,
    page: 1

}

export const getAllTopMovie = createAsyncThunk(
    'topmovie/getAllTopMovie',
    async () => {
        try {
            return await movieService.getTopRated()
        } catch (e) {
            console.log(e)
        }

    }
)

const movieTopSlice = createSlice({
    name: 'topmovie',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllTopMovie().pending]: (state) => {
            state.status = 'pending'
        },
        [getAllTopMovie.fulfilled]: (state, action) => {
            const {results} = action.payload
            state.movieTopList = state.movieTopList.concat(results)


        }

    }
});
const movieTopReduser = movieTopSlice.reducer;
export default movieTopReduser;
