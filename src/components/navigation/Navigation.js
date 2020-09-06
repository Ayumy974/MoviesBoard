import React from 'react';
import { Link } from 'react-router-dom';

import style from './navigation.module.scss';
const movieIcon = require('./../../assets/icon/movie.svg');

const Navigation = () => {
    return (
        <header>
            <nav className={style.navigation}>
                <Link to='/'><img src={movieIcon} alt="film"></img></Link>
                <Link to='/'><h1>Movies Board</h1></Link>
            </nav>
        </header>
    )
}

export default Navigation

