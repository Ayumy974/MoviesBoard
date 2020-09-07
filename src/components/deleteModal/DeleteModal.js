// *** Modal faisant apparaître la confirmation de suppression d'un film ***
import React from 'react';
import style from './deleteModal.module.scss';

import closingCross from "../../assets/icon/icone-close.svg";

const DeleteModal = ({hideModal, showModal}) => {
    // Les props sont définis dans le HOC Layout.js
    // Le booléen showModal conditionne l'apparition de la modale
    // La fonction hideModal met à jour le state en passant showModal à false pour cacher la modale
    return (
        <section onClick={hideModal} className={ showModal ? `${style.bg_container} ${style.fadeIn}` : style.bg_container}>
            <div className={style.container}>
                <div className={style.banner}>
                    <img onClick={hideModal} className={style.closingCross} src={closingCross} alt="" />
                    <h4>Votre film a bien été supprimé</h4>
                </div>
            </div>
        </section>
    )
}

export default DeleteModal;
