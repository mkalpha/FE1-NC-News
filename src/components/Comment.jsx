import React, { Component } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';
import { removeComment } from '../api';

class Comment extends Component {

    state = {}

    render(){
    
        return (<div className="commentWrapper"> 
        <div className="commentauthor">{this.props.comment.author}</div>
        <div className="commentbody">{this.props.comment.body}</div>
        <div className="commentMetaData">Date Posted: {this.props.comment.created_at} Votes: {this.props.comment.votes}             
        {this.props.comment.author !== this.props.user && <button value="1" onClick={this.patchCommentVotes}>Vote up</button> }
        {this.props.comment.author !== this.props.user && <button value="-1" onClick={this.patchCommentVotes}>vote down</button>}
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
        axios.patch(`https://nc-knews-andrew-workman.herokuapp.com/api/comments/${this.props.comment.comment_id}`, patchVotesBody)
            .then((res) => {
                navigate(`/articles/${this.props.article_id}`)
            })
    }

}

export default Comment


  