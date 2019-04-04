import React, { Component } from 'react';
import '../styles/AddNewTopic.css'

class AddNewTopic extends Component {
    state = {}

    render () {

        return (<div id="addNewTopicWrapper">
                    <form>
                        Add Topic Name: <input></input>
                        Add Topic Description <input></input>
                        <button>Create Your New Topic >>></button>
                    </form>
                    <button>Cancel</button>
        
                </div>)
        
     }
}

export default AddNewTopic