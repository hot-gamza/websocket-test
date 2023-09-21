package com.example.demo.controller;

import com.example.demo.model.Message;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {

    @MessageMapping("/id") // /app/id
    @SendTo("/id-receive")
    public Message receivePublicMessage(@Payload Message message){
        System.out.println(message);
        return message;
    }


}
