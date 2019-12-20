import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  url = environment.fitnessServiceURL + 'test';

  constructor(private httpClient: HttpClient) {
  }

  async test() {
    return await this.httpClient.get(this.url).toPromise().then(
      (value: any) => {
        return value.result;
      }
    ).catch(
      reason => {
        return false;
      }
    );
  }
}
