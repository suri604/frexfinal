// import { Injectable } from '@angular/core';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class CertificateService {
//
//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import 'rxjs/add/operator/switchMap';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  certificateDetailList: AngularFireList<any>;

  constructor(
    private firebase: AngularFireDatabase,
    private router: Router
    ) { }

  getCertificateDetailList() {
    this.certificateDetailList = this.firebase.list('certificateDetails');
  }

  insertCertificateDetails(certificateDetails) {
    localStorage.setItem('username', 'Jagriti');
    if(localStorage.getItem('username') !== null && localStorage.getItem('username') !== '') {
      certificateDetails.username = localStorage.getItem('username');
      this.certificateDetailList.push(certificateDetails);
    } else {
      this.router.navigate(['login','redirectTo="volunteer/dashboard"'])
    }
    
  }



}
