import { api } from "../config/http";

export class MoviesService {
    //Buscar filmes populares
    static getMovies(){
        return api.get('movie/popular')
    }

    //Buscar detalhes de um filme
    static getMovieDetail(movieID){
        return api.get(`movie/${movieID}`)

    }
}