import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FavouriteInfoService {
  private url = environment.fitnessServiceURL + '/favouritesInfo/';

  constructor(private httpClient: HttpClient) {
  }

  async getAll(userId: string) {
    return await this.httpClient.get(this.url + 'getAll', {
      headers: new HttpHeaders().set('userId', userId)
    }).toPromise().then(
      (value: any) => {
        console.log(value);
        return value;
      });
  }

  async save(i: number, userId: string) {
    await this.httpClient.get(this.url + 'add', {
      headers: new HttpHeaders().set('userId', userId).append('activityType', i.toString())
    }).toPromise().then(
      (value) => {
        console.log(value);
        return value;
      });
  }

  async delete(i: number, userId: string) {
    await this.httpClient.delete(this.url + 'delete', {
      headers: new HttpHeaders().set('userId', userId).append('activityType', i.toString())
    });
  }
}
