import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as _ from 'lodash';
@Component({
  selector: 'app-env-image-category',
  templateUrl: './env-image-category.component.html',
  styleUrls: ['./env-image-category.component.css']
})
export class EnvImageCategoryComponent implements OnInit {

  constructor(private db: AngularFireDatabase) { }
  categories: any;
  filteredCategories: any;
  
  category: string;
  
  filters = {}
  ngOnInit() {
    this.db.list('/imageDetails').valueChanges()
      .subscribe(categories => {
        this.categories = categories;
        this.applyFilters();
      });
  }
  private applyFilters() {
    this.filteredCategories = _.filter(this.categories, _.conforms(this.filters) );
  }
  filterExact(property: string, rule: any) {
    this.filters[property] = val => val == rule;
    this.applyFilters();
  }
  
  removeFilter(property: string) {
    delete this.filters[property]
    this[property] = null
    this.applyFilters();
  }

}
