import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import SingleActor from './components/SingleActor';

class App extends Component {
  render() {
    return (
      <Router className="App">
      <div>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/single/:id" component={SingleActor} />
      </div>
      </Router>
    );
  }
}

export default App;
