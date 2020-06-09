import React from 'react';
import './SeasonDisplay.css';

// An object to determine some properties - not compulsory
const seasonConfig = {
	summer: {
		text: "Let's hit the beach!",
		iconName: 'sun'
	},
	winter: {
		text: "Burr, it's cold!",
		iconName: 'snowflake'
	}
};

// Logic to decide if the  season is summer or winter
const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? 'summer' : 'winter';
	} else {
		return lat > 0 ? 'winter' : 'summer';
	}
};

// The component
const SeasonDisplay = (props) => {
	const season = getSeason(props.lat, new Date().getMonth());
	const { text, iconName } = seasonConfig[season]; // {text, iconName}

	return (
		<div className={`season-display ${season}`}>
			<i className={`icon-left massive ${iconName} icon`} />
			<h1>{text}</h1>
			<i className={`icon-right massive ${iconName} icon`} />
		</div>
	);
};

export default SeasonDisplay;
