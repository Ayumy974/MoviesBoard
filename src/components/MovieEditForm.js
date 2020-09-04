import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const MovieEditForm = ({ movie }) => {
    const history = useHistory();

    const [title, setTitle] = useState(movie.title);
    const [date, setDate] = useState(movie.release_date);
    const [description, setDescription] = useState(movie.description);

    const handleSubmit = () => {
        axios.patch(`http://localhost:3000/movies/${movie.id}`, {
                title: title,
                release_date: date,
                description: description
            })
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
            history.push('/');
    }
    return (
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col s12 m8 offset-m2">
                        <div className="card hoverable"> 
                            <div className="card-stacked">
                                <div className="card-content">
                                    {/* Movie image */}
                                    <div className="form-group">
                                        <label htmlFor="image">Image:</label>
                                        <input type="text" name="image" id="image" value={movie.poster} className="form-control" placeholder={movie.poster}></input>
                                        {/* error */}
                                        {/* {form.title.error &&
                                        <div className="card-panel red accent-1">
                                            {form.title.error}
                                        </div>}   */}
                                    </div>
                                    {/* Movie Title */}
                                    <div className="form-group">
                                        <label htmlFor="title">Titre:</label>
                                        <input type="text" name="title" id="title" value={title} className="form-control" placeholder={movie.title} onChange={(e)=>setTitle(e.target.value)}></input>
                                        {/* error */}
                                        {/* {form.title.error &&
                                        <div className="card-panel red accent-1">
                                            {form.title.error}
                                        </div>}   */}
                                    </div>
                                    {/* Movie date */}
                                    <div className="form-group">
                                        <label htmlFor="date">Date de sortie:</label>
                                        <input id="date" type="date" name="date" className="form-control" value={date} onChange={(e)=>setDate(e.target.value)}></input>
                                        {/* error */}
                                        {/* {form.hp.error &&
                                        <div className="card-panel red accent-1"> 
                                        {form.hp.error}
                                        </div>}  */}
                                    </div>
                                    {/* Movie description */}
                                    <div className="form-group">
                                            <label htmlFor="description">Description:</label>
                                            <textarea type='text' className="form-control" value={description} placeholder={movie.description} onChange={(e=>setDescription(e.target.value))}></textarea>
                                        {/* error */}
                                        {/* {form.cp.error &&
                                        <div className="card-panel red accent-1"> 
                                        {form.cp.error}
                                        </div>}  */}
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
