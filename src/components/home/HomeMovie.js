// *** Component de présentation d el'appliaction en page 1 avec les champs de recherche de filsm ***

import React from 'react';
import { Link } from 'react-router-dom'; // pour la naviagtion, remplace la balise <a>
import style from './homeMovie.module.scss';
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';

const HomeMovie = ({ research, onHandleInput }) => {
    // props research: permet de passer au parent Movie les valeurs de mes inputs
    // props onHandleInput: fonction déclarée dans le composant parent pour mettre à jour mon state avec la valeur des inputs

    return (
        <div className={style.container} id={style.bg}>
            <div className={style.research}>
                <h2>All your movies in One place</h2>
                {/* Bouton d'ajout d'un nouveau film qui redirige au clic vers la page d'ajout */}
                <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title={<h5>Ajouter un film</h5>}>
                    <Link to='/movie/add' style={{ position: 'fixed', right: "25px", top: "80px" }} className="btn-floating btn-large waves-effect waves-light light-blue lighten-2" >
                            <i className="material-icons">add</i>
                    </Link>   
                </Tooltip>
                <form>
                    <input color='blue' type="text" id="title"  value={research.title} name="title" onChange={onHandleInput} placeholder='Recherche par nom' required />
                    <input type="text" id="category" className="category" value={research.category} name="category" onChange={onHandleInput} placeholder='Recherche par catégorie' required/>
                </form>
            </div>
        </div>
    )
}

export default HomeMovie

