import React, { Component } from 'react';
import axios from 'axios';
import { Router, navigate } from '@reach/router'
import Comments from '../components/Comments'
import AddComment from '../components/AddComment';
import { fetchSingleArticle } from '../api';
import { removeArticle } from '../api';

class Article extends Component {

    state = {
        article : null,
        voteChange : 0,
    }

    render() {
       return (this.state.article !== null && <div id ="articleCommentWrapper"> 
            <div id ="articleWrapper">
            <h2>{this.state.article.title}</h2>
            <p>{this.state.article.body}</p>
            <div>
                Author: {this.state.article.author} Date Created: {this.state.article.created_at} Comments {this.state.article.comment_count} Votes: {this.state.article.votes}
            {this.state.article.author !== this.props.user && <button value="1" onClick={this.patchArticleVotes}>Vote up</button>}
            {this.state.article.author !== this.props.user && <button value="-1" onClick={this.patchArticleVotes}>vote down</button>}
            {this.state.article.author === this.props.user && <button onClick={this.deleteArticle}>Delete Article</button>}
            </div>
            <AddComment article_id={this.state.article.article_id} />
            </div>
            <Router>
                <Comments path="/" article_id={this.state.article_id} user={this.props.user}/>
            </Router>
            </div>
        )
    }

    componentDidMount() {
        fetchSingleArticle(this.props.article_id).then((article) => {
            this.setState({ article : article.data.article[0] })
        })
    } 

    componentDidUpdate(prevProps, prevState) {
       if (prevProps !== this.props) {
            fetchSingleArticle(this.props.article_id).then((article) => {
                this.setState({ article : article.data.article[0] })
            })
        } 
    }

    patchArticleVotes = (event) => {
        const patchBody = {
            inc_votes : Number.parseInt(event.target.value, 0)
        }
        axios.patch(`https://nc-knews-andrew-workman.herokuapp.com/api/articles/${this.props.article_id}`, patchBody)
        .then(patchedArticle => {
            this.setState({ article : patchedArticle.data.returnedArticle[0] })
        })
    }

    deleteArticle =  (event) => {
        event.preventDefault();
        removeArticle(this.props.article_id).then(() => {
            navigate('/')
        })
    }
}



export default Article