import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BasicInfo} from '../../util/fitness-activities';

@Injectable({
  providedIn: 'root'
})
export class BasicInfoService {
  private url = environment.fitnessServiceURL + 'basicInfo/';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  async saveBasicInfo(basicInfo: BasicInfo) {
    return await this.httpClient.post(this.url + 'save', basicInfo).toPromise().then(
      (result) => {
        return result;
      });
  }

  retrieveBasicInfo(userId: string) {
    return this.httpClient.get(this.url + 'retrieve', {
      headers: new HttpHeaders().set('userId', userId)
    });
  }

  updateBasicInfo(basicInfo: BasicInfo) {
    return this.httpClient.put(this.url + 'update', basicInfo);
  }

  async checkIfExists(userId: string) {
    return await this.httpClient.get(this.url + 'check', {
      headers: new HttpHeaders().set('userId', userId)
    }).toPromise().then(
      result => {
        return result;
      }
    );
  }
}
