import React from 'react';

const AnswerOptions = (props) => {
	return (
		<div>
			<button className="answer normal" onClick={props.handleAnswer} value="yes">yes</button>
			<button className="answer normal" onClick={props.handleAnswer} value="no">no</button>
		</div>
	)
}

export default AnswerOptions;


