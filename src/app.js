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
			start : true,
			result: false,
			yesQuestions : []
		}
		this.handleAnswer = this.handleAnswer.bind(this);
		this.previousQuestion = this.previousQuestion.bind(this);
		this.startCheckList = this.startCheckList.bind(this);
		this.showInfobox = this.showInfobox.bind(this);
		this.renderChecklist = this.renderChecklist.bind(this); 
		this.renderResults = this.renderResults.bind(this);
		this.getResults = this.getResults.bind(this); 
	}

	nextQuestion() {
		let newCounter = this.state.counter + 1;
		if(newCounter <= 11 && newCounter >= 0){ 
			this.setState({ 
				counter : newCounter,
				question : questions[newCounter].q,
				info : questions[newCounter].info
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

	showInfobox(e) {
		const main = document.querySelector('.content');
		main.classList.toggle('hide');

		const resources = document.querySelector('.infoBox__resources');
		const tips = document.querySelector('.infoBox__tips')
		console.log(e.currentTarget)
		e.currentTarget.value === "resources" ? resources.classList.toggle('show') : tips.classList.toggle('show')
	}

	handleAnswer(e) {
		const currentYesQuestion = this.state.question; //string
		const yesQuestions = this.state.yesQuestions;

		if(e.target.value === "yes") {
			if(yesQuestions.includes(currentYesQuestion) != true) {
				yesQuestions.push(currentYesQuestion);
			};	
		} else if(e.target.value === "no"){
			if(yesQuestions.includes(currentYesQuestion)) {
				const index = yesQuestions.indexOf(currentYesQuestion);
				yesQuestions.splice(index,1);
			}
		}

		this.setState({
			yesQuestions : yesQuestions 
		});
		this.nextQuestion();
	}

	getResults() {
		const results = this.state.yesQuestions;
		const resultNumber = results.length;
		const finalResult = (resultNumber / 12 * 100).toFixed(0);
		const digits = finalResult.toString().split('');
		return digits;
	}

	renderResults() {
		return (
			<Results results={this.getResults} showInfobox={this.showInfobox} />
		)
	}

	renderChecklist() {
		return (
			<Checklist
				counter={this.state.counter} 
				question={this.state.question}
				info={this.state.info}
				handleAnswer={this.handleAnswer}
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
