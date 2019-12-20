import { Component, OnInit } from '@angular/core';
import { EnvironmentImageService } from 'src/app/services/environment-image.service';

@Component({
  selector: 'app-environment-images-data',
  templateUrl: './environment-images-data.component.html',
})
export class EnvironmentImagesDataComponent implements OnInit {

  constructor(private service: EnvironmentImageService) { }

  ngOnInit() {
    this.service.getImageDetailList();
  }


}
