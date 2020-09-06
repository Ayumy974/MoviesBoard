import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovieService from '../../service/movieServices';
import HomeMovie from '../../components/home/HomeMovie';
import MoviesList from '../../components/moviesList/MoviesList';
import Pagination from '../../components/Pagination';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [research, setResearch] = useState({
        title: '',
        category: ''
    })
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage] = useState(6);
    
    useEffect(() => {
        const fetchMovies = async () => {
                setLoading(true);
                MovieService.searchMovie(research.title, research.category).then(response => setMovies(response.data));
            setLoading(false);   
            // window.scrollTo(window.scrollY, 350);
            
        }
        fetchMovies();
    }, [research.title, research.category])
    
    // Get current movies
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const handleInput = e => {
        const { name, value } = e.target;
        setResearch({ ...research, [name]: value });
        // scrollToBottom();

    }

    const handleDeleteMovie = id => {
        const newMovies = [...movies];
        const index = newMovies.findIndex(m => m.id === id);
        newMovies.splice(index, 1);
        setMovies(newMovies);
        MovieService.deleteMovie(id);
    }

    const scrollToSearch = () => {
        window.scrollTo(window.scrollY, 600);
        // setResearch({
        //     title: '',
        //     category: ''
        // });
    }

    return (
        <article>
        {/* <div style={{scrollBehavior: 'smooth'}}> */}
            <HomeMovie research={research} onHandleInput={(e)=>handleInput(e)} />
            <button onClick={scrollToSearch}>go to movie list</button>
            <MoviesList movies={currentMovies} deleteFrontMovie={handleDeleteMovie} loading={loading} />
            <Pagination moviesPerPage={moviesPerPage} totalMovies={movies.length} paginate={paginate} />
            
        </article>
    )
}

export default Movies
