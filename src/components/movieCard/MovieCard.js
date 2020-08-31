import React from 'react';
import style from './movieCard.module.scss';

const MovieCard = () => {
    return (
        <div className={style.card}>
            <img className={style.cardImage}/>
            <div className={style.cardContent}>
                <h3 className={style.cardTitle}>Titre:</h3>
                <p><small>Date de sortie:</small></p>
                <p className={style.cardDesc}>Description:</p>
            </div>
        </div>
    )
}

export default MovieCard;
