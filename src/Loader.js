import React from 'react';

const Loader = (props) => {
	return (
		<div className="loader">
			<div className="ui active dimmer">
				<div className="ui massive text loader">{props.msg}</div>
			</div>
		</div>
	);
};

Loader.defaultProps = {
	msg: 'Loading...'
};

export default Loader;
