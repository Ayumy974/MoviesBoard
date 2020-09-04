import React, {useState, useEffect } from 'react';
import MovieService from '../../service/movieServices';
import MovieEditForm from '../../components/MovieEditForm';

const MovieEdit = ({ match }) => {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        MovieService.getMovie(+match.params.id).then(movie => setMovie(movie))
    }, [match.params.id]);

    return (
        <div>
            <h1>Modification</h1>
            {movie ? (
                <MovieEditForm movie={movie} />
            ): (<p>Rien à afficher</p>)}
        </div>
    )
}

export default MovieEdit;
