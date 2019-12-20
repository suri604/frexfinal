import { Component, OnInit } from '@angular/core';
import {CertificateService} from '../../shared/certificate.service';
import 'rxjs-compat/add/operator/do';

@Component({
  selector: 'app-certificate-list',
  templateUrl: './certificate-list.component.html',
  styleUrls: ['./certificate-list.component.scss']
})
export class CertificateListComponent implements OnInit {
  certificateList: any;
  rowIndexArray: any;

  constructor(private service: CertificateService) { }

  ngOnInit() {
    this.service.certificateDetailList.snapshotChanges().subscribe(
      list => {
        this.certificateList = list.map(item => { return item.payload.val(); });
        this.rowIndexArray =  Array.from(Array(Math.ceil((this.certificateList.length + 1) / 3)).keys());
      }
    );
  }

}
