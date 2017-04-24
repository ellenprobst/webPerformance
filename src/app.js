import React from 'react';
import ReactDOM from 'react-dom';
import questions from './components/questions.js';
import Question from './components/question.js';
import QuestionCount from './components/questionCount.js';
import AnswerOptions from './components/answerOptions.js';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			question : questions[0].q,
			counter : 0,
			yes : 0,
			no : 0
		}
	}
	render() {
		return (
			<div>
				<h1>Hello</h1>
				<QuestionCount number={this.state.counter} />
				<Question content={this.state.question} />
				<AnswerOptions />
			</div>
			// question component, props =  number of the question
			// answer component, onClick update the number of the question, update the result
			// back button, onclick update the number of the question
			// result component, props = the result

		)
	}

}

ReactDOM.render(<App/>, document.getElementById('app'));
