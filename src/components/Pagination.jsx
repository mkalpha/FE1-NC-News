import React from 'react';

const Pagination = props => {

    return ( <div id ="pagination">
    Page {props.page} of {Math.ceil(props.articlesData.length/10)} 
   {props.page !== 1 && <button value = "-1" onClick={props.changePage}>Previous</button>}
   {props.page !== Math.ceil(props.articlesData.length/10) && <button value="1" onClick={props.changePage}>Next</button>}
    </div>  )
}

export default Pagination