import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PartnerServiceService } from 'src/app/services/partner-service.service';

@Component({
  selector: 'app-become-partner',
  templateUrl: './become-partner.component.html',
  styleUrls: ['./become-partner.component.css']
})
export class BecomePartnerComponent implements OnInit {

  model:DataModel={
    id:28,
    firstname: '',
    lastname: '',
    company: '',
    website: '',
    email: '',
    phone: null,
    country: '',
    noofemployees: null
  }

  constructor(private http:HttpClient,private partnerservice: PartnerServiceService) { }

  ngOnInit() {
  }

  onsubmit():void{
    // let url="http://localhost:8095/rest/users/addpartner"

    this.partnerservice.save(this.model);


    // this.http.post(url,this.model).subscribe(
    //   res=>{
    //     alert("Successfully posted");
    //     location.reload();
    //   },
    //   err=>{
    //     alert("an error has occured")
    //   }
    // )
    
    
    // this.http.post(url,this.model, {responseType: 'text'}).subscribe(data => {
    //   console.log(data)
    // })
  }
  
}
export interface DataModel{
  id:number,
  firstname: string;
  lastname: string;
  company: string;
  website: string;
  email: string;
  phone: number;
  country: string;
  noofemployees: number;
}

