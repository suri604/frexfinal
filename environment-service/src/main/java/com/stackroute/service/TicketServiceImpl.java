package com.stackroute.service;

import com.stackroute.customExceptions.TicketAlreadyExistsException;
import com.stackroute.customExceptions.TicketNotFoundException;
import com.stackroute.domain.Ticket;
import com.stackroute.repository.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TicketServiceImpl implements TicketService {
    @Autowired
    private TicketRepository ticketRepository;
    @Override
    public Ticket saveRepos(Ticket ticket) throws TicketAlreadyExistsException {
        if(ticketRepository.existsById(ticket.getTicketNumber()))
        {
            throw new TicketAlreadyExistsException("Track is already Present");
        }
        Ticket savedTicket = ticketRepository.save(ticket);
        if(savedTicket == null)
        {
            throw new TicketAlreadyExistsException("Track is already Present");
        }
        return savedTicket;

    }


    @Override
    public List<Ticket> getAllTickets() {
        return ticketRepository.findAll();

    }

    @Override
    public void deleteTicket(int ticketNumber) throws TicketNotFoundException {
        if (ticketRepository.existsById(ticketNumber))
        {
            ticketRepository.deleteById(ticketNumber);
        }
        else
        {
            throw new TicketNotFoundException("Unable to delete track not found");
        }
    }

    public Ticket findTicket(String username){
        return ticketRepository.findTicketByUsername(username);
    }


//    private static final String FILE_DIRECTORY = "/home/cgi/Desktop/FrexApp/backendEcofriendly/files";
//    @Override
//    public void storeFile(MultipartFile file) throws IOException {
//
//        Path filePath = Paths.get(FILE_DIRECTORY + "/" + file.getOriginalFilename());
//
////        Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);
//    }
}
