import { state, style, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { JOBS } from '../jobs';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  animations: []
})
export class InfoComponent implements OnInit {
  constructor() { }

  jobs = JOBS;

  ngOnInit(): void {
  }

}
