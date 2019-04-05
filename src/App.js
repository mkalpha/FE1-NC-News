import React, { Component } from 'react';
import './App.css';
import { Router, Link } from '@reach/router'
import Nav from './components/Nav';
import Articles from './components/Articles'
import Article from './components/Article'
import axios from 'axios'

class App extends Component {

  state = {
    user : null,
    topicsList : null
  }

  render() {
    return (
      <div className="App">
        <Nav logInUser={this.logInUser} user={this.state.user} topicsList={this.state.topicsList} fetchAllTopics={this.fetchAllTopics}  />
        <Router>
            <Articles path="/" topicsList={this.state.topicsList} />
            <Article path ="articles/:article_id/*" user={this.state.user} />
        </Router>
      </div>
    );
  }

  logInUser = () => {
    this.state.user === null ? this.setState({ user : 'weegembump'}) : this.setState({ user : null})       
  }

  componentDidMount() {
    this.fetchAllTopics()
  }

fetchAllTopics = () => {
    axios.get('https://nc-knews-andrew-workman.herokuapp.com/api/topics')
            .then(topics => {
               this.setState({ topicsList : topics.data})
            })
  }

}

export default App;
