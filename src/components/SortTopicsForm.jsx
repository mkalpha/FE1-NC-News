import React, { Component } from 'react';
import '../styles/sortTopicsForm.css';


class SortTopicsForm extends Component {

    render() {
        return( this.props.topicsList !== null && <div id="sortMenu"> 
            <select onChange={this.getTopicValue} id="topicSelector">
                <option value="all">all</option>
                {this.props.topicsList.map(topic => {
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
   
    getTopicValue = (event) => {   
        this.props.updateToggleTopic(event.target.value)
    }

    getSortByValue = (event) => {
        this.props.updateSortBy(event.target.value)
    }
}

export default SortTopicsForm