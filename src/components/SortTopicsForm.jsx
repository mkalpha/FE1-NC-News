import React, { Component } from 'react';
import axios from 'axios'

class SortTopicsForm extends Component {
    state = {
        topicsList : null

    }

    render() {
        return( this.state.topicsList !== null && <div>
            <select onChange={this.getSubmitValue} id="topicSelector">
                <option value="all">all</option>
                {this.state.topicsList.topics.map(topic => {
                   return <option key={topic.slug} value={topic.slug}>{topic.slug}</option>
                })}
            </select>
        </div>
        )
    }

    componentDidMount() {
        this.fetchAllTopics()
    }

    fetchAllTopics = () => {
        axios.get('https://nc-knews-andrew-workman.herokuapp.com/api/topics')
                .then(topics => {
                   this.setState({ topicsList : topics.data})
                })
    }

    getSubmitValue = () => {
        const value = document.getElementById("topicSelector").value;
        this.props.updateToggleTopic(value)
    }
}

export default SortTopicsForm