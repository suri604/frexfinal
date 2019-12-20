import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  private navBarStateSource = new BehaviorSubject(true);
  currentNavBarState = this.navBarStateSource.asObservable();

  constructor() {
  }

  changeNavBarState(state: boolean) {
    this.navBarStateSource.next(state);
  }
}
