import { Component } from '@angular/core';
import { AuthService } from './core/auth.service';
import { RouteService } from './route/route.service';
@Component({
  selector: 'clg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'climbing-log';

  constructor(public auth: AuthService,
              public routeService: RouteService) { }
}
