import React, {Component} from 'react'
import '../styles/LogIn.css';

class LogIn extends Component {

    render() {
        return <>
   {this.props.user === null && <div id="login"><button name="logIn" onClick={this.handleClick}> <i className="fas fa-user-alt"></i> Log In  </button></div>}
    {this.props.user !== null && <div id="login"><b>Hi {this.props.user}  </b><button name="logIn" onClick={this.handleClick}><i className="fas fa-user-alt"></i> Log Out</button></div>}
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