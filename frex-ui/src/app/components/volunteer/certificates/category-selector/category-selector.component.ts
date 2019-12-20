import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {CategoryService} from '../../shared/category.service';
import Item = firebase.analytics.Item;
import {AngularFirestore} from '@angular/fire/firestore';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/combineLatest';
import {AngularFireDatabase} from '@angular/fire/database';
import * as _ from 'lodash';



@Component({
  selector: 'app-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.scss']
})
export class CategorySelectorComponent implements OnInit {


  constructor(private db: AngularFireDatabase) { }

  /// unwrapped arrays from firebase
  categories: any;
  filteredCategories: any;

  /// filter-able properties
  category: string;
  // weight:     number;
  // endangered: boolean;

  /// Active filter rules
  filters = {}

  ngOnInit() {
    this.db.list('/certificateDetails').valueChanges()
      .subscribe(categories => {
        this.categories = categories;
        this.applyFilters();
      });
  }

  private applyFilters() {
    this.filteredCategories = _.filter(this.categories, _.conforms(this.filters) );
  }

  /// filter property by equality to rule
  filterExact(property: string, rule: any) {
    // tslint:disable-next-line:triple-equals
    this.filters[property] = val => val == rule;
    this.applyFilters();
  }

  // /// filter  numbers greater than rule
  // filterGreaterThan(property: string, rule: number) {
  //   this.filters[property] = val => val > rule
  //   this.applyFilters()
  // }
  //
  // /// filter properties that resolve to true
  // filterBoolean(property: string, rule: boolean) {
  //   if (!rule) this.removeFilter(property)
  //   else {
  //     this.filters[property] = val => val
  //     this.applyFilters()
  //   }
  // }

  /// removes filter
  removeFilter(property: string) {
    delete this.filters[property]
    this[property] = null
    this.applyFilters();
  }
}

