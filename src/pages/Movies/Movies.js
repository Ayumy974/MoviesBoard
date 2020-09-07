// *** Page 1: Home présentant un service de recherche de films par titre et catégorie puis la liste complèrtes des films présentes dans notre API REST ***

import React, { useState, useEffect } from 'react';
import MovieService from '../../service/movieServices';
import HomeMovie from '../../components/home/HomeMovie';
import MoviesList from '../../components/moviesList/MoviesList';
import Pagination from '../../components/Pagination';

const Movies = ({ showMessage }) => {
    const [movies, setMovies] = useState([]); // pour stocker les données des films récupérées dans l'API rest
    console.log(`nombre de films dans l'API: ${movies.length}`);
    
    const [research, setResearch] = useState({
        title: '',
        category: ''
    }) // pour stocker les valeurs des inputs
    const [loading, setLoading] = useState(false);

    // Pour instaurer la pagination:
    const [currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage] = useState(6);
    
    // Pour récupérer les films courants:
    const indexOfLastMovie = currentPage * moviesPerPage; // index du dernier film
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage; // index du premier film
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);  // nouveau tableau coupé à partir des nouveaux index

    // Au onChange sur les inputs, je déclenche ma requête get pour filtrer par titre et par catégorie
    useEffect(() => {
        const fetchMovies = async () => {
                setLoading(true);
                MovieService.searchMovie(research.title, research.category).then(response => setMovies(response.data));
                setLoading(false);   
            // window.scrollTo(window.scrollY, 350);    
        }
        fetchMovies();
    }, [research.title, research.category])
    

    // Pour changer de page au clic sur le numéro:
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const handleInput = e => {
        const { name, value } = e.target;
        setResearch({ ...research, [name]: value });
    }

// Pour supprimer du front le film supprimé de l'API REST:
    const handleDeleteMovie = id => {
        const newMovies = [...movies];
        const index = newMovies.findIndex(m => m.id === id);
        newMovies.splice(index, 1);
        setMovies(newMovies);
        MovieService.deleteMovie(id);
    }

    return (
        <article>
            <HomeMovie research={research} onHandleInput={(e)=>handleInput(e)} />
            <MoviesList movies={currentMovies} deleteFrontMovie={handleDeleteMovie} loading={loading} showMessage={showMessage} />
            <Pagination moviesPerPage={moviesPerPage} totalMovies={movies.length} paginate={paginate} />    
        </article>
    )
}

export default Movies
