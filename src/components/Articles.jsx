import React, { Component } from 'react';
import { Router, Link } from '@reach/router'
import axios from 'axios';



class Articles extends Component {
    state ={
        articlesData : null
    }

    render() {
        return (
            <div id="articlesWrapper">
            Articles will go here
            <ul>
                <li>
                   {console.log(this.state.articlesData)}
                </li>
            </ul>
            </div>
        )
    }

    componentDidMount() {
        this.fetchArticles();
    }

    fetchArticles = () => {
        axios.get('https://nc-knews-andrew-workman.herokuapp.com/api/articles')
        .then(articles  => {
            this.setState({articlesData : articles.data.articles})
        })
    }



   
}

export default Articles