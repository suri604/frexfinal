import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FeedComponent} from '../components/images/feed/feed.component';
import {ImageComponent} from '../components/images/image/image.component';
import {ImageListComponent} from '../components/environment-images-data/image-list/image-list.component';
import {ImagesComponent} from '../components/images/images.component';
import {PhotolistComponent} from '../components/images/photolist/photolist.component';
import {PostImageDetailsComponent} from '../components/environment-images-data/post-image-details/post-image-details.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { PhotouploadComponent } from '../components/images/photoupload/photoupload.component';



@NgModule({
  declarations: [
    FeedComponent,
   
    ImageListComponent,
    ImagesComponent,
    PhotolistComponent,
    PostImageDetailsComponent,
    PhotouploadComponent,
  
 
    ImageComponent, 
 
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ]
})
export class PhotographyXModule { }
