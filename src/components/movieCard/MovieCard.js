// *** Composant MovieCard présent dans la page 1 Home et dans la page 2 Détails ***

import React from 'react';
import { useHistory } from 'react-router-dom';
import DeleteButton from '../icons/DeleteButton';
import EditButton from '../icons/EditButton';
import style from './movieCard.module.scss';

const MovieCard = ({ movie, deleteFrontMovie, isShowDetails, showMessage }) => {
    
    // stockage de l'objet history pour pouvoir accéder à la page de détails du film avec son id
    const history = useHistory();

    // Affichage de 4 acteurs uniquement dans le front
    const e = movie.actors.length - 4;
    movie.actors.splice(4, e);

    // Méthodes pour naviguer dans l'application en se servant du hokk useHistory fourni par la librairie react-router-dom
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

            {/* // *** Pour différencier le rendu en fonction du lieu d'affichage de la movieCard dans l'application ***
            // Ici si le booléen isShowDetails est affecté à true, alors j'afficherai dans la pge 2 de détails du films, les catégories, les acteurs et les films similaires. */}

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
                                <li>{actor.photo.endsWith('null') ? ('') : (<img src={actor.photo} alt={actor.name}></img>)}</li>
                                <li><em>Nom:</em> {actor.name}</li>
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
        </section>
    )
}

export default MovieCard
