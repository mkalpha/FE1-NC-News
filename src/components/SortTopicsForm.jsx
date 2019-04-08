import React from 'react';
import '../styles/sortTopicsForm.css';


const SortTopicsForm = (props) => {

    const getSortByValue = (event) => {
        props.updateSortBy(event.target.value)
    }

        return( props.topicsList !== null && <div id="sortMenu"> 

            <select onChange={getSortByValue} id="orderBySelector">
                <option value="created_at">Date Created</option>
                <option value="comment_count">Comment Count</option>
                <option value="votes">votes</option>
            </select>
        </div>
        )
    }

    


export default SortTopicsForm