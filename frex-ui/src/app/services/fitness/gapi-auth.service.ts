import {Injectable} from '@angular/core';
import {GoogleAuthService} from 'ng-gapi';
import {FitInfoService} from './fit-info.service';

@Injectable({
  providedIn: 'root'
})
export class GapiAuthService {
  public static SESSION_STORAGE_KEY = 'accessToken';
  private user;

  constructor(
    private googleAuth: GoogleAuthService,
    private fitInfoService: FitInfoService
  ) {
  }

  public getToken(): string {
    const token: string = localStorage.getItem(GapiAuthService.SESSION_STORAGE_KEY);
    if (!token) {
      throw new Error('no token set , authentication required');
    }
    return localStorage.getItem(GapiAuthService.SESSION_STORAGE_KEY);
  }

  public getEmail(): string {
    const token: string = localStorage.getItem(GapiAuthService.SESSION_STORAGE_KEY);
    if (!token) {
      throw new Error('no token set , authentication required');
    }
    return localStorage.getItem(GapiAuthService.SESSION_STORAGE_KEY);
  }

  public async signIn() {
    this.googleAuth.getAuth().subscribe((auth) => {
      auth.grantOfflineAccess().then(
        (result) => {
          console.warn(result);
          this.fitInfoService.sendAuthCodeToServer(result.code).then(
            (result1) => {
              console.log(result1);
            }
          ).catch(
            (reason1) => {
              console.log(reason1);
            }
          );
        });
      // return auth.signIn().then(res => {
      //   this.signInSuccessHandler(res);
      //   res.grantOfflineAccess();
      // });
    });
  }

  private async signInSuccessHandler(res: any) {
    this.user = res;
    console.log(res);
    await localStorage.setItem('fit_access_token', res.Zi.access_token);
    await localStorage.setItem('id_token', res.Zi.id_token);
    await localStorage.setItem('fit_name', res.w3.ig);
    await localStorage.setItem(GapiAuthService.SESSION_STORAGE_KEY, res.getAuthResponse().access_token);
    await localStorage.setItem('fit_email', res.w3.U3);
    return true;
  }
}
