import React, { useEffect } from 'react';
import MovieCard from '../movieCard/MovieCard';
import style from './moviesList.module.scss';


const MoviesList = ({ movies, loading, deleteFrontMovie }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }
    return (
        <div className={style.container}>
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} movies={movies} loading={loading} deleteFrontMovie={deleteFrontMovie} />    
                ))
            }
        </div>
    )
}

export default MoviesList
