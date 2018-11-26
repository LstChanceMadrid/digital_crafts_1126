import React, { Component } from 'react';
import '../App.css';
import Jumbotron from './Jumbotron';
import ArticleList from './ArticleList';
import ArticleData from './ArticleData'

class Content extends Component {

    constructor(props) {
        super(props)

        let articles = ArticleData.getArticles()

        this.state = {
            articles : articles
        }
    }

	render() {
		return (
			<main id="content-container">
				<Jumbotron />
                <ArticleList articles = {this.state.articles}/>
			</main>
		);
	}
}

export default Content;