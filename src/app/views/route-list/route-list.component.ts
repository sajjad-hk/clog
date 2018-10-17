import { Component, OnInit, Input } from '@angular/core';
import { Route } from 'src/app/models/route';

@Component({
  selector: 'clg-route-list',
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.scss']
})
export class RouteListComponent implements OnInit {

  @Input() routes: Array<Route>;
  constructor() { }

  ngOnInit() { }

}
