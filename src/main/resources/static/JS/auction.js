import React from 'react';
import SockJS from 'sockjs-client'
import {Stomp} from '@stomp/stompjs'
let socket;
let stompClient;

class Auction extends React.Component {
	constructor(props){
		super(props);

		this.state = {
		
			from: "",
			text: "",
			connected: false,
			messages: []
			
		}

		this.connectToAuction = this.connectToAuction.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.getMessage = this.getMessage.bind(this);
		this.sendMessage = this.sendMessage.bind(this);
	}

	connectToAuction(e){
		e.preventDefault();
		connect(this.getMessage);
		this.setState({connected: true})
	}

	handleChange(e){
		this.setState({[e.target.name]: e.target.value})
	}
	getMessage(msg){
		let messages = this.state.messages;
		messages.push(msg);
		this.setState(messages);
	}

	sendMessage(e){
		e.preventDefault();
		pushMessage(this.state.from, this.state.text);
	}

	render(){
		//console.log(this.state.messages);
		return(
			<div className="auction-page" style={{display: "flex", justifyContent: 'center'}}>
				<div className="container">
					<h1>Auction Page</h1>
					<form>
						<label for="from">Name</label>
						<input type="text" name="from" value={this.state.from} onChange={this.handleChange} disabled={this.state.connected} />
						<button disabled={this.state.connected} onClick={this.connectToAuction}>Connect</button>
					</form>
					{this.state.connected == true ? (
						<div className="live">
							<div className="send">
								<form onSubmit={this.sendMessage}>
									<label for="text">Message</label>
									<input type="text" name="text" value={this.state.text} onChange={this.handleChange}/>
									<input type="submit"/>
								</form>
							</div>
							<br/>
							<div className="bids">
								<ul style={{listStyle: 'none'}}>
									{this.state.messages.map(msg => {
										return (
											<li>{`${msg.from}: ${msg.text}`}</li>
										)
									})}
								</ul>
							</div>
						</div>
						
					) : ''}
				</div>
			</div>
			
		)
	}
}

export default Auction


const connect = (cb) => {
	socket = SockJS('/live');
	console.log(socket);
	stompClient = Stomp.over(socket);  
	stompClient.connect({}, function(frame) {
		stompClient.subscribe('/topic/messages', function(message) {
			cb(JSON.parse(message.body));
		});
	});
}

const disconnect = () => {
	if(stompClient != null) {
		stompClient.disconnect();
	}
	setConnected(false);
	console.log("Disconnected");
}

const pushMessage =  (from, text) => {
	
	stompClient.send("/app/live", {}, 
	  JSON.stringify({'from':from, 'text':text}));
}

