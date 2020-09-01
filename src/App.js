import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Movies from './pages/Movies';
import MovieDetails from './pages/movieDetails/MovieDetails';
import MovieAdd from './pages/movieAdd/MovieAdd';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Movies} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/movies/:id" component={MovieDetails} />
        <Route exact path="/movie/add" component={MovieAdd} />
      </Switch>
    </Router>
  );
}

export default App;
