import { useEffect, useState } from "react"
import { MoviesService } from "../api/MoviesService";
import { MoviesList } from "../api/components/MoviesList/MoviesList";

export function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        MoviesService
        .getMovies()
        .then(({ data }) => setMovies(data.results))
    }, [])



    return (
        <>
            <MoviesList  movies={movies} />
        </>
    )
}