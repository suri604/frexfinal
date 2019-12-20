import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  constructor(private http: HttpClient) { }
  authenticateUser(body) {
    const url =environment.authServiceURL;
  
    return this.http.post(url + '/authenticate', body);
  }

  getdetails(username){
    const url =environment.authServiceURL;
  
    return this.http.post(url + '/info', username);
}
}
