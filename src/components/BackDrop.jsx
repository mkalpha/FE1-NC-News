import React from 'react';
import '../styles/BackDrop.css'

const BackDrop = props => {

   const clickHandler = () => {
        props.drawerToggleHandler()
    }

    return (
        <div className="backDrop" onClick={clickHandler} />
        
    )
}

export default BackDrop