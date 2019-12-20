import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {$} from 'protractor';
import {Alert} from '../../classes/alert';
import {AlertType} from '../../enums/alert-type.enum';
import {Subscription} from 'rxjs';
import {AlertService} from '../../shared/alert.service';
import {AuthService} from '../../shared/auth.service';
import {LoadingService} from '../../shared/loading.service';
import {Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {

  // public signupForm: FormGroup;
  // private subscriptions: Subscription[] = [];

  // constructor(
  //   private fb: FormBuilder,
  //   private alertService: AlertService,
  //   private auth: AuthService,
  //   private loadingService: LoadingService,
  //   private router: Router,
  //   private db: AngularFirestore
  // ) {
  //   this.createForm();
  // }


  // ngOnInit() {
  //   // this.db.collection('temp').add({
  //   //   data: ' '
  //   // });
  // }


  // private createForm(): void {
  //   this.signupForm = this.fb.group({
  //     firstName: ['', [Validators.required]],
  //     lastName: ['', [Validators.required]],
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', [Validators.required, Validators.minLength(8)]]
  //   });

  // }

  // public submit() {
  //   // const {firstName, lastName, email, password} = this.signupForm.value;
  //   // console.log(`firstName: ${firstName},lastName: ${lastName},Email: ${email}, Password: ${password}`);

  //   if (this.signupForm.valid) {
  //     const {firstName, lastName, email, password} = this.signupForm.value;

  //     // TODO call the auth service
  //     this.subscriptions.push(
  //       this.auth.signup(firstName, lastName, email, password).subscribe(success => {
  //         if (success) {
  //           this.router.navigate(['/chat']);
  //         }
  //         this.loadingService.isLoading.next(false);
  //       })
  //     );
  //   } else {
  //     const failedSignedAlert = new Alert('Please enter a valid name, email and password, try again.', AlertType.Danger);
  //     this.alertService.alerts.next(failedSignedAlert);
  //   }
  // }

  // ngOnDestroy() {
  //   this.subscriptions.forEach(sub => sub.unsubscribe());
  // }

  public signupForm: FormGroup;
  private subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder, 
    private alertService: AlertService,
    private auth: AuthService,
    private loadingService: LoadingService,
    private router: Router
  ) {
    this.createForm();
   }

  ngOnInit() {
  }

  private createForm(): void {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  public submit(): void {

    if (this.signupForm.valid) {
      const {firstName, lastName, email, password} = this.signupForm.value;

      // TODO call the auth service
      this.subscriptions.push(
        this.auth.signup(firstName, lastName, email, password).subscribe(success => {
          if (success) {
            this.router.navigate(['/chat']);
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

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
