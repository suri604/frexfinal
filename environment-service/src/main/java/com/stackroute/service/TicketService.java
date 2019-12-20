package com.stackroute.service;


import com.stackroute.customExceptions.TicketAlreadyExistsException;
import com.stackroute.customExceptions.TicketNotFoundException;
import com.stackroute.domain.Ticket;

import java.util.List;

public interface TicketService {
    public Ticket saveRepos(Ticket ticket) throws TicketAlreadyExistsException;

    public List<Ticket> getAllTickets();
    public void deleteTicket(int ticketNumber) throws TicketNotFoundException;

    Ticket findTicket(String name);
}