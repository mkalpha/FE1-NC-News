import React from 'react';
import { Link } from '@reach/router';
import '../styles/SideDrawer.css';

const SideDrawer = props => {
        const handleClick = (event) => {
        event.preventDefault()
        props.updateToggleTopic(event.target.value)
    }

    return ( <div> 
                <div className="sideDrawer">
                    <ul>
                        <li><i className="fas fa-book-open"></i> NC NEWS</li>
                        <li key="all" onClick={handleClick}><Link to="/"><button value="all">All Topics</button></Link></li>
                            {props.topicsList && props.topicsList.map(topic => {
                return <li key={topic.slug} onClick={handleClick}><Link to="/"><button value={topic.slug}>{topic.slug}</button></Link></li>
            })}
                    </ul>
                 </div>
             </div>
   )
}

export default SideDrawer