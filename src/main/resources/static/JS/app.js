import React from 'react';
import {Link} from 'react-router-dom'

class App extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="container">
				<h1>Hello from react!</h1>
				{console.log("I am loaded!")}
				<br/>
				<h2>Go To Live Auction</h2>
				<Link to="/auction">
					<button>Click here!</button>
				</Link>
			</div>
		)
	}
}

export default App;