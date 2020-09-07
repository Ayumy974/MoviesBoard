// *** Barre de navigation présente sur toutes les pages de l'application ***
// Permet juste un retour sur la Home au clic sur le logo et le titre
import React from 'react';
import { Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';

import style from './navigation.module.scss';

const movieIcon = require('./../../assets/icon/movie.svg');

const Navigation = () => {
    return (
        <header>
            <nav className={style.navigation}>
                <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title={<h5>Retour vers la page d'accueil</h5>}>
                    <Link to='/'><img src={movieIcon} alt="film"></img></Link>       
                </Tooltip>
                <Link to='/'><h1>Movies Board</h1></Link>
            </nav>
        </header>
    )
}

export default Navigation

