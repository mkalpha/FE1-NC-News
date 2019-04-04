import React, {Component} from 'react'

class LogIn extends Component {

    render() {
        return <>
   {this.props.user === null && <div id="login"><button name="logIn" onClick={this.handleClick}><i className="fas fa-user-alt"></i> Login</button></div>}
    {this.props.user !== null && <div id="login">Hi {this.props.user}<button name="logIn" onClick={this.handleClick}><i className="fas fa-user-alt"></i> Log Out</button></div>}
    </> 
    }

    handleClick = (event) => {
        event.preventDefault()
        this.props.logInUser()
    }
}



export default LogIn