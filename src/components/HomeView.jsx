import React, { Component } from 'react';
import Articles from'../components/Articles'
import '../styles/HomeView.css'

class HomeView extends Component {
    state = {}

    render() {
        return (<div id="contentWrapper">
            
                <Articles />
            
            </div>)
    }
}

export default HomeView