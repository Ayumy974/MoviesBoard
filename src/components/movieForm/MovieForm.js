import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const MovieForm = ({ selectMovie, similarMovie, actors }) => {
    // Stockage du hook useHistory dans une variable pour rediriger vers la page d'accueil une fois le film ajouté:
    const history = useHistory();

    // Copie des props:
    const movieSelected = { ...selectMovie };
    const sm = [...similarMovie];
    const a = [...actors];
    
    // Limiter la liste des acteurs à 4:
    const e = actors.length - 4;
    actors.splice(4, e);
    
    // Données du film à envoyer au serveur REST:
    const data = {
        title: movieSelected.title,
        release_date: movieSelected.release_date,
        categories: movieSelected.categories,
        description: movieSelected.description,
        poster: movieSelected.poster,
        backdrop: movieSelected.backdrop,
        actors: a,
        similar_movies: sm,
    };
    
    
    // Soumission du formulaire: envoi des données du film au serveur REST puis redirection vers la page d'accueil:
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/movies", data)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
        history.push('/');   
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col s12 m8 offset-m2">
                    <div className="card hoverable"> 
                        <div className="card-image">
                            <img src={selectMovie.poster} alt={selectMovie.title} style={{ width: '250px', margin: '0 auto' }} />
                            <span className="btn-floating halfway-fab waves-effect waves-light"></span>
                        </div>
                        
                        <div className="card-stacked">
                            <div className="card-content">
                                {/* Movie Title */}
                                <div className="form-group">
                                    <label htmlFor="title">Titre:</label>
                                    <input type="text" name="title" id="title" value={selectMovie.title} className="form-control" placeholder={selectMovie.title}></input>
                                    {/* error */}
                                    {/* {form.title.error &&
                                    <div className="card-panel red accent-1">
                                        {form.title.error}
                                    </div>}   */}
                                </div>
                                {/* Movie date */}
                                <div className="form-group">
                                    <label htmlFor="date">Date de sortie:</label>
                                    <input id="date" type="date" name="date" className="form-control" value={selectMovie.release_date}></input>
                                    {/* error */}
                                    {/* {form.hp.error &&
                                    <div className="card-panel red accent-1"> 
                                    {form.hp.error}
                                    </div>}  */}
                                </div>
                                {/* Movie description */}
                                <div className="form-group">
                                        <label htmlFor="description">Description:</label>
                                        <textarea type='text' className="form-control" value={selectMovie.description}></textarea>
                                    {/* error */}
                                    {/* {form.cp.error &&
                                    <div className="card-panel red accent-1"> 
                                    {form.cp.error}
                                    </div>}  */}
                                </div>
                            </div>
                            </div>
                            <div className="categories">
                    Catégories:
                    <ul>
                    {selectMovie.categories.map((cat) => (
                        <li>{cat}</li>
                    ))}
                    </ul>
                </div>
                <div className="actors">
                    Acteurs:
                    <ul>
                    {actors.map((a) => (
                        <li>{a.name}</li>
                    ))}
                    </ul>
                </div>
                <div className="similar_movies">
                    Films similaires:
                    <ul>
                    {similarMovie.map((sm) => (
                        <li>Titre: {sm.title}</li>
                    ))}
                    </ul>
                </div>
                        <div className="card-action center">
                            {/* Submit button */}
                            <button type="submit" className="btn">Valider</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
            </>
        );
    };

export default MovieForm;
