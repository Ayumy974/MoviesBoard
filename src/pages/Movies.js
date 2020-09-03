import React, { useState, useEffect } from 'react';
import MovieService from './../service/movieServices';
import MoviesList from '../components/moviesList/MoviesList';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    
    
    // useEffect(() => {
    //     MovieService.getMovies().then(response => setMovies(response.data)).catch( error => console.log(error))
    // }, []);

    useEffect(() => {
        MovieService.searchMovie(title, category).then(response => setMovies(response.data));
    },[title, category])

    const handleDeleteMovie = id => {
        const newMovies = [...movies];
        const index = newMovies.findIndex(m => m.id === id);
        newMovies.splice(index, 1);
        setMovies(newMovies);
        MovieService.deleteMovie(id);
    }


    return (
        <section>
            <label htmlFor="name">Recherche par nom</label>
            <input type="text" id="title" className="title" value={title} name="title" onChange={(e)=>setTitle(e.target.value)}/>
            <label htmlFor="name">Recherche par catégorie</label>
            <input type="text" id="category" className="category" value={category} name="category" onChange={e =>setCategory(e.target.value)}/>
            <MoviesList movies={movies} deleteFrontMovie={handleDeleteMovie} />
        </section>
    )
}

export default Movies
