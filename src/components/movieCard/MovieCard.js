import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import DeleteButton from '../icons/DeleteButton';
import EditButton from '../icons/EditButton';
import style from './movieCard.module.scss';


const MovieCard = ({ movie, deleteFrontMovie, isShowDetails }) => {
    // const [display, setDisplay] = useState(false);
    const history = useHistory();
    // const handleMouseEnter = () => setDisplay(true);
    // const handleMouseLeave = () => setDisplay(false);

    // const goToMovieDetails = id => history.push(`/movies/${id}`);
    const goToMovieEdit = id => history.push(`/movies/edit/${id}`);
    // onClick={() => goToMovieDetails(movie.id)}
    return (
        // <div className={style.card} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            
    <section className={style.card}>
        <Link to={`/movies/${movie.id}`}>
            <img  className={!isShowDetails ? style.image : ''} src={movie.poster} alt={movie.title} />
            <div className={style.cardContent}>
                <div className={style.edition}>
                    <DeleteButton onDeleteMovie={() => deleteFrontMovie(movie.id)} />
                    <EditButton onEditMovie={() => goToMovieEdit(movie.id)}/>
                </div>
                <hr></hr>
                <h3>{movie.title}</h3>
                <p>Date de sortie: {movie.release_date}</p>
                <p>Synopsis:<br></br> <small>{movie.description}</small></p>
            </div>
            {isShowDetails ? (
                <div className={style.infos}>
                    <ul>Catégories:
                    {movie.categories.map(category => (
                        <li>{category}</li>
                    ))}
                    </ul>
                    <h3>Distribution:</h3>
                    <div className={style.actors}>
                        {movie.actors.map(actor => (
                            <ul>
                                <li><img src={actor.photo} alt={actor.name}></img></li>
                                <li>Nom: {actor.name}</li>
                                <li>Rôle: {actor.character}</li>
                            </ul>
                        ))}
                    </div>
                    <div className={style.similarsMovies}>
                        {movie.similar_movies.map(sm => (
                            <div className={style.similarMovieCard}>
                                <img src={sm.poster} alt={sm.title} />
                            </div>
                        ))}
                    </div>
                </div>
                ): ('')}
            </Link>
        </section>
    )
}

export default MovieCard;
