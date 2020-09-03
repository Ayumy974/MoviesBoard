import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const MovieForm = ({ selectMovie, similarMovie, actors }) => {
    const e = actors.length - 4;
    const mainActors = actors.splice(4, e);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const movieSelected = { ...selectMovie };
        const sm = [...similarMovie];
        const a = [...actors];
        const data = 
            {
                title: movieSelected.title,
                release_date: movieSelected.release_date,
                categories: movieSelected.categories,
                description: movieSelected.description,
                poster: movieSelected.poster,
                backdrop: movieSelected.backdrop,
                actors: a,
                similar_movies: sm,
            };
        console.log("data à envoyer au serveur:", data);

        axios.post("http://localhost:3000/movies", data)
        .then((response) => console.log(response))
            .catch((error) => console.log(error));
        history.push('/');
    };

    return (
            <form onSubmit={handleSubmit}>
                <div className="title">
                    <label htmlFor="title">Titre:</label>
                    <input type="text" name="title" id="title" value={selectMovie.title} />
                </div>
                <div className="date">
                    <label htmlFor="date">Date de sortie:</label>
                    <input
                    type="date"
                    name="date"
                    id="date"
                    value={selectMovie.release_date}
                    />
                </div>
                <textarea className="description" value={selectMovie.description}></textarea>
                <img src={selectMovie.poster} alt={selectMovie.title} />
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
                <button type="submit">OK</button>
            </form>
        );
    };

export default MovieForm;
