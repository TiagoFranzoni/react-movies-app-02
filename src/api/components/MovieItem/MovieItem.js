import { Link } from "react-router-dom"
import styles from "./MovieItem.module.css"
import { MovieImage } from "../MovieImage/MovieImage"

export function formatDate (releaseDate) {
    const date = new Date(releaseDate);
    return date.toLocaleDateString('pt-BR');
}

export function MovieItem ({ movie }) {
    const releaseDate = formatDate(movie.release_date);

    return (
        <div className={styles.movie}>
            <h3>{movie.title}</h3>
    
            <MovieImage path={movie.poster_path} />

            <div className={styles.movieInfo}>
                <div>
                    <strong>Data de lançamento:</strong> {releaseDate}
                </div>
            </div>

            <div className={styles.movieFooter}>
                <Link to={`/movie/${movie.id}`}>Ver Detalhes</Link>
            </div>

        </div>
    )
}