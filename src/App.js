import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Movies from './pages/Movies';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Movies} />
      </Switch>
    </Router>
  );
}

export default App;
