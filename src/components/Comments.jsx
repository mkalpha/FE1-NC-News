import React, { Component } from 'react';
import axios from 'axios';
import { Router, Link } from '@reach/router';
import '../styles/Comments.css';

class Comments extends Component {
    state ={
        comments : null
    }

    render(){ 
        return (  this.state.comments !== null && <div>
            <div id="commentsWrapper">
                <ul>
                    {this.state.comments.articleComments.map(comment => {
                        return <li key={comment.comment_id}>
                            <div className="commentWrapper">
                                <div className="commentauthor">{comment.author}</div>
                                <div className="commentbody">{comment.body}</div>
                                <div className="commentMetaData">Date Posted: {comment.created_at} Votes: {comment.votes}</div>
                            </div>
                                </li>
                    })}
                </ul>
            </div>
            </div>
        )
    }

    componentDidMount() {
        this.fetchComments()
    }

    fetchComments = () => {
        axios.get(`https://nc-knews-andrew-workman.herokuapp.com/api/articles/${this.props.article_id}/comments`)
       .then(comments => {
          this.setState({ comments : comments.data})
       })
    }
}

export default Comments