import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SearchForm = () => {
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
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="title">Titre:</label>
            <input
                type="text"
                name="title"
                id="title"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
            />
            {formik.touched.title && formik.errors.title ? (
            <div>{formik.errors.title}</div>
            ) : null}
            <label htmlFor="date">Date de sortie:</label>
            <input
                type="date"
                name="date"
                id="date"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.date}
            />
            {formik.touched.date && formik.errors.date ? (
            <div>{formik.errors.date}</div>
            ) : null}
            <button type="submit">OK</button>
        </form>
    );
};

export default SearchForm
