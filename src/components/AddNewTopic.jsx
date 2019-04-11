import React, { Component } from 'react';
import '../styles/AddNewTopic.css'
import { postNewTopic } from '../api'

class AddNewTopic extends Component {
    state = {
        topicName : '',
        topicDescription : ''
    }

    render () {

        return (<div id="addNewTopicWrapper">
                    <form id="postTopicForm" onSubmit={this.handleSubmit}>
                       <div id="addTopicName"> Add Topic Name:<br/> <input type="text" onChange={this.handleChange} value={this.state.topicName} name="topicName"></input></div>
                        <div id="addTopicDescription">Add Topic Description <br/> <input type="text" onChange={this.handleChange} value={this.state.topicDescription} name="topicDescription"></input></div>
                        <button>Create Your New Topic >>></button>
                    </form>
                   <div id="cancel"><button onClick={this.cancelNewTopic}>Cancel</button> </div>
        
                </div>)
     }

     handleChange = (event) => {
        event.preventDefault()
        const { value, name } = event.target
        this.setState({ [name] : value })  
     }

     handleSubmit = (event) => {
        event.preventDefault()
        const topicToPost = {
            slug: this.state.topicName,
            description: this.state.topicDescription
          };
          postNewTopic(topicToPost).then((responce) => {
                this.props.updateTopic(this.state.topicName)
                this.props.viewTopic()
                this.props.fetchAllTopics()
          })
     }

     cancelNewTopic = () => {
        this.props.hideNewTopic()
     }
}

export default AddNewTopic