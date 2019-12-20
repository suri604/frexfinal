import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserProfileDetailsFormComponent} from '../components/user-profile-details-form/user-profile-details-form.component';
import {UserProfileUpdateFormComponent} from '../components/user-profile-update-form/user-profile-update-form.component';
import {AngularMaterialModule} from './angular-material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    UserProfileDetailsFormComponent,
    UserProfileUpdateFormComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserProfileModule { }
