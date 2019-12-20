import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityInfoService {
  private url = environment.fitnessServiceURL + 'activityInfo/';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  async getDetailsForActivity(activityType: string) {
    const userId = localStorage.getItem('username');
    return await this.httpClient.get(this.url + 'getForToday', {
      headers: new HttpHeaders().set('userId', userId).append('activityType', activityType),
    }).toPromise().then(
      (result) => {
        console.log(result);
        return result;
      });
  }
}
