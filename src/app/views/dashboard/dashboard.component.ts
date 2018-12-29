import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { RouteService } from 'src/app/route/route.service';
import { Route } from 'src/app/models/route';
import { RouteWizardComponent } from '../route-wizard/route-wizard.component';
import { Observable } from 'rxjs'

@Component({
  selector: 'clg-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  routes: Observable<Route[]>
  @ViewChild(RouteWizardComponent) routeWizard: RouteWizardComponent;

  constructor(public auth: AuthService, 
              public routeService: RouteService) { }

  ngOnInit() { }

  openRouteWizard() {
    if (this.routeWizard) {
      this.routeWizard.show();
    }
  }

  signout() {
    this.routes = null
    this.auth.signOut()
  }

}
