import React, { Component } from 'react';
import axios from 'axios';
import { Router, Link } from '@reach/router'
import Comments from '../components/Comments'

class Article extends Component {

    state = {
        article : null
    }

    render() {
        return (this.state.article !== null && <div id ="articleCommentWrapper">
            <div id ="articleWrapper">
            <h2>{this.state.article.title}</h2>
            <p>{this.state.article.body}</p>
            <div>
                Author: {this.state.article.author} Date Created: {this.state.article.created_at} Votes: {this.state.article.votes} Comments {this.state.article.comment_count}
            </div>
            </div>
            <Router>
                <Comments path="/"/>
            </Router>
            </div>
        )
    }

    componentDidMount() {
        this.fetchSingleArticle()
    }

    fetchSingleArticle = () => {
        console.log(this.props.article_id)
        axios.get(`https://nc-knews-andrew-workman.herokuapp.com/api/articles/${this.props.article_id}`)
            .then(article => {
                console.log(article.data.article[0])
                this.setState({ article : article.data.article[0] })
            })
    }


}



export default Article