import React from 'react';
import {Route, Switch} from 'react-router-dom';
import App from './app.js'
import Auction from './auction.js';
import Header from './header.js';

class Routes extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
				<Header/>
				<Switch>
					<Route exact path="/auction" component={Auction} />
					<Route exact path="/" component ={App} /> 
				</Switch>
			</div>
		)
	}
}


export default Routes;