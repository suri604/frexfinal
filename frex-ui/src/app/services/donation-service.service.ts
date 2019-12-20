import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class DonationService {
  // url=environment.couponsurl;
  private url: string = environment.couponsurl;
  
  constructor(private http : HttpClient) { }

donation(body){
  console.log('came here',body);

return this.http.post('http://13.234.200.23:8095/rest/users/donate',body);
}
getrewardpoints(username) {
  return this.http.get(this.url + "/getRewards/"+username);

  }
  updateRewardPoints(username,points){
    return this.http.post(this.url+"/update/rewards",
    {
      "username":username,
       "points":points
    })
  }

// donation(token: body) {
//   // const headers = new HttpHeaders({'token': token});
//   this.http.post('http://localhost:8095/rest/users/donate', token,  {responseType: 'text'})
//     .subscribe(resp => {
//       console.log(resp);
//     })
// }
}
