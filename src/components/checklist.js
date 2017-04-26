import React from 'react';
import Question from './question.js';
import QuestionCount from './questionCount.js';
import AnswerOptions from './answerOptions.js';
import InfoBox from './infoBox.js';

const Checklist = (props) => {
	return (
		<div className="checklist">
			<button className="back" onClick={props.previousQuestion}> back </button>
			<QuestionCount counter={props.counter} />
			<Question question={props.question}  />
			<AnswerOptions setNextQuestion={props.setNextQuestion} />
			<InfoBox info={props.info}/>
		</div>
	)
}

export default Checklist;