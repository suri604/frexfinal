import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {FreakInfo} from '../../util/fitness-activities';

@Injectable({
  providedIn: 'root'
})
export class FreakInfoService {
  private url = environment.fitnessServiceURL + 'freakInfo/';

  constructor(private httpClient: HttpClient) {
  }

  async saveFreakInfo(freakInfo: FreakInfo) {
    return await this.httpClient.post(this.url + 'save', freakInfo).toPromise().then(
      (result) => {
        return result;
      });
  }

  async retrieveFreakInfo(userId: string, activityType: string) {
    return await this.httpClient.get(this.url + 'retrieve', {
      headers: new HttpHeaders().set('userId', userId).append('activityType', activityType)
    }).toPromise().then(
      (value: any) => {
        return value;
      }
    );
  }

  updateFreakInfo(freakInfo: FreakInfo) {
    return this.httpClient.put(this.url + 'update', freakInfo);
  }

  async checkIfExists(userId: string, activityType: string) {
    return await this.httpClient.get(this.url + 'check', {
      headers: new HttpHeaders().set('userId', userId).append('activityType', activityType)
    }).toPromise().then(
      result => {
        return result;
      }
    );
  }
}
