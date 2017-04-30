import React from 'react';

const LandingPage = (props) => {
	return (
		<div className="landingPage">
			<h1>Web Performance</h1>
			<div className="subTitle">
				<h2>Want to increase web performance?</h2>
				<h2>Not sure where to start?</h2>
			</div>
			<button className="start normal" onClick={props.start}>Start Here!</button>
		</div>
	)
}

export default LandingPage;