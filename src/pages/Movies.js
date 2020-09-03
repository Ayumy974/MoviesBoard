import React, { useState, useEffect } from 'react';
import MovieService from './../service/movieServices';
import FilmSelection from '../components/FilmSelection';
import MoviesList from '../components/moviesList/MoviesList';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        MovieService.getMovies().then(response => setMovies(response.data)).catch( error => console.log(error))
    }, []);

    const handleDeleteMovie = id => {
        const newMovies = [...movies];
        const index = newMovies.findIndex(m => m.id === id);
        newMovies.splice(index, 1);
        setMovies(newMovies);
        MovieService.deleteMovie(id);
    }

    return (
        <section>
            <FilmSelection />
            <MoviesList movies={movies} deleteFrontMovie={handleDeleteMovie} />
        </section>
    )
}

export default Movies
