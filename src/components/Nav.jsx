import React, { Component } from 'react'
import { Link } from '@reach/router'
import '../styles/Nav.css'

class Nav extends Component {
    state = {
        showAddArticle : false
    }
    render() {
    return (<div id="nav"><div id="navWrapper">
                    <div id ="logo"><Link to={'/'}>NC_News</Link></div>
                    <div id="login">Login</div>
                    <button onClick={this.handleClick}>Post New Article</button>
            </div>
            {this.state.showAddArticle !== false &&<form>
                <form>
                    <input type="text"></input>
                    <textarea></textarea>
                    <select onChange={this.getSortByValue} id="orderBySelector">
                        <option value="football">Football</option>
                        <option value="cooking">Cooking</option>
                        <option value="coding">Coding</option>
                    </select>
                </form>
                <button>Submit Article</button>
            </form>}
            </div> 
              
            
        )
    }


    handleClick = (event) => {
       this.state.showAddArticle === false ? this.setState({ showAddArticle : true}) : this.setState({ showAddArticle : false}) 
    }
}

export default Nav;