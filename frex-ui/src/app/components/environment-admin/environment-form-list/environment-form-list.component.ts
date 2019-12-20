import { Component, OnInit } from '@angular/core';
import { EnvironmentAdminService } from 'src/app/services/environment-admin.service';

@Component({
  selector: 'app-environment-form-list',
  templateUrl: './environment-form-list.component.html',
  styleUrls: ['./environment-form-list.component.css']
})
export class EnvironmentFormListComponent implements OnInit {

  imageList: any[];
  rowIndexArray: any[];

  constructor(private service: EnvironmentAdminService) { }

  ngOnInit() {
    this.service.imageDetailList.snapshotChanges().subscribe(
      list => {
        this.imageList = list.map(item => { return item.payload.val(); });
        this.rowIndexArray =  Array.from(Array(Math.ceil(this.imageList.length)).keys());
      }
    );
  }

}
