import { Component, OnInit, Input } from '@angular/core';
import { Route } from 'src/app/models/route';

@Component({
  selector: 'clg-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent implements OnInit {

  @Input() route: Route;
  constructor() { }

  ngOnInit() {
  }

}
