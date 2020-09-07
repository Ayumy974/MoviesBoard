import React, { useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import SearchForm from '../../components/searchForm/SearchForm';
import SelectDropdown from '../../components/searchForm/SelectDropdown';

const MovieAdd = () => {

    const [movie, setMovie] = useState(null);

    const formik = useFormik({
        initialValues: {
            title: ''
        },
        validationSchema: Yup.object().shape({
            title: Yup.string().min(2, "Deux caractères minimum").max(255, "255 caractères maximum").required("Vous devez entrer au moins un titre"),
            // date: Yup.date().max(new Date())
            //     .required(),
        }),
        onSubmit: async(values) => {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c02af810400f5deb3c8e1d432b4a9775&language=en-US&query=${values.title}&page=1&include_adult=false`)
            .then(response => {
                    setMovie(response.data.results);
                    console.log(movie)
            })
            .catch(error => console.log(error))
        },
    })
    return (
        <article style={{margin: '10rem auto', width: '85%'}}>
            <h1>Pour ajouter un film ...</h1>
            <SearchForm formik={formik} />
            {movie ? (
                <SelectDropdown results={movie} />
            ) : ('')}
        </article>
    )
}

export default MovieAdd
