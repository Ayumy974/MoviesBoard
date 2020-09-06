import React, { useState, useEffect } from 'react';
import MovieService from '../../service/movieServices';
import MovieCard from '../../components/movieCard/MovieCard';
import styles from './movieDetails.module.scss';

const MovieDetails = ({ match }) => {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        MovieService.getMovie(+match.params.id).then(movie => setMovie(movie))
    }, [match.params.id]);

    return (
    <article>
        {
            movie ? (
                    <section className={styles.container}>
                        <MovieCard movie={movie} isShowDetails={true} />
                </section>
            ) : ( <h4> Rien à afficher</h4>)   
            }
        </article>
    )
}

export default MovieDetails
