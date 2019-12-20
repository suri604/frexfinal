import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalorieInfoService {

  private url = environment.fitnessServiceURL + 'calorieInfo/';

  constructor(private httpClient: HttpClient) {
  }

  public async getCaloriesForToday() {
    const userId = localStorage.getItem('username');
    return await this.httpClient.get(this.url + 'getForToday', {
      headers: new HttpHeaders().set('userId', userId)
    }).toPromise().then(
      (response: any) => {
        return response.result;
      });
  }
}
