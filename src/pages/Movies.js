import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilmSelection from '../components/FilmSelection';
import MoviesList from '../components/moviesList/MoviesList';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [url] = useState(
        'http://localhost:3000/movies',
    );

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios(url);
                setMovies(result.data);
                console.log(result.data)
            }
            catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [url]);
    
    
    return (
        <section>
            <FilmSelection />
            <MoviesList movies={movies} />
        </section>
    )
}

export default Movies
