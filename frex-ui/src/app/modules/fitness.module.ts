import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FitnessDashboardComponent} from '../components/fitness-dashboard/fitness-dashboard.component';
import {
  FitnessDetailsComponent,
  FitnessInfoDialogComponent,
  RewardsDialogComponent
} from '../components/fitness-details/fitness-details.component';
import {FitnessFocusComponent} from '../components/fitness-focus/fitness-focus.component';
import {FitnessHomeComponent} from '../components/fitness-home/fitness-home.component';

import {GoogleApiModule, NG_GAPI_CONFIG, NgGapiClientConfig} from 'ng-gapi';
import {AngularMaterialModule} from './angular-material.module';
import {Ng5SliderModule} from 'ng5-slider';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {GapiService} from '../services/fitness/gapi.service';
import {GapiAuthService} from '../services/fitness/gapi-auth.service';
import {Ng2GoogleChartsModule} from 'ng2-google-charts';
import {AppRoutingModule} from './app-routing.module';
import {BasicInfoService} from '../services/fitness/basic-info.service';
import {FreakInfoService} from '../services/fitness/freak-info.service';
import {ActivityInfoService} from '../services/fitness/activity-info.service';

const gapiClientConfig: NgGapiClientConfig = {
  client_id: '796297950269-t1eul206lv7pq40p7ckubfrdmdgvb83d.apps.googleusercontent.com',
  discoveryDocs: ['https://analyticsreporting.googleapis.com/$discovery/rest?version=v4'],
  scope: [
    'https://www.googleapis.com/auth/analytics.readonly',
    'https://www.googleapis.com/auth/analytics',
    'https://www.googleapis.com/auth/fitness.activity.read',
    'https://www.googleapis.com/auth/fitness.activity.write',
  ].join(' '),
  ux_mode: 'popup',
};

@NgModule({
  declarations: [
    FitnessDashboardComponent,
    FitnessDetailsComponent,
    FitnessFocusComponent,
    FitnessHomeComponent,
    FitnessInfoDialogComponent,
    RewardsDialogComponent
  ],
  imports: [
    AngularMaterialModule,
    CommonModule,
    Ng5SliderModule,
    Ng2GoogleChartsModule,
    FormsModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig,
    }),
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  entryComponents: [
    FitnessInfoDialogComponent,
    RewardsDialogComponent
  ],
  providers: [
    GapiService,
    GapiAuthService,
    BasicInfoService,
    FreakInfoService,
    ActivityInfoService
  ]
})
export class FitnessModule {
}
