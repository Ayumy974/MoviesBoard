import React, { useState } from 'react';

import SearchForm from '../../components/searchForm/SearchForm';

const MovieAdd = () => {
    return (
        <article style={{margin: '10rem auto', width: '85%'}}>
            <h1>Pour ajouter un film ...</h1>
            <SearchForm />
        </article>
    )
}

export default MovieAdd
