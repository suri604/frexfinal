import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClaimRewardsService {

  private url = environment.fitnessServiceURL + 'rewardInfo/';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  async getRewardsForToday(userId: string, activityType: string) {
    return await this.httpClient.get(this.url + 'getForToday', {
      headers: new HttpHeaders().set('userId', userId).append('activityType', activityType)
    }).toPromise().then(
      (result) => {
        console.log('rewards', result);
        return result;
      });
  }
}
