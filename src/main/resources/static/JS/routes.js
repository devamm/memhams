import React from 'react';
import {Route, Switch} from 'react-router-dom';
import App from './app.js'
import Auction from './auction.js';

class Routes extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<Switch>
				<Route exact path="/auction" component={Auction} />
				<Route exact path="/" component ={App} /> 
			</Switch>
		)
	}
}


export default Routes;