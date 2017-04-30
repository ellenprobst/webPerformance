import React from 'react';

const InfoBox = (props) => {
	return (
		<div className="infoBox" >
			<button className="close small" onClick={props.close}><i className="fa fa-times" aria-hidden="true"></i></button>
			<p>{props.info}</p>
		</div>
	)
}

export default InfoBox;