import React, { Component } from 'react';
import axios from 'axios';
import { Router, Link } from '@reach/router';
import Comment from '../components/Comment'
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
                                    <Comment comment={comment} article_id={this.props.article_id}/>
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

    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
            this.fetchComments()
        } 
    }

    fetchComments = () => {
        axios.get(`https://nc-knews-andrew-workman.herokuapp.com/api/articles/${this.props.article_id}/comments`)
       .then(comments => {
          this.setState({ comments : comments.data})
       })
    }
}

export default Comments