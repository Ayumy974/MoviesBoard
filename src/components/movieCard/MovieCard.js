import React, { useState } from 'react';
import style from './movieCard.module.scss';

const MovieCard = ({ movie }) => {
    const [display, setDisplay] = useState(false)

    const handleMouseEnter = () => setDisplay(true);
    const handleMouseLeave = () => setDisplay(false);

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={style.card}>
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