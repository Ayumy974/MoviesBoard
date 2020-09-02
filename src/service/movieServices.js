import axios from 'axios';

export default class MovieService {
    static getMovies() {
        return axios({
            'method': 'GET',
            url: 'http://localhost:3000/movies',
        })
    }
    
    static getMovie(id) {
        return axios({
            'method': 'GET',
            'url': `http://localhost:3000/movies/${id}`,
        })
        .then(response => response.data)
        .catch(error => console.log(error))
    }

    static addMovie(movie) {
        return axios({
            'method': 'POST',
            url: 'http://localhost:3000/movies',
            body: JSON.stringify(movie),
        })
        .then(response => response.data)
        .catch(error => console.log(error))
    }
}
