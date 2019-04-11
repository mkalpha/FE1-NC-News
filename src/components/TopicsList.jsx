import React from 'react';
import { Link } from '@reach/router'
import '../styles/TopicList.css'

const TopicsList = props => {

    const handleClick = (event) => {
        event.preventDefault()
        props.updateToggleTopic(event.target.value)
    }

    return ( <div id="topicList">
        <ul><li key="all" onClick={handleClick}><Link to="/"><button value="all">All Topics</button></Link></li>
            {props.topicsList && props.topicsList.map(topic => {
                // console.log(topic.slug)
                return <li key={topic.slug} onClick={handleClick}><Link to="/"><button value={topic.slug}>{topic.slug}</button></Link></li>
            })}
        </ul>
    </div>

    )
}



export default TopicsList