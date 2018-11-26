import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
	render() {
		return (
			<header>
				<h1 className="page-title">HighOnCoding</h1>

                <nav>
                    <div className="nav-item">Home</div>

                    <div className="nav-item">Categories</div>
                </nav>
			</header>
		);
	}
}

export default Header;
