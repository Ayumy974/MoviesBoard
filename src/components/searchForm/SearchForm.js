import React, { useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import SelectDropdown from './SelectDropdown';

const SearchForm = () => {
    const [movie, setMovie] = useState(null);

    const formik = useFormik({
        initialValues: {
            title: '',
            date: '',
        },
        validationSchema: Yup.object().shape({
            title: Yup.string().min(2, "Deux caractères minimum").max(255, "255 caractères maximum").required("Vous devez entrer au moins un titre"),
            date: Yup.date().max(new Date())
                .required(),
        }),
        onSubmit: async (values) => {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c02af810400f5deb3c8e1d432b4a9775&language=en-US&query=${values.title}&date=${values.date}&page=1&include_adult=false`)
                .then(response => {
                    setMovie(response.data.results);
                    console.log(movie)
                })
                .catch(error => console.log(error))
        }
    })

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="title">Titre:</label>
                <input type="text" name="title" id="title" onChange={formik.handleChange} onBlur={formik.handleBlur}value={formik.values.title}/>
                {formik.touched.title && formik.errors.title ? (
                <div>{formik.errors.title}</div>
                ) : null}
                <label htmlFor="date">Date de sortie:</label>
                <input type="date" name="date" id="date" onChange={formik.handleChange} onBlur={formik.handleBlur}value={formik.values.date}/>
                {formik.touched.date && formik.errors.date ? (
                <div>{formik.errors.date}</div>
                ) : null}
                <button type="submit">OK</button>
            </form>
            {movie ? (
                <SelectDropdown movie={movie} />
            ) : ('')}
        </>
    );
};

export default SearchForm
