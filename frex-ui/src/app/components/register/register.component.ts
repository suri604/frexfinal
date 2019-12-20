import {UserServiceService} from './../../services/user-service.service';
import {User} from '../../util/user';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {RegisteruserService} from './../../services/registeruser.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Title} from '@angular/platform-browser';
import {Alert} from '../volunteer/classes/alert';
import {AlertType} from '../volunteer/enums/alert-type.enum';
import {Subscription} from 'rxjs';
import {AlertService} from '../volunteer/shared/alert.service';
import {AuthService} from '../volunteer/shared/auth.service';
import {LoadingService} from '../volunteer/shared/loading.service';
import {Router} from '@angular/router';


import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  public profileForm: FormGroup;
  private subscriptions: Subscription[] = [];


  // profileForm: FormGroup;
  public loginBody2 = {
    eMail: '',
    firstName: '',
    lastName: '',
    password: '',
    phoneNumber: '',
    roles: 'ROLE_USER',
    username: ''
  };
  public loginBody;
  user: User = new User();
  error = true;

  constructor(private titleService: Title, private fb: FormBuilder, private service: RegisteruserService, private _snackBar: MatSnackBar, private userservice: UserServiceService,
              private alertService: AlertService,
              private auth: AuthService,
              private loadingService: LoadingService,
              private router: Router) {
    this.createForm();
  }

  ngOnInit() {
    this.titleService.setTitle('Get started today!');
    this.profileForm = this.fb.group(
      {
        firstName: ['', Validators.required],
        lastName: [''],
        eMail: ['', [Validators.required, Validators.email]],
        passWord: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        username: ['', Validators.required],
        phoneNumber: ['', Validators.required]
      },
      {
        validator: this.MustMatch('passWord', 'confirmPassword')
      }
    );
  }

  private createForm(): void {
    this.profileForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      eMail: ['', [Validators.required, Validators.email]],
      passWord: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      username: ['', Validators.required],
      phoneNumber: ['', Validators.required]
    });
  }


  public submit(): void {

    if (this.profileForm.valid) {
      const {firstName, lastName, eMail, passWord} = this.profileForm.value;

      // TODO call the auth service
      this.subscriptions.push(
        this.auth.signup(firstName, lastName, eMail, passWord).subscribe(success => {
          if (success) {
            // this.router.navigate(['chat', 'GqNGhkScijcSGSutQWNI']);
            // this.router.navigate(['']).then(null);
          } else {
            const failedSignupAlert = new Alert('There was a problem signing up, try again.', AlertType.Danger);
            this.alertService.alerts.next(failedSignupAlert);
          }

          this.loadingService.isLoading.next(false);
        })
      );
    } else {
      const failedSignupAlert = new Alert('Please enter a valid name, email and password, try again.', AlertType.Danger);
      this.alertService.alerts.next(failedSignupAlert);
    }
  }


  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.loginBody = this.profileForm.value;
    console.log(this.loginBody);
    this.loginBody2.eMail = this.loginBody.eMail;
    this.user.mailId = this.loginBody2.eMail;

    this.loginBody2.firstName = this.loginBody.firstName;
    this.user.firstName = this.loginBody2.firstName;

    this.loginBody2.lastName = this.loginBody.lastName;
    this.user.lastName = this.loginBody2.lastName;

    this.loginBody2.username = this.loginBody.username;
    this.user.userName = this.loginBody2.username;

    this.loginBody2.phoneNumber = this.loginBody.phoneNumber;
    this.user.phoneNumber = this.loginBody2.phoneNumber;

    this.loginBody2.password = this.loginBody.passWord;

    if (this.profileForm.invalid) {
      console.log('invalid submission');
      return;
    }

    //  this.service.registerUser(this.loginBody2).subscribe();

    this.service
      .registerUser(this.loginBody2).subscribe((data: any) => {
        console.log(data);
      },
      // tslint:disable-next-line: no-unused-expression
      err => {
        console.log(err);
        this._snackBar.open('sorry ', err.error, {
          duration: 10000,
        });
      },
      () => {
        this._snackBar.open('Congrats', 'Registration Successful', {
          duration: 2000,
        });
        this.error = false;
        this.userservice.save(this.user).subscribe(
          (data: any) => {
            console.log(data);
          });
      }
    );
  }


  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControlng  if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({mustMatch: true});
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}



