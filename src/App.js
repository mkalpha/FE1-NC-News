import React, { Component } from 'react';
import './App.css';
import { Router, Link } from '@reach/router'
import Nav from './components/Nav';
import Articles from './components/Articles'
import Article from './components/Article'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Router>
            <Articles path="/"/>
            <Article path ="articles/:article_id/*" />
        </Router>
      </div>
    );
  }
}

export default App;
