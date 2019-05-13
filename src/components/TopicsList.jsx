import React from 'react';
import { Link } from '@reach/router'
import '../styles/TopicList.css'

const TopicsList = props => {

    const handleClick = (event) => {
        event.preventDefault()
        props.updateToggleTopic(event.target.value)
        console.log(props.resetPage)
        props.resetPage()
    }

    const handleHamburgerClick = (event) => {
        event.preventDefault()
        props.drawerToggleHandler();
        
    }

    return (<> <div id="topicList">
        <ul><li key="all" onClick={handleClick}><Link to="/"><button value="all">All Topics</button></Link></li>
            {props.topicsList && props.topicsList.map(topic => {
                return <li key={topic.slug} onClick={handleClick}><Link to="/"><button value={topic.slug}>{topic.slug}</button></Link></li>
            })}
        </ul>
    </div>

    <div id="hamburgerMenu">
    <button onClick={handleHamburgerClick}><i class="fas fa-bars"></i></button>
    </div>
    </>
    )
}



export default TopicsList