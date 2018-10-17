import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { RouteService } from 'src/app/route/route.service';
import { Route } from 'src/app/models/route';

@Component({
  selector: 'clg-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  routes: Route[];
  constructor(public auth: AuthService, private routeService: RouteService) { }

  ngOnInit() {
    this.routeService.allRoutes().subscribe( r => {
      this.routes = r;
      console.log(r);
    });
  }

}
