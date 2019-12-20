import {Injectable} from '@angular/core';
import {GoogleApiService} from 'ng-gapi';

@Injectable({
  providedIn: 'root'
})
export class GapiService {
  constructor(private googleApiService: GoogleApiService) {
  }

  init() {
    this.googleApiService.onLoad().subscribe(
      (result) => {
        console.log(result);
      });
  }
}
