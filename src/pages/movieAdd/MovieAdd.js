import React, { useState } from 'react';
import Movie from '../../models/movie';

import SearchForm from '../../components/searchForm/SearchForm';

const MovieAdd = () => {
    const [movie] = useState(new Movie());
    return (
        <div>
            <h1>Pour ajouter un film</h1>
            <SearchForm />
            {/* <MovieForm movie={movie}  /> */}
        </div>
    )
}

export default MovieAdd
