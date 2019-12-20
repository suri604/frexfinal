package com.stackroute.customExceptions;

public class TicketNotFoundException extends Exception {
    private String msg;

    public TicketNotFoundException(String msg) {
        super(msg);
        this.msg = msg;
    }

    public TicketNotFoundException() {
    }
}
