import React, { useState, useEffect } from 'react';
import MovieService from '../../service/movieServices';
import MovieCard from '../../components/movieCard/MovieCard';
import styles from './movieDetails.module.scss';
import { useHistory } from 'react-router-dom';

const MovieDetails = ({ match }) => {
    const history = useHistory();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        MovieService.getMovie(+match.params.id).then(movie => setMovie(movie))
    }, [match.params.id]);

    const handleDeleteMovie = id => {
        MovieService.deleteMovie(id);
        history.push('/');
    }
    
    return (
    <article>
        {
            movie ? (
                    <section className={styles.container}>
                        <MovieCard deleteFrontMovie={handleDeleteMovie} movie={movie} isShowDetails={true} />
                </section>
            ) : ( <h4> Rien à afficher</h4>)   
            }
        </article>
    )
}

export default MovieDetails
