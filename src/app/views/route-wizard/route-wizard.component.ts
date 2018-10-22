import { Component, OnInit, ViewChild } from '@angular/core';
import {DialogModule} from 'primeng/dialog';
import { OverallStateComponent } from './overall-state/overall-state.component';
import { RouteGradeComponent } from './route-grade/route-grade.component';
import { BelayModeComponent } from './belay-mode/belay-mode.component';
import { TagsComponent } from './tags/tags.component';
import { Observable } from 'rxjs';
import { Route } from 'src/app/models/route';
import { RouteService } from 'src/app/route/route.service';

@Component({
  selector: 'clg-route-wizard',
  templateUrl: './route-wizard.component.html',
  styleUrls: ['./route-wizard.component.scss']
})
export class RouteWizardComponent implements OnInit {

  @ViewChild(OverallStateComponent) overallState: OverallStateComponent;
  @ViewChild(RouteGradeComponent) routeGrade: RouteGradeComponent;
  @ViewChild(BelayModeComponent) belayMode: BelayModeComponent;
  @ViewChild(TagsComponent) tags: TagsComponent;
  display = false;
  newRoute = {} as Route;

  constructor(public routeService: RouteService) { }

  ngOnInit() { }

  show() {
    this.display = true;
    // this.overallState.show();
  }

  onOverallStateSelectionEnd(event) {
    console.log({event});
    this.newRoute.succeded = event.succeded;
    this.routeGrade.show();
  }
  onClose() {
    this.display = false;
  }
  onRouteGradeSelectionEnd(event) {
    console.log({event});
    this.newRoute.grade = event.grade;
    this.belayMode.show();
  }
  onRouteGradeBack() {
    this.overallState.show();
  }
  onBelayModeSelectionEnd(event) {
    this.newRoute.belayMode = event.belayMode;
    this.tags.show();
  }
  onBelayModeBack() {
    this.routeGrade.show();
  }
  onTagsSelectionEnd() {
    this.display = false;
    console.log(this.newRoute);
    this.routeService.addRoute(this.newRoute);
  }
  onTagsBack() {
    this.belayMode.show();
  }
}
