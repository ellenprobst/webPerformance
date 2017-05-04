import React from 'react';

const Results = (props) => {
	const digits = props.results();
	
	const showResult = [];
	for (let i=0; i<7 ; i++) {
		showResult.push(<p key={i}><span>{digits[0]}</span><span>{digits[1]}</span><span>{digits[2]}</span><span>%</span></p>);
	}

	return (
		<div className="results">
			<h1>Web Performance</h1>
			<div className="results__container">
				<div className="score">
					<h2>Your score:</h2>
					<div className="score__percentage">
						{showResult}
					</div>
				</div>
				<div className="results__side">
					<div className="tips">
						<button className="normal square" value="tips" onClick={props.showInfobox}>Tips</button>
					</div>
					<div className="resources">
						<button className="normal square" value="resources" onClick={props.showInfobox}>Resources</button>
					</div>
				</div>
			</div>
			<div className="infoBox infoBox__tips">
				<button className="close small" value="tips" onClick={props.showInfobox}><i className="fa fa-times" aria-hidden="true"></i></button>
				<div>
					<h4>Tips</h4>
					<p>Make users the focal point of your performance effort. The majority of time users spend in your site isn't waiting for it to load, but waiting for it to respond while using it.</p>
					<p>Before you start optimizing make sure you know where the problem is. You can use the Google Dev Tools to measure and analyze performance.</p>
				</div>
			</div>
			<div className="infoBox infoBox__resources">
				<button className="close small" value="resources" onClick={props.showInfobox}><i className="fa fa-times" aria-hidden="true"></i></button>
				<div>
					<h4>Resources</h4>
					<ul>
						<li><a href="https://developers.google.com/web/fundamentals/performance/critical-rendering-path/" target="_blank">Optimizing the critical rendering path</a></li>
						<li><a href="https://developers.google.com/speed/pagespeed/insights/" target="_blank">Google PageSpeed Test</a></li>
						<li><a href="https://varvy.com/pagespeed/" target="_blank">Tips on Page speed optimization</a></li>
						<li><a href="https://mobiforge.com/research-analysis/12-expert-tips-on-how-to-boost-web-performance" target="_blank">12 Tips to boost performance</a></li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Results;