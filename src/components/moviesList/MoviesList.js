import React, { useEffect } from 'react';
import MovieCard from '../movieCard/MovieCard';
import style from './moviesList.module.scss';


const MoviesList = ({ movies, deleteFrontMovie }) => {

    return (
        <div className={style.container}>
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} movies={movies} deleteFrontMovie={deleteFrontMovie} />    
            ))
        }
        </div>
    )
}

export default MoviesList
