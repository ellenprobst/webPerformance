import React from 'react';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

const question = (props) => {
	return (
		<div className="question">
			<ReactCSSTransitionGroup
	          transitionName="question"
	          transitionAppear={true} 
	          transitionAppearTimeout={600} 
	          transitionEnterTimeout={600} 
	          transitionLeaveTimeout={600}
	          >
	          <h2 key={props.counter}>{props.question}</h2>
	          </ReactCSSTransitionGroup>
		</div>
	)
}

export default question;