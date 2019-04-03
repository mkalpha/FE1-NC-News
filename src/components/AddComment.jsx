import React, { Component } from 'react';

class AddComment extends Component {
    state = {
        seeAddComment : false
    }

    render() {
        return (<div>
                    <button>Add Comment</button>
                    <div className="addCommentForm">
                        <form>
                            <textarea onChange={this.handleChange} value={this.state.commentBody} name="commentBody"></textarea>
                            <button>Submit Comment</button>
                        </form>
                    </div>
                </div>)
    }
}

export default AddComment