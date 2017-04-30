import React from 'react';
import Question from './question.js';
import QuestionCount from './questionCount.js';
import AnswerOptions from './answerOptions.js';
import InfoBox from './infoBox.js';

const Checklist = (props) => {
	return (
		<div className="checklist">
			<h1>Web Performance</h1>
			<QuestionCount counter={props.counter} />
			<div className="question__container">
				<button className="back small" onClick={props.previousQuestion}> <i className="fa fa-chevron-left" aria-hidden="true"></i></button>
				<Question question={props.question} counter={props.counter}  />
			</div>
			<button className="small open" onClick={props.showInfobox}><i className="fa fa-question-circle" aria-hidden="true"></i></button>
			<AnswerOptions setNextQuestion={props.setNextQuestion} />
			<InfoBox info={props.info} close={props.showInfobox}/>
		</div>
	)
}

export default Checklist;