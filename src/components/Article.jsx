import React, { Component } from 'react';
import axios from 'axios';
import { Router, navigate } from '@reach/router'
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
                Author: {this.state.article.author} Date Created: {this.state.article.created_at} Comments {this.state.article.comment_count} Votes: {this.state.article.votes}
            <button value="1" onClick={this.patchArticleVotes}>Vote up</button> 
            <button value="-1" onClick={this.patchArticleVotes}>vote down</button>
            <button onClick={this.deleteArticle}>Delete Article</button>
            </div>
            
            </div>
            <Router>
                <Comments path="/" article_id={this.state.article_id}/>
            </Router>
            </div>
        )
    }

    componentDidMount() {
        this.fetchSingleArticle()
    } 

    componentDidUpdate(prevProps, prevState) {
        console.log('Inside componentDidUpdate')
       if (prevProps !== this.props) {
            this.fetchSingleArticle()
        } 
    }

    fetchSingleArticle = () => {
        
        axios.get(`https://nc-knews-andrew-workman.herokuapp.com/api/articles/${this.props.article_id}`)
            .then(article => {
                this.setState({ article : article.data.article[0] })
            })
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
        axios.delete(`https://nc-knews-andrew-workman.herokuapp.com/api/articles/${this.props.article_id}`)
            .then(() => {
                navigate('/')
            }).catch(err => console.log(err))
    }


}



export default Article