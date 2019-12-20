import { async } from "@angular/core/testing";
import { LoginServiceService } from "./../../services/login-service.service";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import firebase from '@firebase/app';
require('firebase/auth');

import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validator,
  Validators
} from "@angular/forms";
import { Subscription } from 'rxjs';
import { AuthService } from '../volunteer/shared/auth.service';
import { Alert } from '../volunteer/classes/alert';
import { AlertType } from '../volunteer/enums/alert-type.enum';
import { AlertService } from '../volunteer/shared/alert.service';
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  gradientForm: FormGroup;
  private subscriptions: Subscription[] = [];

  @Output() eventClicked = new EventEmitter<boolean>();

  constructor(
    private fb: FormBuilder,
    private service: LoginServiceService,
    private router: Router,
    private auth: AuthService,
    private alertService: AlertService,
  ) {}
  public body = {
    username: "",
    password: ""
  };
  logged = false;
  notlogged = true;
  private token;
  private username;
  

  public profile = {
    eMail: "",
    firstName: "",
    lastName: "",

    phoneNumber: "",

    username: "23"
  };
   err = false;
  ngOnInit() {
    this.gradientForm = this.fb.group({
      gradientFormEmailEx: ["", Validators.required],
      gradientFormEmailExWa: ["", Validators.required],
      gradientFormPasswordEx: ["", Validators.required]
    });
  }


  

  public submit(): void {


   
  }


  onlogin() {
    console.log("onlogin");
    if (this.gradientForm.invalid) {
      console.log("invalid submission");
      return;
    }

    this.authenticate(
      this.gradientForm.value.gradientFormEmailEx,
      this.gradientForm.value.gradientFormPasswordEx
    );
  }

  async authenticate(name, pass) {
    this.body.username = name;

    
    this.body.password = pass;
    await this.service
      .authenticateUser(this.body)
      .toPromise()
      .then(async (data: any) => {
        console.log(data.token);
        this.token = data.token;
        console.log(atob(this.token.split(".")[1]));
        await this.service
          .getdetails(name)
          .toPromise()
          .then((data2: any) => {
            this.profile.eMail = data2.eMail;
            this.profile.firstName = data2.firstName;
            this.profile.lastName = data2.lastName;
            this.profile.phoneNumber = data2.phoneNumber;
            this.profile.username = data2.username;
            console.log(data2.username);
            console.log(this.profile);
          });
        this.err = false;
      })
      .catch(error => {
        console.log("in error" + error);
        this.err = true;
      });
    // () => {
    if (!this.err) {
      this.logged = true;
      this.notlogged = false;
      const key = "username";
      this.username = name;
      if (this.gradientForm.valid) {
      
        const {gradientFormEmailExWa, gradientFormPasswordEx} = this.gradientForm.value;
  
        // TODO call the auth service
        this.subscriptions.push(
          this.auth.login(gradientFormEmailExWa, gradientFormPasswordEx).subscribe(success => {
            if (success) {
              // this.router.navigate(['chat','GqNGhkScijcSGSutQWNI']);
              this.router.navigate(['/globaldashboard']);
            } 
          })
        );
      } 
      localStorage.setItem(key, this.username);
      console.log(this.profile);
      localStorage.setItem("newUser", JSON.stringify(this.profile));
      window.location.href = "http://frex.stackroute.io/globaldashboard";
      
    }

  }

  
}
