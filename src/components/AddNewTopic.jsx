import React, { Component } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router'
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
                        Add Topic Name: <input type="text" onChange={this.handleChange} value={this.state.topicName} name="topicName"></input>
                        Add Topic Description <input type="text" onChange={this.handleChange} value={this.state.topicDescription} name="topicDescription"></input>
                        <button>Create Your New Topic >>></button>
                    </form>
                    <button onClick={this.cancelNewTopic}>Cancel</button>
        
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