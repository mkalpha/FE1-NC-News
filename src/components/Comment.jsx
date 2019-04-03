import React, { Component } from 'react'

class Comment extends Component {

    state = {}

    render(){        
        return (<div className="commentWrapper">
        <div className="commentauthor">{this.props.comment.author}</div>
        <div className="commentbody">{this.props.comment.body}</div>
        <div className="commentMetaData">Date Posted: {this.props.comment.created_at} Votes: {this.props.comment.votes}</div>
        </div>
        )   
    }

}

export default Comment


  