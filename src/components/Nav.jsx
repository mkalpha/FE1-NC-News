import React, { Component } from 'react'
import { Link, navigate } from '@reach/router'
import '../styles/Nav.css'
import AddNewTopic from '../components/AddNewTopic'
import LogIn from '../components/LogIn'
import { postArticle } from '../api'


class Nav extends Component {
    state = {
        showAddArticle : true,
        articleTitle : '',
        articleBody : '',
        topic: 'football',
        addNewTopic : false,
        topicsList : null
    }
    render() {
    return (<div id="nav"><div id="navWrapper"> 
                    <div id ="logo"><b><Link to={'/'}><i className="fas fa-book-open"></i> NC NEWS</Link></b></div>
                    <LogIn user={this.props.user} logInUser={this.props.logInUser} hideNewArticle={this.hideNewArticle} />
                    {this.props.user !== null && <button className="navButton" onClick={this.handleClick}><b>Post New Article</b></button>}
            </div>
            
            {this.state.showAddArticle !== false || this.state.addNewTopic !== true &&<form id="postArticleForm" onSubmit={this.handleSubmit}>
                    Article Title: <input type="text" onChange={this.handleChange} value={this.state.articleTitle} name="articleTitle"></input>
                    Article Body<textarea onChange={this.handleChange} value={this.state.articleBody} name="articleBody"></textarea>
                    
                    Select Topic
                    <select onChange={this.handleChange} id="orderBySelector" name ="topic">
                    {this.props.topicsList !== null && this.props.topicsList.map(topic => {
                   return <option key={topic.slug} value={topic.slug}>{topic.slug}</option>
                    })}
                        <option value="addNewTopic">Add New Topic</option>

                    </select>
               
                <button>Submit Article</button>
           
            </form>}
            {this.state.addNewTopic !== false && <AddNewTopic viewTopic={this.viewTopic} fetchAllTopics={this.props.fetchAllTopics} topic={this.state.topic} updateTopic={this.updateTopic} />}
            </div> 
              
            
        )
    }

    handleClick = (event) => {
        event.preventDefault()
        this.state.showAddArticle === false ? this.setState({ showAddArticle : true}) : this.setState({ showAddArticle : false}) 
    }

    hideNewArticle = () => {
        this.setState({showAddArticle : true})
    }

    handleChange = (event) => {
        event.preventDefault()
        if(event.target.value === 'addNewTopic') this.viewTopic()
        const { value, name } = event.target
        this.setState({ [name] : value })  
    }

    viewTopic = () => {
        this.state.addNewTopic === true ? this.setState({ addNewTopic : false }) : this.setState({ addNewTopic : true })
    }

    updateTopic = (newTopic) => {
        this.setState({ topic : newTopic})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const articleToPost = {
            title: this.state.articleTitle,
            body: this.state.articleBody,
            topic: this.state.topic,
            author: this.props.user,
          };
          postArticle(articleToPost).then((newArticle) => {
            const newArticleId = newArticle.data.newArticle[0].article_id
                        this.setState({ showAddArticle : false,
                            articleTitle : '',
                            articleBody : '',
                            topic: 'football'})
                        navigate(`/articles/${newArticleId}`,)
          })
    }
}

export default Nav;