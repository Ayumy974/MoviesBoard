// *** Requêtes vers le serveur REST ***
// Implémentation d'une classe MovieService et de méthodes static
// Avec l'usage de la méthode static, nous n'avons pas à instancier notre service et nous pouvons utiliser la classe MovieService directement

// Utilisation de la librairie axios pour effectuer les requêtes vers l'API rest
import axios from 'axios';

export default class MovieService {

    // static getMovies() {
    //     return axios({
    //         'method': 'GET',
    //         url: 'http://localhost:3000/movies',
    //     })
    // }
    
    static getMovie(id) {
        return axios({
            'method': 'GET',
            'url': `http://localhost:3000/movies/${id}`,
        })
        .then(response => response.data)
        .catch(error => console.log(error))
    }

    static deleteMovie(id) {
        return axios({
            'method': 'DELETE',
            'url': `http://localhost:3000/movies/${id}`,
        })
        .then(response => response.data)
        .catch(error => console.log(error))
    }

    static searchMovie(title, category) {
        let queryParams = [];
        if (title && title !== '') {
            queryParams.push(`title_like=${title}`);
        }
        if (category && category !== '') {
            queryParams.push(`categories_like=${category}`);
        }
        return axios({
            'method': 'GET',
            'url': `http://localhost:3000/movies?${queryParams.join('&')}`
        })
        .catch(error => console.log(error))
    }
}
