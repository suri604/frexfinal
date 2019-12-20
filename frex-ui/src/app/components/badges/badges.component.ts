import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { badges } from 'src/app/util/badges'

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})

export class BadgesComponent implements OnInit {

  bgs = badges;
  flip= ['inactive'];


  constructor() {
  }

  ngOnInit() {
    for (var ele in this.bgs)
    {
      this.flip.push('inactive');
      // console.log(this.flip) ;
    }
  }


  toggleFlip(i) {
    this.flip[i] = (this.flip[i] == 'inactive') ? 'active' : 'inactive';
  }

}
