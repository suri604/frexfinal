import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PartnerServiceService {

  url = environment.partnersServiceUrl+'/api/';
  public save(model: DataModel) {
    console.log(this.url, "data : ", model);
    this.http.post<DataModel>(this.url, model).subscribe(
      res => {
        alert("Successfully posted");
        location.reload();
      },
      err => {
        alert("an error has occured")
      }
    );
  }
  constructor(private http: HttpClient) { }
}


export interface DataModel {
  id: number,
  firstname: string;
  lastname: string;
  company: string;
  website: string;
  email: string;
  phone: number;
  country: string;
  noofemployees: number;
}
