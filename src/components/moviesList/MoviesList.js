import React from 'react';
import MovieCard from '../movieCard/MovieCard';
import style from './moviesList.module.scss';

const MoviesList = ({ movies, loading, deleteFrontMovie, showMessage}) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }
    return (
        <section className={style.container}>
            <div className={style.movies}>
                {movies.map(movie => (
                    <MovieCard showMessage={showMessage} isShowDetails={false} key={movie.id} movie={movie} movies={movies} loading={loading} deleteFrontMovie={deleteFrontMovie} />    
                    ))
                }
            </div>
        </section>
    )
}

export default MoviesList
