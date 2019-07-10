package com.collabera.controllers;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import com.collabera.models.*;

@Controller
public class MessageController {

	@MessageMapping("/live")
	@SendTo("/topic/messages")
	public OutputMessage send(Message message) throws Exception {
	    String time = new SimpleDateFormat("HH:mm:ss:SSS").format(new Date());
	    System.out.println("Recieved message "+message.getText());
	    return new OutputMessage(message.getText(), message.getFrom(), time);
	}
}
