import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import DeleteButton from '../icons/DeleteButton';
import EditIcon from '@material-ui/icons/Edit';
import style from './movieCard.module.scss';


const MovieCard = ({ movie, deleteFrontMovie, loading }) => {
    const [display, setDisplay] = useState(false);
    const history = useHistory();
    const handleMouseEnter = () => setDisplay(true);
    const handleMouseLeave = () => setDisplay(false);

    const goToMovieDetails = id => history.push(`/movies/${id}`);
    const goToMovieEdit = id => history.push(`/movies/edit/${id}`);
    
        if (loading) {
            return <h2>Loading...</h2>;
        }
        return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={style.card}>
            <img
                onClick={() => goToMovieDetails(movie.id)}
                className={style.cardImage} src={movie.poster} alt={movie.title} />
            {display && 
                <div className={style.cardContent}>
                    <DeleteButton onDeleteMovie={() => deleteFrontMovie(movie.id)} />
                    <EditIcon onClick={() => goToMovieEdit(movie.id)}/>
                    <h3 className={style.cardTitle}>{movie.title}</h3>
                    <p>Date de sortie: {movie.release_date}</p>
                    <p className={style.cardDesc}>Synopsis: {movie.description}</p>
                </div>
            }
        </div>
    )
}

export default MovieCard;
