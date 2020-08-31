import React, { useState } from 'react';
import style from './movieCard.module.scss';
import { useHistory } from 'react-router-dom';


const MovieCard = ({ movie }) => {
    const [display, setDisplay] = useState(false);
    const history = useHistory();
    const handleMouseEnter = () => setDisplay(true);
    const handleMouseLeave = () => setDisplay(false);

    goToMovieDetails = id => history.push(`/movies/${id}`);

    return (
        <div onClick={()=> goToMovieDetails(movie.id)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={style.card}>
            <img className={style.cardImage} src={movie.poster} alt={movie.title} />
            {display && 
                <div className={style.cardContent}>
                    <h3 className={style.cardTitle}>{movie.title}</h3>
                    <p>Date de sortie: {movie.release_date}</p>
                    <p className={style.cardDesc}>Synopsis: {movie.description}</p>
                </div>
            }
        </div>
    )
}

export default MovieCard;
