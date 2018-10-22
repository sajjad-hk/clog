import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { RouteService } from 'src/app/route/route.service';
import { Route } from 'src/app/models/route';
import { RouteWizardComponent } from '../route-wizard/route-wizard.component';

@Component({
  selector: 'clg-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  routes: Route[];
  @ViewChild(RouteWizardComponent) routeWizard: RouteWizardComponent;
  constructor(public auth: AuthService, private routeService: RouteService) { }

  ngOnInit() {
    this.routeService.allRoutes().subscribe( routes => {
      this.routes = routes;
    });
  }

  openRouteWizard() {
    if (this.routeWizard) {
      this.routeWizard.show();
    }
  }

}
