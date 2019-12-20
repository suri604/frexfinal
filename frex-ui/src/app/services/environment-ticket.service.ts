import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentTicketService {

  private url: string = environment.environmentServiceURL;

  constructor(private http: HttpClient) { }

  getAllTickets(): Observable<any> {
    return this.http.get<any>(this.url + "/api/v1/getTicket");
  }

  saveTicket(ticketNumber: Number, price: Number, date: any, distance: Number,username:string) {
    console.log("hello");
    return this.http.post(this.url + "/api/v1/saveTicket",
      {
        "ticketNumber": ticketNumber,
        "price": price,
        "date": date,
        "distance": distance,
        "username":username
      })
  }
  deleteTicket (ticketNumber : Number){
    return this.http.delete(this.url + "/api/v1/deleteTicket/" + ticketNumber);
  }
}
