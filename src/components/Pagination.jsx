import React from 'react';
import '../styles/Pagination.css'

const Pagination = props => {

    return ( <div id ="pagination">
    {props.page !== 1 && <button value = "-1" onClick={props.changePage}>&lt;</button>}
    Page {props.page} of {Math.ceil(props.articlesData.length/10)} 
    {props.page !== Math.ceil(props.articlesData.length/10) && <button value="1" onClick={props.changePage}>></button>}
    </div>  )
}

export default Pagination