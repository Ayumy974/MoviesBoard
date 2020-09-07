import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

import Layout from './hoc/layout';
import MovieAdd from './pages/movieAdd/MovieAdd';
import MovieEdit from './pages/movieEdit/MovieEdit';

function App() {
  return (
    <Router>
        <ScrollToTop>
          <Switch>
            <Layout>
                <Route  exact path="/movies/edit/:id" component={MovieEdit} />
                <Route exact path="/movie/add" component={MovieAdd} />
            </Layout>
          </Switch>
        </ScrollToTop>
    </Router>
  );
}

export default App;
