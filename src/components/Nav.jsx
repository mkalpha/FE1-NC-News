import React from 'react'
import { Link } from '@reach/router'
import '../styles/Nav.css'

const Nav = props => {
    return ( <div id="navWrapper">
    <div id ="logo"><Link to={'/'}>NC_News</Link></div>
    <div id="login">Login</div>
    </div>
    )
}

export default Nav;