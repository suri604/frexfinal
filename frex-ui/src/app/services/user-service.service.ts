import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../util/user';
import { Observable } from 'rxjs/internal/Observable';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  url = environment.userProfileUrl;
  headerOptions = {
    headers: new HttpHeaders(
      {
        'content-type': 'application/json',
      }),
    responseType: 'text'
  }

  constructor(private http: HttpClient) {
  }

  public findById(userName: string): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  public view(userName: string) {
    return this.http.get<User>(this.url + 'profile/' + `${userName}`)
  }

  public save(user: User) {
    console.log(this.url, "data : ", user);
    return this.http.post<User>(this.url + 'profile', user);
  }

  public update(user: User) {
    console.log(user);
    return this.http.put(this.url + 'profile/' + `${user.userName}`, user,
      {
        responseType: 'text'
      }
    );
  }

  public delete(userName) {
    return this.http.delete<User>(this.url + 'profile/' + userName);
  }

  // public uploadProfilePic(url1: any) {
  //   console.log()
  //   return this.http.post<File>(this.url + 'profile/profilePic', url1)
  // }

  // public uploadGovtPic(url1: any) {
  //   console.log()
  //   return this.http.post<File>(this.url + 'profile/govtProof', url1)
  // }
}


