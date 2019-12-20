import { Component, OnInit } from '@angular/core';
import { EnvironmentTicketService } from 'src/app/services/environment-ticket.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-environment-ticket-list',
  templateUrl: './environment-ticket-list.component.html',
  styleUrls: ['./environment-ticket-list.component.css']
})
export class EnvironmentTicketListComponent implements OnInit {

  public ticketList:any;
  constructor(private ticketService: EnvironmentTicketService, private snackBar :MatSnackBar, private router :Router) {}
   

  ngOnInit() {
    this.ticketService.getAllTickets().subscribe(data=>
      {
        this.ticketList=data;
        console.log(data);
      })
  }
  deleteticket(ticketNumber: Number){
    this.ticketService.deleteTicket(ticketNumber).subscribe(data=>{
    console.log(data);
    })
    this.snackBar.open('Successfully deleted, please reload the page','ok',{duration: 2000});
 }
 back() {
   this.router.navigate(['/environment/main']);
 }

}
