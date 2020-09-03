import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import MovieService from '../service/movieServices';

const FilmSelection = ({searchMovie, search}) => {
    // const [newMovies, setNewMovies] = useState(movies);
    // const [term, setTerm] = useState('');

    // const handleChange = e => {
    //     const term = e.target.value;
    //     setTerm(term);
    
    //     if(term.length <= 1) {
    //     setNewMovies([]);
    //     return;
    //     }
    //     MovieService.searchMovie(term).then(response => setNewMovies(response.data));
    //     console.log(newMovies);
    // }

    return (
        <form>
            <label htmlFor="name">Recherche par nom</label>
            <input type="text" id="title" className="title" value={search.title} name="title" onChange={searchMovie}/>
            <label htmlFor="name">Recherche par catégorie</label>
            <input type="text" id="category" className="category" value={search.category} name="category" onChange={searchMovie}/>
                {/* <select name="sort" id="pet-select">
                    <option value=""></option>
                    <option value="titlee">Titre</option>
                    <option value="date">Date de sortie</option>
                    <option value="category">Catégorie</option>
                </select> */}
            <div className='collection'>
                {/* {newMovies.map((movie) => (
                <Link key={movie.id} to={`/movies/${movie.id}`} className="collection-item">
                    {movie.title}
                </Link>
                ))} */}
            </div>
        </form>
    )
}

export default FilmSelection
