import {LoginServiceService} from './services/login-service.service';
import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {UserServiceService} from './services/user-service.service';
import {PartnerServiceService} from './services/partner-service.service';
import {AppRoutingModule} from './modules/app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AngularMaterialModule} from './modules/angular-material.module';
import {Ng5SliderModule} from 'ng5-slider';
import {AngularFirebaseModule} from './modules/angular-firebase.module';
import {AlertService} from './components/volunteer/shared/alert.service';
import {LoadingService} from './components/volunteer/shared/loading.service';
import {AuthService} from './components/volunteer/shared/auth.service';
import {ChatroomService} from './components/volunteer/shared/chatroom.service';
import {AuthGuard} from './components/volunteer/guards/auth.guard';
import {CommonModule} from '@angular/common';
import {NgxLoadingModule} from 'ngx-loading';
import {AlertModule} from 'ngx-bootstrap';
import {DocPipe} from './util/doc.pipe';
import {FitnessModule} from './modules/fitness.module';
import {FrexWallModule} from './modules/frex-wall.module';
import {EnvironmentModule} from './modules/environment.module';
import {MiscellaneousModule} from './modules/miscellaneous.module';
import {PhotographyXModule} from './modules/photography-x.module';
import {UserProfileModule} from './modules/user-profile.module';
import {LeaderboardService} from './services/leaderboard.service';
import {PhotograpyDashboardComponent} from './components/photograpy-dashboard/photograpy-dashboard.component';
import {PhotographyFocusComponent} from './components/photography-focus/photography-focus.component';
import {PhotographyHomeComponent} from './components/photography-home/photography-home.component';
import {MatIconModule} from '@angular/material';
import {FitnessPickActivityComponent} from './components/fitness-pick-activity/fitness-pick-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    DocPipe,
    PhotograpyDashboardComponent,
    PhotographyFocusComponent,
    PhotographyHomeComponent,
    FitnessPickActivityComponent
  ],
  imports: [
    FormsModule,
    FitnessModule,
    FrexWallModule,
    EnvironmentModule,
    MiscellaneousModule,
    PhotographyXModule,
    UserProfileModule,
    AngularFirebaseModule,
    BrowserModule,
    HttpClientModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    NgbModule,
    AlertModule.forRoot(),
    AngularFontAwesomeModule,
    AngularMaterialModule,
    AngularFirebaseModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    Ng5SliderModule,
    NgbModule,
    NgxLoadingModule,
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    ReactiveFormsModule,
    MatIconModule,
    MatIconModule
  ],
  providers: [
    AlertService,
    AuthGuard,
    AuthService,
    ChatroomService,
    LoadingService,
    LoginServiceService,
    PartnerServiceService,
    UserServiceService,
    LeaderboardService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
