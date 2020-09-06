import React from 'react';
import { Link } from 'react-router-dom';
import style from './deleteModal.module.scss';
import closingCross from "../../assets/icon/icone-close.svg";

const DeleteModal = ({hideModal, showModal}) => {
    
    return (
        <section onClick={hideModal} className={ showModal ? `${style.bg_container} ${style.fadeIn}` : style.bg_container}>
            <div className={style.container}>
                <div className={style.banner}>
                    <img onClick={hideModal} className={style.closingCross} src={closingCross} alt="" />
                    {/* <div className={style.text}> */}
                    <h4>Votre film a bien été supprimé</h4>
                    {/* </div> */}
                </div>
            </div>
        </section>
    )
}

export default DeleteModal;
