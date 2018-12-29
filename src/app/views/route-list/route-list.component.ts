import { Component, OnInit, Input } from '@angular/core';
import { Route } from 'src/app/models/route';
import { RouteService } from 'src/app/route/route.service';
import { Observable } from 'rxjs'

@Component({
  selector: 'clg-route-list',
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.scss']
})
export class RouteListComponent implements OnInit {

  routes: Observable<Route[]>

  constructor(public routeService: RouteService) { }

  

  ngOnInit() {
    
    this.routes = this.routeService.routes
   }

}
