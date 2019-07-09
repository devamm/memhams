import React from 'react';
import SockJS from 'sockjs-client'
import {Stomp} from '@stomp/stompjs'
let socket;
let stompClient;

class Auction extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="auction-page">
				<h1>Auction Page</h1>
				{connect()}
			</div>
		)
	}
}

export default Auction





const connect = () => {
	console.log('called connect')
	socket = SockJS('http://localhost:8080/live');
	console.log('created socket');
	console.log(socket);
	stompClient = Stomp.over(socket);  
	console.log('connecting')
	stompClient.connect({}, function(frame) {
		//setConnected(true);
		console.log('Connected: ' + frame);
		stompClient.subscribe('/topic/messages', function(messageOutput) {
			console.log(JSON.parse(messageOutput.body));
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

const sendMessage =  () => {
	var from = document.getElementById('from').value;
	var text = document.getElementById('text').value;
	stompClient.send("/app/auction", {}, 
	  JSON.stringify({'from':from, 'text':text}));
}

