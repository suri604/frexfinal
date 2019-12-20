package com.stackroute.customExceptions;

public class TicketAlreadyExistsException extends Exception {
    public String msg;

    public TicketAlreadyExistsException(String msg) {
        super(msg);
        this.msg = msg;
    }

    public TicketAlreadyExistsException() {
    }
}
