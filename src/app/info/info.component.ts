import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { JOBS } from '../jobs';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  animations: [
    trigger('cardFlip', [
      state('default', style({
        transform: 'none'
      })),
      state('flipped', style({
        height: '60rem',
        width: '20rem',
        transform: 'rotateY(180deg)'
      })),
      transition('default => flipped', [
        animate('300ms')
      ]),
      transition('flipped => default', [
        animate('200ms')
      ])
    ])
  ]
})
export class InfoComponent implements OnInit {
  constructor() { }

  jobs = JOBS;

  ngOnInit(): void {
  }

  cardClicked(index: number): void {
    console.log(index);
    if(this.jobs[index].state === 'default') {
      this.jobs[index].state = 'flipped';
    } else {
      this.jobs[index].state = "default";
    }
  }

}
