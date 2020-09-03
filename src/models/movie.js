export default class Movie {
    // 1. Définition des valeurs par défaut des propriétés d'un film.
    constructor(
        title,
        release_date,
        categories = [],
        description,
        img,
        actors = [],
        similar_movies = [],
        id,
    )
    {
        // 2. Initialisation des propiétés d'un movie.
        this.title = title;
        this.release_date = release_date;
        this.categories = categories;
        this.description = description;
        this.img = img;
        this.actors = actors;
        this.similar_movies = similar_movies;
        this.id = id;
    }
}