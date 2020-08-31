import React from 'react';
import MovieCard from '../movieCard/MovieCard';
import style from './moviesList.module.scss';

const MoviesList = ({movies}) => {
    return (
        <div className={style.container}>
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />    
            ))
        }
        </div>
    )
}

export default MoviesList
