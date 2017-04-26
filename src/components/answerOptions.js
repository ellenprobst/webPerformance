import React from 'react';

const AnswerOptions = (props) => {
	return (
		<div>
			<button className="answer" onClick={props.setNextQuestion}>yes</button>
			<button className="answer" onClick={props.setNextQuestion}>no</button>
		</div>
	)
}

export default AnswerOptions;


