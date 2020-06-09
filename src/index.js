import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';
import Error from './Error';

class App extends React.Component {
	// Defining state which basically is a js object
	// and the properties in this obj can be modified using this.setState() and can be used as this.state.propertyName
	// and when setState() is called React will rerender the app
	state = {
		lat: null,
		errMsg: ''
	};

	// Lifecycle method
	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => this.setState({ lat: position.coords.latitude }), // will not modify errMsg
			(err) => this.setState({ errMsg: err.message }) // will not modify lat
		);
	}

	// Helper method to do all the logic
	renderContent() {
		if (this.state.errMsg && !this.state.lat) {
			return <Error msg={this.state.errMsg} />;
		} else if (!this.state.errMsg && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat} />;
		} else {
			return <Loader msg="Please accept location request :)" />;
		}
	}

	// render() should only render content and no logic
	render() {
		return this.renderContent();
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
