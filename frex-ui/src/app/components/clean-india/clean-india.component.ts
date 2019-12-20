import { Component, OnInit } from '@angular/core';
import { CleanIndiaService } from 'src/app/services/clean-india.service';

@Component({
  selector: 'app-clean-india',
  templateUrl: './clean-india.component.html',
  styleUrls: ['./clean-india.component.css']
})
export class CleanIndiaComponent implements OnInit {

  constructor(private service: CleanIndiaService) { }

  ngOnInit() {
    this.service.getImageDetailList();
  }

}
