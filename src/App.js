import React, { Component } from 'react';
import QuoteBox from './QuoteBox'
import Buttons from './Buttons'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee} from '@fortawesome/free-solid-svg-icons'

class App extends Component {
	constructor() {
		super();
		this.state = {
			quotes: []
		}
	}

	componentDidMount() {
		fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
			.then(res => res.json())
			.then(quotes => {
				this.setState({quotes: quotes.quotes})
				console.log(this.state.quotes)
			});
	}

	handleClick = () => {
		this.forceUpdate();
	}

	render() {
		if(this.state.quotes.length === 0) {
			return (
				<div className="dib border-box bg-white container">
		  			<h1 className='mt0 tc fw7'>Loading</h1>
		  			<Buttons />
				</div>
	  		);
		} else {
			const i = Math.floor(Math.random() * (this.state.quotes.length))
	 		return (
				<div className="dib border-box bg-white container">
		  			<QuoteBox quote={this.state.quotes[i].quote} author={this.state.quotes[i].author} />
		  			<Buttons click={this.handleClick} />
				</div>
	  		);
	  	}
	}
}

export default App;
