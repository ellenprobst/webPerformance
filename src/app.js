import React from 'react';
import ReactDOM from 'react-dom';
import questions from './components/questions.js';
import Checklist from './components/checklist.js';
import Results from './components/results.js';
import LandingPage from './components/landingPage.js';
import Footer from './components/footer.js';


class App extends React.Component {
	constructor() {
		super();
		this.state = {
			question : questions[0].q,
			info : questions[0].info,
			counter : 0,
			yes : 0,
			start : true,
			result: false
			//set state for every question, if yes than state
		}
		this.handleChange = this.handleChange.bind(this);
		this.previousQuestion = this.previousQuestion.bind(this);
		this.startCheckList = this.startCheckList.bind(this);
		this.showInfobox = this.showInfobox.bind(this);
		this.renderChecklist = this.renderChecklist.bind(this); 
		this.renderResults = this.renderResults.bind(this); 
	}

	handleChange() {
		let newCounter = this.state.counter + 1;
		console.log(newCounter);
		if(newCounter <= 11 && newCounter >= 0){ 
			this.setState({ 
				counter : newCounter,
				question : questions[newCounter].q,
				info : questions[newCounter].info,
			});
		} else {
			this.setState({ 
				result: true
			});
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
		} 
	}

	startCheckList() {
		this.setState({ start: false});
	}

	showInfobox() {
		const main = document.querySelector('.content');
		main.classList.toggle('hide');
	}

	renderResults() {
		return (
			<Results />
		)
	}

	renderChecklist() {
		return (
			<Checklist
				counter={this.state.counter} 
				question={this.state.question}
				info={this.state.info}
				setNextQuestion={this.handleChange}
				previousQuestion={this.previousQuestion}
				showInfobox={this.showInfobox} 
			 />
		);
	}

	render() {
		return (
			<div className="content">
				{this.state.start !== true ? <nav><a href="#">Home</a></nav> : ""}
				<div className="wrapper">
					{this.state.start ? <LandingPage start={this.startCheckList}/> : this.state.result ? this.renderResults() : this.renderChecklist()}
				</div>
				<Footer />
			</div>
		)
	}

}

ReactDOM.render(<App/>, document.getElementById('app'));
