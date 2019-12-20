import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { $ } from 'protractor';
import {AlertService} from '../../shared/alert.service';
import {AlertType} from '../../enums/alert-type.enum';
import {LoadingService} from '../../shared/loading.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Alert} from '../../classes/alert';
import {AuthService} from '../../shared/auth.service';
import { DisplayService } from 'src/app/services/display.service';

@Component({
  selector: 'app-login',
  templateUrl: './loginv.component.html',
  styleUrls: ['./loginv.component.scss']
})
export class LoginvComponent implements OnInit, OnDestroy {
  // public loginForm: FormGroup;
  // private subscriptions: Subscription[] = [];
  // private returnUrl: string;

  // constructor(
  //   private fb: FormBuilder,
  //   private alertService: AlertService,
  //   private loadingService: LoadingService,
  //   private auth: AuthService,
  //   private router: Router,
  //   private route: ActivatedRoute
  // ) {
  //   this.createForm();
  // }

  // ngOnInit() {
  //   this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/chat';
  // }


  // private createForm(): void {
  //   this.loginForm = this.fb.group({
  //     email: ['', [Validators.required, Validators.email]],
  //    password: ['', [Validators.required, Validators.minLength(8)]]
  //   });

  //   }

  //   public submit(): void {

  //     // const {email, password} = this.loginForm.value;
  //     // console.log(`Email: ${email}, Password: ${password}`);

  //     if (this.loginForm.valid) {
  //       this.loadingService.isLoading.next(true);
  //       const {email, password} = this.loginForm.value;

  //     // TODO call the auth service
  //       this.subscriptions.push(
  //       this.auth.login(email, password).subscribe(success => {
  //         if (success) {
  //           this.router.navigateByUrl(this.returnUrl);
  //         } else {
  //           this.displayFailedLogin();
  //         }
  //         this.loadingService.isLoading.next(false);
  //       })
  //     );
  //   } else {

  //     this.loadingService.isLoading.next(false);
  //     this.displayFailedLogin();

  //   }


  //   }

  // ngOnDestroy() {
  //   this.subscriptions.forEach(sub => sub.unsubscribe());
  // }

  // private displayFailedLogin(): void {
  //   const failedLoginAlert = new Alert('Invalid email/password combination, try again.', AlertType.Danger);
  //   this.alertService.alerts.next(failedLoginAlert);
  // }


  public loginForm: FormGroup;
  private subscriptions: Subscription[] = [];
  private returnUrl: string;

  constructor(
    private fb: FormBuilder, 
    private alertService: AlertService,
    private loadingService: LoadingService,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private display:DisplayService
  ) {
    this.createForm();
   }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/chat';

    this.subscriptions.push(
      this.auth.currentUser.subscribe(user => {
        if (!!user) {
          this.router.navigateByUrl('/chat');
        }
      })
    );
    this.display.changeNavBarState(false);
  }

  private createForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  public submit(): void {
    
    if (this.loginForm.valid) {
      this.loadingService.isLoading.next(true);
      const {email, password} = this.loginForm.value;

      // TODO call the auth service
      this.subscriptions.push(
        this.auth.login(email, password).subscribe(success => {
          if (success) {
            this.router.navigateByUrl(this.returnUrl);
          } else {
            this.displayFailedLogin();
          }
          this.loadingService.isLoading.next(false);
        })
      );
    } else {
      this.loadingService.isLoading.next(false);
      this.displayFailedLogin();
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private displayFailedLogin(): void {
    const failedLoginAlert = new Alert('Invalid email/password combination, try again.', AlertType.Danger);
    this.alertService.alerts.next(failedLoginAlert);
  }

}
