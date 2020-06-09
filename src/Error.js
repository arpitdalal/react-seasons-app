import React from 'react';
import './Error.css';

const Error = (props) => {
	return (
		<div className="error">
			<div className="ui active dimmer">
				<i className="massive thumbs down outline icon" />
				<h1>{props.msg}</h1>
			</div>
		</div>
	);
};

Error.defaultProps = {
	msg: 'Something went wrong :('
};

export default Error;
