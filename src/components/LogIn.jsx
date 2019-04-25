import React, {Component} from 'react'
import '../styles/LogIn.css';

class LogIn extends Component {

    render() {
        return <>
   {this.props.user === null && <div id="login">
    <button name="logIn" onClick={this.handleClick}> <i className="fas fa-user-alt"></i> Log In  </button></div>}
    {this.props.user !== null && <div id="login"><button name="logIn" onClick={this.handleClick}><i className="fas fa-user-alt"></i>{this.props.user}</button></div>}
    </> 
    }

    handleClick = (event) => {
        event.preventDefault()
        this.props.logInUser()
        this.props.hideNewArticle()
        this.props.hideNewTopic()
    }
}



export default LogIn