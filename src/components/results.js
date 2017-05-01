import React from 'react';

const Results = (props) => {
	return (
		<div className="results">
			<h2>Results</h2>
			<div className="results__container">
				<div className="score">
					<p>Here's your score</p>
					<div className="score__percentage">
						<p>95%</p>
						<p>95%</p>
						<p>95%</p>
						<p>95%</p>
						<p>95%</p>
						<p>95%</p>
						<p>95%</p>
					</div>
					<i className="fa fa-rocket" aria-hidden="true"></i>
				</div>
				<div className="results__side">
					<div className="tips">
						<p>one thing</p>
						<p>a second thing</p>
						<p>a third thing</p>
					</div>
					<div className="resources">
						<ul>
							<li>google</li>
							<li>something</li>
							<li>another</li>
							<li>more</li>
							<li>last</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Results;