import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Content from './Content'

class App extends Component {
	render() {
		return (
			<main>
				<Header />
				<Content />
			</main>
		);
	}
}

export default App;
