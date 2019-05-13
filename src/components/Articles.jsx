import React, { Component } from 'react';
import { Link } from '@reach/router'
import SortTopicsForm from '../components/SortTopicsForm';
import '../styles/Articles.css';
import { fetchArticles } from '../api';




class Articles extends Component {
    state ={
        articlesData : null,
        sortBy : null,
    }

    render() {
        return ( this.state.articlesData === null ? <h1>Loading ...</h1> :
            <div id ="mainWrapper"
            ><SortTopicsForm updateToggleTopic={this.updateToggleTopic} updateSortBy={this.updateSortBy} topicsList={this.props.topicsList} />
             <div id="articlesWrapper"> 

             <div id ="pagination">
                     Page {this.props.page} of {Math.ceil(this.state.articlesData.length/10)} 
                    {this.props.page !== 1 && <button value = "-1" onClick={this.props.changePage}>Previous</button>}
                    {this.props.page !== Math.ceil(this.state.articlesData.length/10) && <button value="1" onClick={this.props.changePage}>Next</button>}
            </div> 
            <ul>
              {this.state.articlesData.map((article, index) => {
               if (index + 1 <= this.props.page * 10 && index + 1 > (this.props.page - 1 ) * 10 ) {
                  return <li key={article.article_id}>
                            <div className={`articleListWrapper${article.topic}`}>
                            <div className="articleTitleWrapper">
                                <div className="articleListTitle"><Link to={`/articles/${article.article_id}`}><i className="fas fa-quote-left">   </i> <b>{article.title}</b> <i className="fas fa-quote-right"></i></Link></div>
                            <div className ="statsWrapper">
                                <div className="articleListCommentCount"><i class="far fa-comments"></i> Comments:  {article.comment_count}</div>
                                <div className="articleListVotes"><i class="fas fa-chart-line"></i>   Votes: {article.votes} </div>
                            </div>
                            </div>
                                <div className="articleListTopic"><b>Topic: </b>{article.topic}</div>
                                <div className="articleListAuthor"><b>Author: </b>{article.author}</div>
                                
                                <div className="articleListCreatedAt">Posted on: {article.created_at.slice(0,10)}</div>
                            </div>
                        </li>
                 }
              })}
            </ul>
            </div>
            </div>
         )
    }

    componentDidMount() {
        fetchArticles(this.props.toggleTopic, this.state.sortBy).then((articles) => {
            this.setState({ articlesData : articles })
        })
    }

    componentDidUpdate(prevProps, prevState){
        if (this.props.toggleTopic !== prevProps.toggleTopic || this.state.sortBy !== prevState.sortBy || this.state.page !== prevState.page) {
            fetchArticles(this.props.toggleTopic, this.state.sortBy).then((articles) => {
                this.setState( { articlesData : articles } )
            })
        }

    }

    updateSortBy = (sortBy) => {
        this.setState({ sortBy : sortBy})
    }   

    // changePage = (event) => {
    //     const change = Number.parseInt(event.target.value, 0)
    //     const newPage = this.state.page + change;
    //     this.setState( { page : newPage } )
    // }
}

export default Articles