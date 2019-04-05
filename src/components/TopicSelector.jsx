import React, { Component } from 'react'
import axios from 'axios';

class TopicSelector extends Component {
   state = {
       topicsList : null
   }
   
   render() { return <select onChange={this.handleChange} id="orderBySelector" name ="topic">
                        {this.state.topicsList !== null && console.log(this.state.topicsList) }
                        <option value="addNewTopic">Add New Topic</option>
                        </select>
    
   }
    // componentDidMount() {
    //     this.fetchAllTopics()
    // }

    // fetchAllTopics = () => {
    //     axios.get('https://nc-knews-andrew-workman.herokuapp.com/api/topics')
    //             .then(topics => {
    //                this.setState({ topicsList : topics.data})
    //             })
    // }
}

export default TopicSelector