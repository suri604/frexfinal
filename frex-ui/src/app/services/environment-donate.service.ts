import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentDonateService {
 
  private url: string= environment.rewardServiceURL;
  constructor(private http: HttpClient) { }
  
  saveDeed(reciever: string, point: Number, username: string) {
    console.log("hello");
    return this.http.post(this.url + '/donate',
      {
        "reciever" : reciever,
        "point" : point,
        "username" : username
        
      })
  }
}
