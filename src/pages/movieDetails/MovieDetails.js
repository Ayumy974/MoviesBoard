import React, { useState, useEffect } from 'react';
import MovieService from '../../service/movieServices';
import styles from './movieDetails.module.scss';

const MovieDetails = ({ match }) => {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        MovieService.getMovie(+match.params.id).then(movie => setMovie(movie))
    }, [match.params.id]);

    return (
    <>
        {
            movie ? (
                
                <section className={styles.container} style={{backgroundImage: movie.poster}}>
                    <div className={styles.card} >
                        <img className={styles.cardImage} src={movie.backdrop} alt={movie.title} />
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>{movie.title}</h3>
                            <p>Date de sortie: {movie.release_date}</p>
                            {movie.categories.map(category => (
                                <ul>
                                    <li>{category}</li>
                                </ul>
                            ))}
                            <p className={styles.cardDesc}>Synopsis: {movie.description}</p>
                        </div>
                    </div>
                    <div className={styles.actors}>
                        {movie.actors.map(actor => (
                            <ul>
                                <li><img src={actor.photo} alt={actor.name}></img></li>
                                <li>{actor.name}</li>
                                <li>{actor.character}</li>
                            </ul>
                        ))}
                    </div>
                    <div className={styles.similarsMovies}>
                        {movie.similar_movies.map(sm => (
                            <div className={styles.cardContent}>
                                <img className={styles.cardImage} src={sm.poster} alt={sm.title} />
                                <h3 className={styles.cardTitle}>{sm.title}</h3>
                                <p>Date de sortie: {sm.release_date}</p>
                            </div>
                        ))}
                    </div>
                </section>
            ) : ( <h4> Rien à afficher</h4>)   
            }
        </>
    )
}

export default MovieDetails
