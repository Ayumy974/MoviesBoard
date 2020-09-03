import React, { useState } from 'react';
import Movie from '../../models/movie';
// import MovieForm from '../../components/movieForm/MovieForm';

import SearchForm from '../../components/searchForm/SearchForm';

const MovieAdd = () => {
    const [movie] = useState(new Movie());
    return (
        <div>
            <h1>Pour ajouter un film</h1>
            <SearchForm />
            <hr></hr>
            {/* <MovieForm movie={movie}  /> */}
        </div>
    )
}

export default MovieAdd
