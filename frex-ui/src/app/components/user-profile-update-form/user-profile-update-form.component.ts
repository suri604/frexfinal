import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../util/user';
import { UserServiceService } from '../../services/user-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-profile-update-form',
  templateUrl: './user-profile-update-form.component.html',
  styleUrls: ['./user-profile-update-form.component.css'],
  providers: [DatePipe]
})
export class UserProfileUpdateFormComponent implements OnInit {

  userId: string;
  user = new User();
  url;
  date: string;
  value :string;
  uptoFirebase="https://firebasestorage.googleapis.com/v0/b/volunteer-44353.appspot.com/o/images%2F";
  afterFirebase="?alt=media&token=d7870b45-0b10-4878-b54f-4b78e20b42f0";
  
  constructor(private datePipe: DatePipe, private userservice: UserServiceService, private router: Router, private http: HttpClient,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId= params.id;
      this.demoMethod();
    })
  }

  async demoMethod() {
    const username = await this.userservice.view(this.userId).toPromise().then(
      data => {
        this.user = data;
        console.log("data : ", this.user);
        console.log(this.user.userName);
        this.url=this.uptoFirebase+this.user.userName+this.afterFirebase;
        return this.user.userName;
      }
    ).catch(
      (error) => {
        console.log(error);
        this.router.navigate(['']);
      }
    );
    console.log(username);
    console.log("inside else");
    this.date = this.datePipe.transform(this.user.dateOfBirth, 'dd/MM/yyyy');
    // this.userservice.view(username);
  }

  dash(){
    window.location.href = "http://13.234.200.23:4200/globaldashboard";
  }
  

  editForm() {
    console.log(this.userId);
    this.userservice.update(this.user);
    this.router.navigate(['details/update/' + this.user.userName])
  }

  deleteForm() {
    console.log(this.user.userName);
    if(confirm('Do you want to delete your profile?'))
    {
      this.userservice.delete(this.user.userName).subscribe();
      this.router.navigate(['']);
    }
    else {
      alert('Phew that was close! :D')
    }
  }
}
