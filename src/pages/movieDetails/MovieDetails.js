import React, { useState, useEffect } from 'react';
import MovieService from '../../service/movieServices';
import MovieCard from '../../components/movieCard/MovieCard';
import Loader from '../../components/Loader';
import styles from './movieDetails.module.scss';
import { useHistory } from 'react-router-dom';

const MovieDetails = ({ match, showMessage }) => {
    const history = useHistory();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        MovieService.getMovie(+match.params.id).then(movie => setMovie(movie));
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
                        <MovieCard showMessage={showMessage} deleteFrontMovie={handleDeleteMovie} movie={movie} isShowDetails={true} />
                    </section>
                ) : (
                        <section className="center" style={{ marginTop: "100px" }}>
                            <Loader />
                            <h4 >Ce film n'existe pas ...</h4>
                        </section>)
            }
    </article>
    )
}

export default MovieDetails
