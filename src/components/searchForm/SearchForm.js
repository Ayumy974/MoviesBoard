// *** Champ de recherche d'un film par nom dans la page d'ajout ***
import React, { useState } from 'react';

const SearchForm = ({formik}) => {

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="title">Titre:</label>
                <input type="text" name="title" id="title" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.title} placeholder={formik.values.title}/>
                {formik.touched.title && formik.errors.title ? (
                <div>{formik.errors.title}</div>
                ) : null}
                {/* <label htmlFor="date">Date de sortie:</label>
                <input type="date" name="date" id="date" onChange={formik.handleChange} onBlur={formik.handleBlur}value={formik.values.date}/>
                {formik.touched.date && formik.errors.date ? (
                <div>{formik.errors.date}</div>
                ) : null} */}
                <button className="btn" type="submit">C'est parti</button>
            </form>
        </>
    );
};

export default SearchForm
