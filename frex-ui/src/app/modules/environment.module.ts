import {NgModule} from '@angular/core';
import {EnvironmentAdminService} from '../services/environment-admin.service';
import {EnvironmentImageService} from '../services/environment-image.service';
import {EnvironmentTicketService} from '../services/environment-ticket.service';
import {LoadingService} from '../components/volunteer/shared/loading.service';
import {EnvImageCategoryComponent} from '../components/environment-images-data/env-image-category/env-image-category.component';
import {EnvironmentAdminComponent} from '../components/environment-admin/environment-admin.component';
import {EnvironmentDashboardProfileComponent} from '../components/environment-dashboard-profile/environment-dashboard-profile.component';
import {EnvironmentFormListComponent} from '../components/environment-admin/environment-form-list/environment-form-list.component';
import {EnvironmentHomeComponent} from '../components/environment-home/environment-home.component';
import {EnvironmentImagesDataComponent} from '../components/environment-images-data/environment-images-data.component';
import {EnvironmentMainComponent} from '../components/environment-main/environment-main.component';
// tslint:disable-next-line: max-line-length
import {EnvironmentPostDailytasksFormComponent} from '../components/environment-admin/environment-post-dailytasks-form/environment-post-dailytasks-form.component';
import {EnvironmentQuotesComponent} from '../components/environment-quotes/environment-quotes.component';
import {EnvironmentTicketListComponent} from '../components/environment-ticket-list/environment-ticket-list.component';
import {EventCardComponent} from '../components/volunteer/events/event-cards/event-card.component';
import {CleanImageComponent} from '../components/clean-india/clean-image/clean-image.component';
import {CleanIndiaComponent} from '../components/clean-india/clean-india.component';
import {CleanIndiaPostImageComponent} from '../components/clean-india/clean-india-post-image/clean-india-post-image.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularMaterialModule} from './angular-material.module';
import {AppRoutingModule} from './app-routing.module';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {CleanIndiaService} from '../services/clean-india.service';
import {FeedComponent} from '../components/images/feed/feed.component';
import { EnvMainCleanComponent } from '../components/env-main-clean/env-main-clean.component';

@NgModule({
  declarations: [
    CleanImageComponent,
    CleanIndiaComponent,
    CleanIndiaPostImageComponent,
    EnvImageCategoryComponent,
    EnvironmentAdminComponent,
    EnvironmentDashboardProfileComponent,
    EnvironmentFormListComponent,
    EnvironmentHomeComponent,
    EnvironmentImagesDataComponent,
    EnvironmentMainComponent,
    EnvironmentPostDailytasksFormComponent,
    EnvironmentQuotesComponent,
    EnvironmentTicketListComponent,
    EnvMainCleanComponent
  ],
  providers: [
    CleanIndiaService,
    EnvironmentAdminService,
    EnvironmentImageService,
    EnvironmentTicketService,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    AppRoutingModule,
    MDBBootstrapModule,
  
  ]
})
export class EnvironmentModule {}
