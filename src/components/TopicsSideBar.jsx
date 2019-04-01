import React, { Component } from 'react';
import { Router, Link } from '@reach/router'
import axios from 'axios';

class TopicsSideBar extends Component {
    state = {
        topicsData : null
    }

    render() {
        return (this.state.topicsData !== null && <div id="topicsWrapper">
            {console.log(this.state.topicsData)}
        
        </div> )
    }

    componentDidMount() {
        this.fetchTopics()
    }

    fetchTopics = () => {
        axios.get('https://nc-knews-andrew-workman.herokuapp.com/api/topics')
            .then(topics => {
                this.setState({topicsData : topics.data.topics})
            })
    }

}

export default TopicsSideBar