import React, { Component } from 'react';
import { postComment } from '../api'
import { navigate } from '@reach/router'
import '../styles/AddComment.css'

class AddComment extends Component {
    state = {
        seeAddComment : false,
        commentBody : ''
    }

    render() {
        return (<div>
                   {this.props.user !== null && <button onClick={this.showAddComment}>Add Comment</button> }
                    <div className="addCommentForm">
                    {this.state.seeAddComment !== false && <form onSubmit={this.handleSubmit}>
                            <textarea onChange={this.handleChange} value={this.state.commentBody} name="body"></textarea>
                            <button>Submit Comment</button>
                        </form>}
                    </div>
                </div>)
    }

    showAddComment = (event) => {
        event.preventDefault()
       this.state.seeAddComment === false ? this.setState({ seeAddComment : true}) : this.setState({ seeAddComment : false})
    }

    handleChange = (event) => {
        event.preventDefault()
        this.setState({commentBody : event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const commentToPost = {
            body : this.state.commentBody,
            username : this.props.user
        };
        postComment(commentToPost, this.props.article_id).then((responce) => {
            this.setState({commentBody : '', seeAddComment : false})
            this.props.updateShowAddComment()
            navigate(`/articles/${this.props.article_id}`)
        })

    }
}

export default AddComment