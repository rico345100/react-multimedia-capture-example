import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AudioExample from './AudioExample';
import VideoExample from './VideoExample';

class App extends Component {
	render() {
		return (
			<div>
				<h1>React Multimedia Capture Test</h1>
				<hr />

				<VideoExample />
			</div>
		);
	}
};

ReactDOM.render(
	<App />,
	document.getElementById('entry')
);