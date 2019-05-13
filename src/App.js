import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router'
import Nav from './components/Nav';
import Articles from './components/Articles'
import Article from './components/Article'
import SideDrawer from './components/SideDrawer'
import BackDrop from'./components/BackDrop'
import { getAllTopics } from '../src/api'

class App extends Component {

  state = {
    user : null,
    topicsList : null,
    toggleTopic : null,
    sideDrawerOpen : false,
    page : 1
  }

  render() {
    return ( 
      <div className="App" style={{height : '100%'}}> 
        <Nav logInUser={this.logInUser} user={this.state.user} topicsList={this.state.topicsList} fetchAllTopics={this.fetchAllTopics} updateToggleTopic={this.updateToggleTopic} drawerToggleHandler={this.drawerToggleHandler} page={this.state.page} resetPage={this.resetPage}  />
        {this.state.sideDrawerOpen === true && <SideDrawer topicsList={this.state.topicsList} fetchAllTopics={this.fetchAllTopics} updateToggleTopic={this.updateToggleTopic} drawerToggleHandler={this.drawerToggleHandler} />}
        {this.state.sideDrawerOpen === true && <BackDrop drawerToggleHandler={this.drawerToggleHandler} />}
        <Router>
            <Articles path="/" topicsList={this.state.topicsList} toggleTopic={this.state.toggleTopic} changePage={this.changePage} page={this.state.page} />
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
      this.setState( {topicsList : topics} )
   })
  }

fetchAllTopics = () => {
     getAllTopics().then((topics) => {
      this.setState( {topicsList : topics} )
   })
  }

  updateToggleTopic = (topic) => {
        this.setState({ toggleTopic : topic })
    }
  
  drawerToggleHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen : !prevState.sideDrawerOpen}
    });
  }

  changePage = (event) => {
    const change = Number.parseInt(event.target.value, 0)
    const newPage = this.state.page + change;
    this.setState( { page : newPage } )
}

  resetPage = () => {
    this.setState( { page : 1 } )
}

}

export default App;
