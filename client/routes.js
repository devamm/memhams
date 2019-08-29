import React from 'react';
import {Route, Switch} from 'react-router-dom';
import App from './app.js'
import Auction from './components/auction.js';
import Header from './components/header.js';
import Listings from './components/listings.js'
import SingleListing from './components/singleListing.js';
import Login from './components/login.js'

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
					<Route exact path="/listings" component={Listings} />
					<Route exact path="/listing/:id" component={SingleListing} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/" component ={App} /> 
				</Switch>
			</div>
		)
	}
}


export default Routes;