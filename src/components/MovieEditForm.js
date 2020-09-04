import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const MovieEditForm = ({ movie }) => {
    const history = useHistory();
    
    const [form, setForm] = useState({
        image: {value: movie.poster, isValid: true},
        title: {value: movie.title, isValid: true},
        date: {value: movie.release_date, isValid: true},
        description: {value: movie.description, isValid: true},
    })

    const handleInputChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        const newField = { [fieldName]: { value: fieldValue } };
        setForm({ ...form, ...newField });
    }

    // Validator form:
    const validateForm = () => {
        let newForm = form;
        
        // Validator url
            const start = "https://image.tmdb.org/t/p/w342/";
            const end = "png";
            if (!form.image.value.startsWith(start) && !form.image.value.endsWith(end)) {
                const errorMsg = "L'url n'est pas valide";
                const newField = { value: form.image.value, error: errorMsg, isValid: false };
                newForm = { ...newForm, ...{ image: newField } };
            } else {
                const newField = { value: form.image.value, error: '', isValid: true };
                newForm = { ...newForm, ...{ image: newField } };
            }
        
        // Validator title
        if (!/^[a-zA-Zàéè ]{2,10}$/.test(form.title.value)) {
            const errorMsg = 'Le titre du film est requis (2-10).';
            const newField  = { value: form.title.value, error: errorMsg, isValid: false };
            newForm = { ...newForm, ...{ title: newField } };
        } else {
            const newField = { value: form.title.value, error: '', isValid: true };
            newForm = { ...newForm, ...{title: newField } };
        }

        // Validator date 
        if (!form.date.value) {
            const errorMsg = 'La date est requise.';
            const newField  = { value: form.date.value, error: errorMsg, isValid: false };
            newForm = { ...newForm, ...{ date: newField } };
        } else {
            const newField = { value: form.date.value, error: '', isValid: true };
            newForm = { ...newForm, ...{date: newField } };
        }
        // Validator description
        if (!/^[a-zA-Zàéè ]{3,30}$/.test(form.description.value)) {
            const errorMsg = 'Le synopsis du film est requis (3-30).';
            const newField  = { value: form.description.value, error: errorMsg, isValid: false };
            newForm = { ...newForm, ...{ description: newField } };
        } else {
            const newField = { value: form.description.value, error: '', isValid: true };
            newForm = { ...newForm, ...{description: newField } };
        }
        setForm(newForm);
        return newForm.image.isValid && newForm.title.isValid && newForm.date.isValid && newForm.description.isValid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const isFormValid = validateForm();
        
        if (isFormValid) {
            movie.poster = form.image.value;
            movie.title= form.title.value;
            movie.date = form.date.value;
            movie.description = form.description.value;

            axios.patch(`http://localhost:3000/movies/${movie.id}`, {
            poster: form.title.image,
            title: form.title.value,
            release_date: form.date.value,
            description: form.description.value
            })
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
            history.push('/')
            };
    }
    


    return (
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div className="row">
                    <div className="col s12 m8 offset-m2">
                        <div className="card hoverable"> 
                            <div className="card-stacked">
                                <div className="card-content">
                                    {/* Movie image */}
                                    <div className="form-group">
                                        <label htmlFor="image">Image:</label>
                                        <input type="text" name="image" id="image" value={form.image.value} className="form-control" placeholder={movie.poster} onChange={(e)=>handleInputChange(e)}></input>
                                        {/* error */}
                                        {form.image.error &&
                                        <div className="card-panel red accent-1">
                                            {form.image.error}
                                        </div>}  
                                    </div>
                                    {/* Movie Title */}
                                    <div className="form-group">
                                        <label htmlFor="title">Titre:</label>
                                        <input type="text" name="title" id="title" value={form.title.value} className="form-control" placeholder={movie.title} onChange={(e)=>handleInputChange(e)}></input>
                                        {/* error */}
                                        {form.title.error &&
                                        <div className="card-panel red accent-1">
                                            {form.title.error}
                                        </div>}  
                                    </div>
                                    {/* Movie date */}
                                    <div className="form-group">
                                        <label htmlFor="date">Date de sortie:</label>
                                        <input id="date" type="date" name="date" className="form-control" value={form.date.value} onChange={(e)=>handleInputChange(e)}></input>
                                        {/* error */}
                                        {form.date.error &&
                                        <div className="card-panel red accent-1"> 
                                        {form.date.error}
                                        </div>} 
                                    </div>
                                    {/* Movie description */}
                                    <div className="form-group">
                                            <label htmlFor="description">Description:</label>
                                            <input type='text' className="form-control" name="description" value={form.description.value} placeholder={movie.description} onChange={(e)=>handleInputChange(e)}></input>
                                        {/* error */}
                                        {form.description.error &&
                                        <div className="card-panel red accent-1"> 
                                        {form.description.error}
                                        </div>} 
                                    </div>
                                    <div className="form-group">
                                        <select>
                                        {movie.categories.map(category => (
                                            <option value={category}>{category}</option>
                                            ))}
                                        </select>
                                    </div>
                                    {/* <div className="form-group">
                                        {movie.actors.map(actor => (
                                        <ul>
                                            <li><img src={actor.photo} alt={actor.name}></img></li>
                                            <li>{actor.name}</li>
                                            <li>{actor.character}</li>
                                        </ul>
                                        ))}
                                    </div> */}
                                    {/* <div className="form-group">
                                        {movie.similar_movies.map(sm => (
                                            <div className={styles.cardContent}>
                                                <img className={styles.cardImage} src={sm.poster} alt={sm.title} />
                                                <h3 className={styles.cardTitle}>{sm.title}</h3>
                                                <p>Date de sortie: {sm.release_date}</p>
                                            </div>
                                        ))}
                                    </div> */}
                                </div>
                            </div>
                            <div className="card-action center">
                                {/* Submit button */}
                                <button type="submit" className="btn">Valider</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>   
    )
}

export default MovieEditForm
