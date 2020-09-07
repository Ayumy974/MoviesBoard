import React, {useState, useEffect } from 'react';
import MovieService from '../../service/movieServices';
import MovieEditForm from '../../components/movieEdit/MovieEditForm';

const MovieEdit = ({ match }) => {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        MovieService.getMovie(+match.params.id).then(movie => setMovie(movie))
    }, [match.params.id]);

    const styleTitle = {
        textAlign: 'center',
        // fontFamily: 'Poppins',
        display: 'block',
        margin: '3rem',
        color: "rgba(36, 45, 48, 0.9)"
    }
    return (
        <article style={{marginTop: '100px'}}>
            <h2 style={styleTitle}>Ici, il vous suffit juste d'apporter vos modifications :)</h2>
            {movie ? (
                <MovieEditForm movie={movie} />
            ): (<p>Rien à afficher</p>)}
        </article>
    )
}

export default MovieEdit;
