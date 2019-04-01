import React, { Component } from 'react';
import './App.css';
import { Router, Link } from '@reach/router'
import Nav from './components/Nav';
import HomeView from './components/HomeView'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Router>
            <HomeView path="/"/>
        </Router>
      </div>
    );
  }
}

export default App;
