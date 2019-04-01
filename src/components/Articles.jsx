import React, { Component } from 'react';
import { Router, Link } from '@reach/router'
import axios from 'axios';
import '../styles/Articles.css'



class Articles extends Component {
    state ={
        articlesData : null
    }

    render() {
        return (this.state.articlesData !== null && <div id="articlesWrapper">
            Articles
            <div>Sort by goes here</div>
            <ul>
              {this.state.articlesData.map(article => {
                  return <li>
                            <div className="articleListWarpper">
                                <div className="articleListTitle"><b>Title: </b>{article.title}</div>
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

    fetchArticles = () => {
        axios.get('https://nc-knews-andrew-workman.herokuapp.com/api/articles')
        .then(articles  => {
            this.setState({articlesData : articles.data.articles})
        })
    }



   
}

export default Articles