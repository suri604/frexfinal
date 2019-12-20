import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FitInfoService {
  private url = environment.fitnessServiceURL + 'fitInfo/';

  constructor(
    private http: HttpClient
  ) {
  }


  async sendAuthCodeToServer(code: string) {
    const userId = localStorage.getItem('username');
    return await this.http.put(this.url + 'authCode', {}, {
      headers: new HttpHeaders().set('authCode', code.toString()).append('userId', userId)
    }).toPromise().then(
      (result) => {
        console.log(result);
        return result;
      });
  }

  async checkIfExists() {
    const userId = localStorage.getItem('username');
    return await this.http.get(this.url + 'check', {
      headers: new HttpHeaders().set('userId', userId)
    }).toPromise().then(
      value => {
        return value;
      });
  }
}
