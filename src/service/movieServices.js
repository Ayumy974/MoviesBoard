import axios from 'axios';

export default {
    getMovies: () => 
        axios({
            'method': 'GET',
            url: 'http://localhost:3000/movies',
        }),
    
    getMovie: id => 
        axios({
            'method': 'GET',
            'url': `http://localhost:3000/movies/${id}`,
        })
        .then(response => response.data)
        .catch(error => console.log(error))
    }
