import React from 'react';
import '../styles/TopicList.css'

const TopicsList = props => {
    const handleClick = (event) => {
        event.preventDefault()
        props.updateToggleTopic(event.target.value)
    }

    return ( <div id="topicList">
        <ul><li><button onClick={handleClick} value="all">All Topics</button></li>
            {props.topicsList !== null && props.topicsList.map(topic => {
                console.log(topic)
                return <li><button onClick={handleClick} value={topic.slug}>{topic.slug}</button></li>
            })}
        </ul>
    </div>

    )
}



export default TopicsList