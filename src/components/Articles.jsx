import React, { Component } from 'react';
import { Link } from '@reach/router'
import SortTopicsForm from '../components/SortTopicsForm';
import '../styles/Articles.css';
import { fetchArticles } from '../api';




class Articles extends Component {
    state ={
        articlesData : null,
        topicToggle : null,
        sortBy : null
    }

    render() {
        return (this.state.articlesData !== null && <div id="articlesWrapper">             
            <SortTopicsForm updateToggleTopic={this.updateToggleTopic} updateSortBy={this.updateSortBy} topicsList={this.props.topicsList} />
            
            <ul>
              {this.state.articlesData.map(article => {
                  return <li key={article.article_id}>
                            <div className="articleListWrapper">
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
        fetchArticles(this.state.topicToggle, this.state.sortBy).then((articles) => {
            this.setState({ articlesData : articles })
        })
    }

    componentDidUpdate(_, prevState){
        if (this.state.topicToggle !== prevState.topicToggle || this.state.sortBy !== prevState.sortBy) {
            fetchArticles(this.state.topicToggle, this.state.sortBy).then((articles) => {
                this.setState( { articlesData : articles } )
            })
        }

    }
   
    updateToggleTopic = (topic) => {
        this.setState({ topicToggle : topic })
    }

    updateSortBy = (sortBy) => {
        this.setState({ sortBy : sortBy})
    }



   
}

export default Articles