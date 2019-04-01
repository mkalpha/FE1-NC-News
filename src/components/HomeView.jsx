import React, { Component } from 'react';
import TopicsSideBar from '../components/TopicsSideBar'
import Articles from'../components/Articles'
import '../styles/HomeView.css'

class HomeView extends Component {
    state = {}

    render() {
        return (<div id="contentWrapper">
            
                <TopicsSideBar />
                <Articles />
            
            </div>)
    }
}

export default HomeView