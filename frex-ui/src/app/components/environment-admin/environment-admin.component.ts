import { Component, OnInit } from '@angular/core';
import { EnvironmentAdminService } from 'src/app/services/environment-admin.service';

@Component({
  selector: 'app-environment-admin',
  templateUrl: './environment-admin.component.html',
  styleUrls: ['./environment-admin.component.css']
})
export class EnvironmentAdminComponent implements OnInit {

  constructor(private service: EnvironmentAdminService) { }

  ngOnInit() {
    this.service.getImageDetailList();
  }

}
