import React from 'react';
import ReactDOM from 'react-dom';
import questions from './components/questions.js';
import Checklist from './components/checklist.js';


class App extends React.Component {
	constructor() {
		super();
		this.state = {
			question : questions[0].q,
			info : questions[0].info,
			counter : 0,
			yes : 0,
			no : 0
		}
		this.handleChange = this.handleChange.bind(this);
		this.previousQuestion = this.previousQuestion.bind(this);
	}

	handleChange() {
		let newCounter = this.state.counter + 1;
		console.log(newCounter);
		if(newCounter <= 11){ 
			this.setState({ 
				counter : newCounter,
				question : questions[newCounter].q,
				info : questions[newCounter].info

			});
		} else {
			renderResults();
		}
	}

	previousQuestion() {
		let newCounter = this.state.counter - 1;
		if(newCounter >= 0){ 
			this.setState({ 
				counter : newCounter,
				question : questions[newCounter].q,
				info : questions[newCounter].info 
			});
		} else {
			renderResults();
		}
	}

	render() {
		return (
			<main>
				<h1>Web Performance</h1>
				<Checklist
					counter={this.state.counter} 
					question={this.state.question}
					info={this.state.info}
					setNextQuestion={this.handleChange}
					previousQuestion={this.previousQuestion} 
				 />
			</main>
				//components = 1) startpage 2) quiz 3) Results
				// inside quiz: 

			// question component, props =  number of the question
			// answer component, onClick update the number of the question, update the result
			// back button, onclick update the number of the question
			// result component, props = the result

		)
	}

}

ReactDOM.render(<App/>, document.getElementById('app'));
