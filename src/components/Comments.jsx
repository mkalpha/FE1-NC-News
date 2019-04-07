import React, { Component } from 'react';
import axios from 'axios';
import Comment from '../components/Comment'
import '../styles/Comments.css';

class Comments extends Component {
    state ={
        comments : null,
    }

    render(){ 
       
        return  ( <div>
                    {this.state.comments !== null && <div id="commentsWrapper"> 
                <ul>
                    {this.state.comments.articleComments.map(comment => {
                        return <li key={comment.comment_id}>
                                    <Comment comment={comment} article_id={this.props.article_id} user={this.props.user}/>
                                </li>
                    })}
                </ul>
            </div>}
            {this.props.showAddFirstComment !== false && <div>This article has no comments, be the first to post...</div>}
            </div>
        )  
    }

    componentDidMount() {
          if (this.props.comment_count === '0' ) {
              this.props.updateShowAddComment()
          } else {
         this.fetchComments()
          }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props && this.props.comment_count !== '0' ) {
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