import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

import Navigation from './components/navigation/Navigation';
import Movies from './pages/Movies/Movies';
import MovieDetails from './pages/movieDetails/MovieDetails';
import MovieAdd from './pages/movieAdd/MovieAdd';
import MovieEdit from './pages/movieEdit/MovieEdit';

function App() {
  return (
    <Router>
        <Navigation />
        <ScrollToTop>
            <Switch>
              <main>
                <Route exact path="/" component={Movies} />
                <Route exact path="/movies" component={Movies} />
                <Route  exact path="/movies/edit/:id" component={MovieEdit} />
                <Route exact path="/movies/:id" component={MovieDetails} />
                <Route exact path="/movie/add" component={MovieAdd} />
              </main>
            </Switch>
        </ScrollToTop>
    </Router>
  );
}

export default App;
