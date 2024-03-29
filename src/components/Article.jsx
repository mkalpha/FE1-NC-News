import React, { Component } from 'react';
import axios from 'axios';
import { Router, navigate } from '@reach/router'
import Comments from '../components/Comments'
import AddComment from '../components/AddComment';
import { fetchSingleArticle } from '../api';
import { removeArticle } from '../api';
import '../styles/article.css'

class Article extends Component {

    state = {
        article : null,
        voteChange : 0,
        showAddFirstComment : false,
        isError : false
    }

    render() {
       
       return ( this.state.isError === true ? <h1>Error!!!</h1> :
           this.state.article !== null && <div id ="articleCommentWrapper">
            <div id ="articleWrapper">
            <h2><i className="fas fa-quote-left"></i>  {this.state.article.title}  <i className="fas fa-quote-right"></i></h2>
            <div id="articleBody"><p>{this.state.article.body}</p></div>
            <div>
                Author: {this.state.article.author} Date Created: {this.state.article.created_at.slice(0,10)} Comments {this.state.article.comment_count} Votes: {this.state.article.votes + this.state.voteChange}
            {(this.state.article.author !== this.props.user && this.props.user !== null && this.state.voteChange !== 1 ) && <button value="1" onClick={this.patchArticleVotes}>   Like </button>}
            {(this.state.article.author !== this.props.user && this.props.user !== null && this.state.voteChange !== -1) && <button value="-1" onClick={this.patchArticleVotes}>    Dislike  </button>}
            {this.state.article.author === this.props.user && <button onClick={this.deleteArticle}>Delete Article</button>}
            </div>
            <AddComment article_id={this.state.article.article_id} showAddFirstComment={this.state.showAddFirstComment} updateShowAddComment={this.updateShowAddComment} user={this.props.user} />
            </div>
            <Router>
                <Comments path="/" article_id={this.state.article_id} user={this.props.user} comment_count={this.state.article.comment_count} showAddFirstComment={this.state.showAddFirstComment} updateShowAddComment={this.updateShowAddComment}/>
            </Router>
           { console.log('Votes :' + this.state.article.votes + 'VoteChange :'+ this.state.voteChange)}
            </div>
            
        )
    }

    componentDidMount() {
        fetchSingleArticle(this.props.article_id).then((article) => {

            this.setState({ article : article.data.article[0] })
        }).catch(err => {
            console.log(err)
            this.setState({ isError : true })
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
        const currentVoteChange = this.state.voteChange +  Number.parseInt(event.target.value, 0)
        this.setState({ voteChange : currentVoteChange })
        axios.patch(`https://ncknews-production.up.railway.app/api/articles/${this.props.article_id}`, patchBody)
    }

    deleteArticle =  (event) => {
        event.preventDefault();
        removeArticle(this.props.article_id).then(() => {
            navigate('/')
        })
    }

    updateShowAddComment = () => {
        if (this.state.showAddFirstComment === true) {
            this.setState({ showAddFirstComment : false })
        }else if (this.state.article.comment_count === '0') {
            this.setState({ showAddFirstComment : true })
        }
    }
}



export default Article