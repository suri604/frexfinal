import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RegisteruserService {

  constructor(private http: HttpClient) { }
  registerUser(body) {
    const url= environment.authServiceURL;
    
   return this.http.post(url+'/register', body);
  }

}
