import React, { Component } from 'react';
import axios from 'axios'

class SortTopicsForm extends Component {
    state = {
        topicsList : null

    }

    render() {
        return( this.state.topicsList !== null && <div>
            <select onChange={this.getTopicValue} id="topicSelector">
                <option value="all">all</option>
                {this.state.topicsList.topics.map(topic => {
                   return <option key={topic.slug} value={topic.slug}>{topic.slug}</option>
                })}
            </select>

            <select onChange={this.getSortByValue} id="orderBySelector">
                <option value="created_at">Date Created</option>
                <option value="comment_count">Comment Count</option>
                <option value="votes">votes</option>
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

    getTopicValue = (event) => {   
        this.props.updateToggleTopic(event.target.value)
    }

    getSortByValue = (event) => {
        this.props.updateSortBy(event.target.value)
    }
}

export default SortTopicsForm