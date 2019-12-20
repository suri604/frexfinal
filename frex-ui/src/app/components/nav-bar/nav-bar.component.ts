import {RegisteruserService} from '../../services/registeruser.service';
import {Component, OnInit, Input} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import {
  NgbModal,
  ModalDismissReasons
} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {LoginServiceService} from '../../services/login-service.service';
import {DisplayService} from '../../services/display.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertService } from '../volunteer/shared/alert.service';
import { Alert } from '../volunteer/classes/alert';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  title = 'frex-login';
  loginFailed: any;
  private loginBody;
  public username = localStorage.getItem('username');
  private loginBody2 = {
    eMail: '',
    firstName: '',
    lastName: '',
    password: '',
    phoneNumber: '',
    roles: '',
    username: ''
  };
  roles: any = ['admin', 'user'];
  public body = {
    username: '',
    password: ''
  };
  @Input() event: boolean;

  show = false;
  profileForm: FormGroup;
  submitted = false;
  logged = false;
  errorLogged = false;
  wrongPass = false;
  authentication = true;
  gradientForm: FormGroup;
  private token;
  displayNavBar: boolean;

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private service: LoginServiceService,
    private router: Router,
    private service2: RegisteruserService,
    public fb2: FormBuilder,
    private alertService: AlertService,
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private displayService: DisplayService
  ) {
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.displayService.currentNavBarState.subscribe(
      (state: boolean) => {
        this.displayNavBar = state;
      });
    this.profileForm = this.fb.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
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

    this.gradientForm = this.fb2.group({
      gradientFormEmailEx: ['', Validators.required],
      gradientFormPasswordEx: ['', Validators.required]
    });
    // console.log(localStorage.username);
    console.log('asd');
    this.logged = localStorage.username.length > 0;

    // noinspection JSDeprecatedSymbols
    $(document).ready(() => {
      // Transition effect for navbar
      // noinspection JSDeprecatedSymbols
      $(window).scroll(() => {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if ($(this).scrollTop() > 100) {
          $('.fixed-top').addClass('solid');
        } else {
          $('.fixed-top').removeClass('solid');
        }
      });
    });
  }


  onlogin() {
    this.errorLogged = true;
    if (this.gradientForm.invalid) {
      console.log('invalid submission');
      return;
    }

    this.authenticate(
      this.gradientForm.value.gradientFormEmailEx,
      this.gradientForm.value.gradientFormPasswordEx,
      this.loginFailed
    );
  }

  public logout():void {
    localStorage.clear();
    this.router.navigate(['/']).then(null);
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
      this.alertService.alerts.next(new Alert('You have been signed out.'));
    });
  }
  

  gotoaccount(){
    this.router.navigate(['/details/'+this.username]).then(null);
  }


  authenticate(name, pass, loginFailed) {
    this.body.username = name;
    this.body.password = pass;
    this.service.authenticateUser(this.body).subscribe(
      (data: any) => {
        console.log(data.token);
        this.token = data.token;
        console.log(atob(this.token.split('.')[1]));
        this.modalService.dismissAll();
      },
      error => {
        console.log('in error' + error);
        this.wrongPass = true;
        // this.modalService.open(loginFailed, {
        //   ariaLabelledBy: "modal-login-failed"
        // });
      },
      () => {
        this.authentication = false;
        this.logged = true;
        this.username = name;
        this.router.navigate(['/']);
      }
    );
  }

  open() {
    this.modalService.dismissAll();
    this.router.navigate(['/register']);
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.loginBody = this.profileForm.value;
    console.log(this.loginBody);
    this.loginBody2.eMail = this.loginBody.eMail;
    this.loginBody2.firstName = this.loginBody.firstName;
    this.loginBody2.lastName = this.loginBody.lastName;
    this.loginBody2.username = this.loginBody.username;
    this.loginBody2.phoneNumber = this.loginBody.phoneNumber;
    this.loginBody2.password = this.loginBody.passWord;
    this.loginBody2.roles = this.loginBody.roles;

    this.submitted = true;
    if (this.profileForm.invalid) {
      console.log('invalid submission');
      return;
    }
    this.modalService.dismissAll();
    this.register();
  }

  get f1() {
    return this.gradientForm.controls;
  }

  get f() {
    return this.profileForm.controls;
  }

  changeCity(e) {
    console.log(e.target.value);
    console.log(e.target);
    if (e.target.value === '1: admin') {
      this.profileForm.value.roles = 'ROLE_ADMIN';
      this.show = true;
    } else {
      this.profileForm.value.roles = 'ROLE_USER';
      this.show = false;
    }
  }

  register() {
    this.service2.registerUser(this.loginBody2).subscribe();
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
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

  home() {
    this.router.navigate(['/']);
  }
}

