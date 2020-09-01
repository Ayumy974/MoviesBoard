import React, { useState, useEffect } from 'react';
import MovieService from './../service/movieServices';
import FilmSelection from '../components/FilmSelection';
import MoviesList from '../components/moviesList/MoviesList';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        MovieService.getMovies()
        .then(response => setMovies(response.data))
        .catch( error => console.log(error))
    }, []);
    
    return (
        <section>
            <FilmSelection />
            <MoviesList movies={movies} />
        </section>
    )
}

export default Movies
