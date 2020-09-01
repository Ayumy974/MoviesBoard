import React from 'react';
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import style from './navigation.module.scss';
const movieIcon = require('./../../assets/icon/movie.svg');

const Navigation = () => {

    return (
        <nav className={style.navigation}>
            <img src={movieIcon} alt="film"></img>
            <Link to='/'>
                <h1>Movies Board</h1>
            </Link>
            <Link to='/movie/add'>
                <Fab color="primary" aria-label="add" style={{ position: 'fixed', right: "25px", top: "10px" }}>
                    <AddIcon />
                </Fab>
            </Link>
        </nav>
    )
}

export default Navigation

