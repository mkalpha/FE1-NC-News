import React, { Component } from 'react';
import axios from 'axios';
import { Navigate, navigate } from '@reach/router'
import '../styles/AddNewTopic.css'

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
                    <button>Cancel</button>
        
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
          axios.post('https://nc-knews-andrew-workman.herokuapp.com/api/topics', topicToPost)
            .then((res) => {
                console.log(res)
                this.props.viewTopic()
                navigate('/')
            })
     }
}

export default AddNewTopic