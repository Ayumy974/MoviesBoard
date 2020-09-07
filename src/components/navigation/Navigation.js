// *** Barre de navigation présente sur toutes les pages de l'application ***
// Permet juste un retour sur la Home au clic sur le logo et le titre
import React from 'react';
import { Link } from 'react-router-dom';

import style from './navigation.module.scss';

const movieIcon = require('./../../assets/icon/movie.svg');

const Navigation = () => {
    return (
        <header>
            <nav className={style.navigation}>
                <Link to='/' className="tooltipped" data-position="bottom" data-tooltip="Page d'accueil"><img src={movieIcon} alt="film"></img></Link>
                <Link to='/' className="tooltipped" data-position="bottom" data-tooltip="Page d'accueil"><h1>Movies Board</h1></Link>
            </nav>
        </header>
    )
}

export default Navigation

