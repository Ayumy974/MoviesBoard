import React, { useState, useEffect } from "react";
// import MovieService from '../../service/movieServices';
import { Dropdown, Form } from "semantic-ui-react";
import MovieForm from "../../components/movieForm/MovieForm";
import axios from "axios";

const SelectDropdown = ({ results }) => {
    const [actors, setActors] = useState([]);
    const [sm, setSm] = useState([]);
    const [selectMovie, setSelectMovie] = useState({
        title: "",
        release_date: "",
        categories: [],
        description: "",
        poster: "",
        backdrop: "",
        id: "",
    });
    const [id, setId] = useState("");

    useEffect(() => {
        console.log(id);
        axios.get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=c02af810400f5deb3c8e1d432b4a9775&language=en-US&page=1`
        )
        .then((response) => {
            setSelectMovie({
                title: response.data.title,
                release_date: response.data.release_date,
                categories: response.data.genres.map( item =>  item.name),
                description: response.data.overview,
                poster: `https://image.tmdb.org/t/p/w342${response.data.poster_path}`,
                backdrop: `https://image.tmdb.org/t/p/w342${response.data.backdrop_path}`,
            });
            console.log(response.data, selectMovie.categories);
        })
        .catch((error) => console.log(error));

        axios.get(
            `https://api.themoviedb.org/3/movie/${id}/similar?api_key=c02af810400f5deb3c8e1d432b4a9775&language=en-US&page=1`
        )
            .then((response) => {
            const res = [...response.data.results];
            const moviesToSend = res.map(movie => {
                const newMovie = {
                    title: movie.title,
                    poster: `https://image.tmdb.org/t/p/w342${movie.poster_path}`,
                    release_date: movie.release_date
                };
                // newMovie.release_date = movie.release_date;
                // newMovie.poster = movie.poster_path;
                // newMovie.title = movie.title;
                return newMovie;
            });
                setSm(moviesToSend);
        })
        .catch((error) => console.log(error));

    axios.get(
            `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c02af810400f5deb3c8e1d432b4a9775&language=en-US&page=1`
        )
        .then((response) => {
            const res = response.data.cast;
            const castToSend = res.map(cast => {
                const newCast = {
                    name: cast.name,
                    photo: `https://image.tmdb.org/t/p/w342${cast.profile_path}`,
                    character: cast.character
                }
                return newCast;
            })
            setActors(castToSend);
            console.log(response.data.cast);
        })
        .catch((error) => console.log(error));
    }, [id]);

    const options = results.map((m) => {
        const d = new Date(m.release_date);
        return {
        key: m.id,
        text: `${m.title} / Sortie le: ${d.toLocaleDateString()}`,
        value: m.id,
        };
    });

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const m = { ...selectMovie };
  //     console.log(m)
  //     axios.post('http://localhost:3000/movies',{
  //         title: m.title,
  //         release_date: m.release_date,
  //         categories: [],
  //         description: m.overview,
  //         poster: m.backdrop_path,
  //         backdrop: '',
  //         actors: [],
  //         similar_movies: [],
  //         id: m.id,
  //     })
  //     .then(response => console.log(response))
  //     .catch(error => console.log(error))
  //     console.log(selectMovie)
  // }

  return (
    <div>
      <Dropdown
        placeholder="Résultats"
        fluid
        selection
        options={options}
        onChange={(e, { value }) => setId(value)}
      />
      <MovieForm selectMovie={selectMovie} similarMovie={sm} actors={actors} />
    </div>
  );
};

export default SelectDropdown;
