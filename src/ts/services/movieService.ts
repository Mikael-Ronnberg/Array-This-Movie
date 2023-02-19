import axios from "axios";
import { IMovie } from "../models/IMovie";
import { IOmdbResponse } from "../models/IOmdbResponse";
require("dotenv").config();


export function getThemSearchedMovies(movie: string): Promise<IMovie[]> {
    return axios.get<IOmdbResponse>(`http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.APIKEY}=${movie}`).then((response) => {
       return response.data.Search;
    });
};