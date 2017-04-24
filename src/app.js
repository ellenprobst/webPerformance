import React from 'react';
import ReactDOM from 'react-dom';
import questions from './components/questions.js';

class App extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<h1>Hello</h1>

		)
	}

}

ReactDOM.render(<App/>, document.getElementById('app'));
