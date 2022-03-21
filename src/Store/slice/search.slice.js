import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services/popularMovieService";


const initialState = {
    searchObject: [],
    status: null
}

export const searchGetMovie = createAsyncThunk(
    'searchMovie/searchGetMovie',
    async (value) => {
        if (value.length === 0){
            return null
        }
        try {
            return await movieService.searchMovie(value)
        } catch (e) {
            console.log(e)
        }
    }
)
const searchMovieSlice = createSlice({
    name: 'searchMovie',
    initialState,
    reducers: {},
    extraReducers: {
        [searchGetMovie.pending]: (state) => {
            state.status = 'pending'
        },
        [searchGetMovie.fulfilled]: (state, action) => {
            try {
                state.searchObject = action.payload.data.results
            } catch (e) {
                state.searchObject = []
            }
        }

    }
});

const searchMovieReduser = searchMovieSlice.reducer;
export default searchMovieReduser;