import React, { Component } from 'react';
import { Router, Link } from '@reach/router'
import axios from 'axios';
import SortTopicsForm from '../components/SortTopicsForm';
import '../styles/Articles.css'




class Articles extends Component {
    state ={
        articlesData : null,
        topicToggle : null
    }

    render() {
        return (this.state.articlesData !== null && <div id="articlesWrapper">
            Articles
            <Router>
                <SortTopicsForm updateToggleTopic={this.updateToggleTopic} path= "/"/>
            </Router>
            <ul>
              {this.state.articlesData.map(article => {
                  return <li key={article.article_id}>
                            <div className="articleListWarpper">
                                <div className="articleListTitle"><Link to={`/articles/${article.article_id}`}><b>Title: </b>{article.title}</Link></div>
                                <div className="articleListTopic"><b>Topic: </b>{article.topic}</div>
                                <div className="articleListAuthor"><b>Author: </b>{article.author}</div>
                                <div className="articleListCommentCount">Comments: {article.comment_count}</div>
                                <div className="articleListVotes">Votes: {article.votes} </div>
                                <div className="articleListCreatedAt">Created at: {article.created_at}</div>
                            </div>
                        </li>
              })}
            </ul>
             
            
            </div>

            
        )
    }

    componentDidMount() {
        this.fetchArticles();
    }

    componentDidUpdate(_, prevState){
        if (this.state.topicToggle !== prevState.topicToggle) {
            this.fetchArticles()
        }

    }

    fetchArticles = () => {
        if (this.state.topicToggle === null || this.state.topicToggle === 'all') {
        axios.get('https://nc-knews-andrew-workman.herokuapp.com/api/articles')
        .then(articles  => {
            this.setState({articlesData : articles.data.articles})
        })
    } else {
        axios.get(`https://nc-knews-andrew-workman.herokuapp.com/api/articles?topic=${this.state.topicToggle}`)
        .then(articles  => {
            this.setState({articlesData : articles.data.articles})
        })
    }
    }

    updateToggleTopic = (topic) => {
        this.setState({ topicToggle : topic })
    }



   
}

export default Articles