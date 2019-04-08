import React, { Component } from 'react';
import '../styles/sortTopicsForm.css';


class SortTopicsForm extends Component {

    render() {
        return( this.props.topicsList !== null && <div id="sortMenu"> 

            <select onChange={this.getSortByValue} id="orderBySelector">
                <option value="created_at">Date Created</option>
                <option value="comment_count">Comment Count</option>
                <option value="votes">votes</option>
            </select>
        </div>
        )
    }

    getSortByValue = (event) => {
        this.props.updateSortBy(event.target.value)
    }
}

export default SortTopicsForm