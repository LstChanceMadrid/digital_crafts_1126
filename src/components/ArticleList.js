import React, { Component } from 'react';
import '../App.css';

class ArticleList extends Component {
	render() {

		let articleItems = this.props.articles.articles.map(article => {
			return <div className="article-container">
				<a href="{article.href}"><h3 className="article-title">{article.title}</h3></a>
				<p className="article-content">{article.content}</p>
				<div className="article-reactions">
					<div className="article-reactions-number">{article.comments} comments</div>
					<div className="article-reactions-number">{article.likes} likes</div>
				</div>
			</div>
		})
		return (
			<article id="article-list-container">
				{articleItems}
			</article>
		);
	}
}

export default ArticleList;