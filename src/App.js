import React, { Component } from 'react';
import './App.css';
import { Router, Link } from '@reach/router'
import Nav from './components/Nav';
// import HomeView from './components/HomeView'
import Articles from './components/Articles'
import Article from './components/Article'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Router>
            {/* <HomeView path="/"/> */}
            <Articles path="/"/>
            <Article path ="articles/:article_id/*" />
        </Router>
      </div>
    );
  }
}

export default App;
