import React, { Component } from 'react';
import './App.css';
import { Router, Link } from '@reach/router'
import Nav from './components/Nav';
import Articles from './components/Articles'
import Article from './components/Article'

class App extends Component {

  state = {
    user : null
  }

  render() {
    {console.log(this.state.user)}
    return (
      <div className="App">
        <Nav logInUser={this.logInUser} user={this.state.user} />
        <Router>
            <Articles path="/" />
            <Article path ="articles/:article_id/*" user={this.state.user} />
        </Router>
      </div>
    );
  }

  logInUser = () => {
    this.state.user === null ? this.setState({ user : 'weegembump'}) : this.setState({ user : null})       
  }

}

export default App;
