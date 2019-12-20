package com.stackroute.repository;

import com.stackroute.domain.Ticket;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TicketRepository extends MongoRepository<Ticket, Integer> {

    public Ticket findTicketByUsername(String username);
}