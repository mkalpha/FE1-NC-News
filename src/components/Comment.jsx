import React, { Component } from 'react'
import { navigate } from '@reach/router'
import axios from 'axios';

class Comment extends Component {

    state = {}

    render(){        
        return (<div className="commentWrapper">
        <div className="commentauthor">{this.props.comment.author}</div>
        <div className="commentbody">{this.props.comment.body}</div>
        <div className="commentMetaData">Date Posted: {this.props.comment.created_at} Votes: {this.props.comment.votes}
        <button onClick={this.deleteComment}>Delete comment</button></div>
        </div>
        )   
    }

    deleteComment = (event) => {
        event.preventDefault()
        console.log(this.props.comment.comment_id)
        axios.delete(`https://nc-knews-andrew-workman.herokuapp.com/api/comments/${this.props.comment.comment_id}`)
        .then((res) => {
            console.log(res)
            navigate(`/articles/${this.props.article_id}`)
        })

    }

}

export default Comment


  