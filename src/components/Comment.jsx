import React, { Component } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';
import { removeComment } from '../api';
import '../styles/comment.css'

class Comment extends Component {

    state = {
        voteChange : 0
    }

    render(){
    
        return (<div className="commentWrapper"> 
        <div className="commentauthor">{this.props.comment.author}</div>
        <div className="commentbody">{this.props.comment.body}</div>
        <div className="commentMetaData">Date Posted: {this.props.comment.created_at.slice(0,10)} Votes: {this.props.comment.votes + this.state.voteChange}             
        {(this.props.comment.author !== this.props.user && this.props.user !== null && this.state.voteChange !== 1) && <button value="1" onClick={this.patchCommentVotes}> Like </button> }
        {(this.props.comment.author !== this.props.user && this.props.user !== null && this.state.voteChange !== -1) && <button value="-1" onClick={this.patchCommentVotes}>Dislike</button>}
        {this.props.comment.author === this.props.user && <button onClick={this.deleteComment}>Delete comment</button>}
    </div>
        </div>
        )   
    }

    deleteComment = (event) => {
        event.preventDefault()
        removeComment(this.props.comment.comment_id).then(() => {
            navigate(`/articles/${this.props.article_id}`)
        })
    }

    patchCommentVotes = (event) => {
        const patchVotesBody = {
            inc_votes : Number.parseInt(event.target.value, 0)
        }
        const currentVoteChange = this.state.voteChange +  Number.parseInt(event.target.value, 0)
        this.setState({ voteChange : currentVoteChange })
        axios.patch(`https://nc-knews-andrew-workman.herokuapp.com/api/comments/${this.props.comment.comment_id}`, patchVotesBody)
    }

}

export default Comment


  