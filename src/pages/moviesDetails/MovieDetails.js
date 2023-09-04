import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { MoviesService } from "../../api/MoviesService";
import { MovieImage } from "../../api/components/MovieImage/MovieImage";
import styles from "./MoviesDetails.module.css"
import { formatDate } from "../../api/components/MovieItem/MovieItem";

export function MovieDetails(){
    const [movie, setMovies] = useState({});
    const params = useParams();
    const releaseDate = formatDate(movie.release_date);    

    useEffect (() => {
        MoviesService.getMovieDetail(params.movieId)
        .then(({ data }) => setMovies(data))
    }, [params.movieId])


    return(
        <article id="page-movieDetail" className={styles.container}>
            <image className={styles.image}>            
                <MovieImage path={movie.poster_path} size={500} />
            </image>

            <div className={styles.movieInfo}>
                <h1>{movie.title}</h1>
               
                <div className={styles.movieDescription}>
                    {movie.overview}
                </div>

                <p>Data de lançamento: {releaseDate}</p>
                <p>Popularidade: {movie.popularity}</p>
                <p>Nota: {movie.vote_average}</p>

            </div>

        </article>
    )
}