// *** Page 2: affichage des détails du film ****
// Ici j'utilise deux hooks: le useState et le useEffect
// J'initialise mon state movie à null qui aura pour objectif de contenir le film recherché
// Le hook useEffect remplace les 3 méthodes du cycle de vie des classes en react: ici lorque que le paramètre id de l'url  est mise à jour, je fais une requête vers mon API locale pour récupérer le film par son id

import React, { useState, useEffect } from 'react';
import MovieService from '../../service/movieServices';
import MovieCard from '../../components/movieCard/MovieCard';
import Loader from '../../components/loader/Loader';
import styles from './movieDetails.module.scss';
import { useHistory } from 'react-router-dom';

const MovieDetails = ({ match, showMessage }) => {
    const history = useHistory();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        MovieService.getMovie(+match.params.id).then(movie => setMovie(movie));
    }, [match.params.id]);

    // Au clic sur l'icône suppression de la MovieCard, j'appelle la méthode deleteMovie de ma classe MovieService qui est une requête delete puis je redirige vers la page d'accueil grâce au hook useHistory
    const handleDeleteMovie = id => {
        MovieService.deleteMovie(id);
        history.push('/');
    }
    
    return (
    <article>
        {
            movie ? (
                <section className={styles.container}>
                    <MovieCard showMessage={showMessage} deleteFrontMovie={handleDeleteMovie} movie={movie} isShowDetails={true} />
                </section>
                ) : (
                <section className="center" style={{ marginTop: "100px" }}>
                    <Loader />
                    <h4 >Ce film n'existe pas ...</h4>
                </section>)
            }
    </article>
    )
}

export default MovieDetails
