import React from 'react';
import { useHistory } from 'react-router-dom';
import DeleteButton from '../icons/DeleteButton';
import EditButton from '../icons/EditButton';
import style from './movieCard.module.scss';
import Movies from '../../pages/Movies/Movies';


const MovieCard = ({ movie, deleteFrontMovie, isShowDetails, showMessage }) => {
    const history = useHistory();
    const e = movie.actors.length - 4;
    movie.actors.splice(4, e);
    const goToMovieDetails = id => history.push(`/movies/${id}`);
    const goToMovieEdit = id => history.push(`/movies/edit/${id}`);


    return (  
        <section className={style.card}>
            <div className={!isShowDetails ? style.image : ''} onClick={() => goToMovieDetails(movie.id)} >
                <img  src={movie.poster} alt={movie.title} />
            </div>
            <div className={style.cardContent}>
                <div className={style.edition}>
                    <DeleteButton showMessage={showMessage} onDeleteMovie={() => deleteFrontMovie(movie.id)} />
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
                        ))
                        }
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
            {/* </Link> */}
        </section>
    )
}

export default MovieCard;
