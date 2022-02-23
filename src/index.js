import React, {
  useEffect,
  useState,
} from 'react';
import ReactDOM from 'react-dom';

import Error from './Error';
import Loader from './Loader';
import SeasonDisplay from './SeasonDisplay';

const App = () => {
	const [lat, setLat] = useState();
	const [errMsg, setErrMsg] = useState();

	useEffect(() => {
		window.navigator.geolocation.getCurrentPosition(
			position => {
				setLat(position.coords.latitude);
			},
			err => {
				setErrMsg(err.message);
			}
		);
	}, [])

	return (
		<React.Fragment>
			{
				(errMsg && !lat) ? <Error msg={errMsg} /> :
				(!errMsg && lat) ? <SeasonDisplay lat={lat} /> :
				<Loader msg="Please accept location request :)" />
			}
		</React.Fragment>
	)
}

ReactDOM.render(<App />, document.querySelector('#root'));
