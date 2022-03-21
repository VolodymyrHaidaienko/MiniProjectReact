import {axiosService} from "./axios.service";
import {API_KEY, urls} from "../constants/urls";
import {pageNumber} from "../components";


export const movieService = {
    getAll: () => axiosService.get(urls.moviePopular, {
        params: {
            "api_key": API_KEY,
            "page":pageNumber
        }
    }).then(value => value.data),
    getMovieDetails: (id) => axiosService.get(urls.singleMovie + `/${id}`, {
        params: {
            "api_key": API_KEY
        }
    }).then(value => value.data),
    getTopRated:()=>axiosService.get(urls.topRated,{
        params:{
            "api_key": API_KEY
        }}).then(value => value.data),
    searchMovie:(value)=>axiosService.get(urls.searchMovie, {
        params:{
            "api_key": API_KEY,
            "query":value

        }
    })
}