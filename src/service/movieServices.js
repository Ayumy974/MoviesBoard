import axios from 'axios';

const api =  axios.create({
    baseUrl: 'http://localhost:3000/movies'
})

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

    // static getSelectedMovie(id) {
    //     return axios({
    //         'method': 'GET',
    //         'url': `https://api.themoviedb.org/3/movie/${id}?api_key=c02af810400f5deb3c8e1d432b4a9775&language=en-US&page=1`,
    //     })
    //     .then(response => response.data)
    //     .catch(error => console.log(error))
    // }

    // static getSimilarMovie(id) {
    //     return axios({
    //         'method': 'GET',
    //         'url': `https://api.themoviedb.org/3/movie/${id}/similar?api_key=c02af810400f5deb3c8e1d432b4a9775&language=en-US&page=1`,
    //     })
    //     .then(response => response.data)
    //     .catch(error => console.log(error))
    // }

    // static addMovie(movie) {
    //     return axios({
    //         'method': 'POST',
    //         url: 'http://localhost:3000/movies',
    //         body: JSON.stringify(movie),
    //     })
    //     .then(response => response.data)
    //     .catch(error => console.log(error))
    // }

    static deleteMovie(id) {
        return axios({
            'method': 'DELETE',
            'url': `http://localhost:3000/movies/${id}`,
        })
        .then(response => response.data)
        .catch(error => console.log(error))
    }

    static searchMovie(title, category) {
        console.log(title, category)
        let queryParams = [];
        if (title && title !== '') {
            queryParams.push(`title_like=${title}`);
        }
        if (category && category !== '') {
            queryParams.push(`categories_like=${category}`);
        }
        console.log(queryParams)

        return axios({
            'method': 'GET',
            'url': `http://localhost:3000/movies?${queryParams.join('&')}`
        })
        // .then(response => console.log(response.data))
        .catch(error => console.log(error))
    }

    // static searchMovieByCategory(category) {
    //     return axios({
    //         'method': 'GET',
    //         'url': `http://localhost:3000/movies?categories_like=${category}`
    //     })
    //     // .then(response => console.log(response.data))
    //     .catch(error => console.log(error))
    // }
}
