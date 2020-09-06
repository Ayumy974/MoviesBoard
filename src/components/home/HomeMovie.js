import React from 'react';
import { Link } from 'react-router-dom';
import style from './homeMovie.module.scss';

const HomeMovie = ({research, onHandleInput}) => {

    return (
        <div className={style.container} id={style.bg}>
            <div className={style.research}>
                <h2>All your movies in One place</h2>
                <Link to='/movie/add'>
                    <a style={{ position: 'fixed', right: "25px", top: "80px" }} className="btn-floating btn-large waves-effect waves-light light-blue lighten-2"><i className="material-icons">add</i></a>
                </Link>
                <form>
                    <input color='blue' type="text" id="title"  value={research.title} name="title" onChange={onHandleInput} placeholder='Recherche par nom' required />
                    <input type="text" id="category" className="category" value={research.category} name="category" onChange={onHandleInput} placeholder='Recherche par catégorie' required/>
                </form>
            </div>
        </div>
    )
}

export default HomeMovie

