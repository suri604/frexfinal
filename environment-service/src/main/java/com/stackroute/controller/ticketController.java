package com.stackroute.controller;

import com.stackroute.customExceptions.TicketAlreadyExistsException;
import com.stackroute.customExceptions.TicketNotFoundException;
import com.stackroute.domain.Ticket;
import com.stackroute.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value="api/v1")
public class ticketController {
    @Autowired
    TicketService ticketService;
    ResponseEntity responseEntity;

    private static final String TOPIC = "Ticketdetails";


    @Autowired
    private KafkaTemplate<String, Ticket> kafkaTemplate;


    public String post(Ticket ticket) {
       // Ticket ticket = ticketService.findTicket(name);
        System.out.println(ticket);
        kafkaTemplate.send(TOPIC, ticket);

        return "Published successfully";
    }


    public ticketController(TicketService ticketService) {
        this.ticketService = ticketService;
    }
    @PostMapping("saveTicket")
    ResponseEntity <?> saveRepo(@RequestBody Ticket ticket)
    {
        try{
            ticketService.saveRepos(ticket);
            String message=post(ticket);
            responseEntity = new ResponseEntity<String>("Successfully created" + message, HttpStatus.CREATED);
        }catch (TicketAlreadyExistsException e)
        {
            responseEntity = new ResponseEntity<String>(e.getMessage(), HttpStatus.CONFLICT);
        }
        return responseEntity;
    }
    @GetMapping("/getTicket")
    public ResponseEntity<?> getAllRepos() {

        try
        {

            responseEntity = new ResponseEntity<List<Ticket>>(ticketService.getAllTickets(),HttpStatus.OK);
        }catch(Exception e)
        {
            responseEntity = new ResponseEntity<String>(e.getMessage(),HttpStatus.CONFLICT);
        }
        return responseEntity;
    };

    @DeleteMapping("/deleteTicket/{ticketNumber}")
    public ResponseEntity<?> deleteRepo(@PathVariable int ticketNumber) {
        try{
            ticketService.deleteTicket(ticketNumber);
            responseEntity = new ResponseEntity<String>("Successfully deleted", HttpStatus.OK);
        }catch (TicketNotFoundException e)
        {
            responseEntity = new ResponseEntity<String>(e.getMessage(), HttpStatus.CONFLICT);
        }
        return responseEntity;

    }


}
