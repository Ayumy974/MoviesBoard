import React, { useState, useEffect } from 'react';
import MovieService from '../../service/movieServices';
import MoviesList from '../../components/moviesList/MoviesList';
import Pagination from '../../components/Pagination';
import style from './movies.module.scss';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage] = useState(2);

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            MovieService.searchMovie(title, category).then(response => setMovies(response.data));
            setLoading(false);
        }
        fetchMovies();
    }, [title, category])
    
    // Get current movies
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const handleDeleteMovie = id => {
        const newMovies = [...movies];
        const index = newMovies.findIndex(m => m.id === id);
        newMovies.splice(index, 1);
        setMovies(newMovies);
        MovieService.deleteMovie(id);
    }

    return (
        <section className={style.container}>
            {/* <label htmlFor="name">Recherche par nom:</label> */}
            <input color='blue' type="text" id="title" className={style.title} value={title} name="title" onChange={(e)=>setTitle(e.target.value)} placeholder='Recherche par nom' required/>
            {/* <label htmlFor="name">Recherche par catégorie:</label> */}
            <input type="text" id="category" className="category" value={category} name="category" onChange={e =>setCategory(e.target.value)} placeholder='Recherche par catégorie' required/>
            <MoviesList movies={currentMovies} deleteFrontMovie={handleDeleteMovie} loading={loading} />
            <Pagination moviesPerPage={moviesPerPage} totalMovies={movies.length} paginate={paginate} />
        </section>
    )
}

export default Movies
