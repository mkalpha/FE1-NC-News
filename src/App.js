import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router'
import Nav from './components/Nav';
import Articles from './components/Articles'
import Article from './components/Article'
import getAllTopics from '../src/api'

class App extends Component {

  state = {
    user : null,
    topicsList : null
  }

  render() {
    return ( 
      <div className="App"> {this.state.topicsList !== null && console.log(this.state.topicsList)}
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
    getAllTopics().then((topics) => {
      console.log(topics)
      this.setState( {topicsList : topics} )
   })
  }

fetchAllTopics = () => {
     getAllTopics().then((topics) => {
      console.log(topics)
      this.setState( {topicsList : topics} )
   })
  }

}

export default App;
