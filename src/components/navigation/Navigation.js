import React from 'react';
import { Link } from 'react-router-dom';
// import Fab from '@material-ui/core/Fab';
// import AddIcon from '@material-ui/icons/Add';

import style from './navigation.module.scss';
const movieIcon = require('./../../assets/icon/movie.svg');

const Navigation = () => {

    return (
        <nav>
            <div className="nav-wrapper indigo darken-4">
                <Link to='/'><img src={movieIcon} alt="film"></img></Link>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><h1>Movies Board</h1></li>    
                </ul>
                <Link to='/movie/add'>
                    <a style={{ position: 'fixed', right: "25px", top: "80px" }} className="btn-floating btn-large waves-effect waves-light light-blue lighten-2"><i class="material-icons">add</i></a>

                    {/* <Fab color="primary" aria-label="add" style={{ position: 'fixed', right: "25px", top: "10px" }}>
                        <AddIcon />
                    </Fab> */}
                    </Link>
            </div>
        </nav>
    )
}

export default Navigation

