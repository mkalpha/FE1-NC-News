import React, { Component } from 'react'
import { Link } from '@reach/router'
import axios from 'axios';
import '../styles/Nav.css'

class Nav extends Component {
    state = {
        showAddArticle : false,
        articleTitle : '',
        articleBody : '',
        topic: 'football'
    }
    render() {
    return (<div id="nav"><div id="navWrapper">
                    <div id ="logo"><Link to={'/'}>NC_News</Link></div>
                    <div id="login">Login</div>
                    <button onClick={this.handleClick}>Post New Article</button>
            </div>
            {this.state.showAddArticle !== false &&<form onSubmit={this.handleSubmit}>
                    Article Title: <input type="text" onChange={this.handleChange} value={this.state.articleTitle} name="articleTitle"></input>
                    Article Body<textarea onChange={this.handleChange} value={this.state.articleBody} name="articleBody"></textarea>
                    Select Topic
                    <select onChange={this.handleChange} id="orderBySelector" name ="topic">
                        <option value="football">Football</option>
                        <option value="cooking">Cooking</option>
                        <option value="coding">Coding</option>
                    </select>
                <button>Submit Article</button>
            </form>}
            </div> 
              
            
        )
    }

    handleClick = (event) => {
        event.preventDefault()
       this.state.showAddArticle === false ? this.setState({ showAddArticle : true}) : this.setState({ showAddArticle : false}) 
    }

    handleChange = (event) => {
        event.preventDefault()
        const { value, name } = event.target
        this.setState({ [name] : value })  
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }
}

export default Nav;