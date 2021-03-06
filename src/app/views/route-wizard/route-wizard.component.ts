import { Component, OnInit, ViewChild } from '@angular/core';
import { OverallStateComponent } from './overall-state/overall-state.component';
import { RouteGradeComponent } from './route-grade/route-grade.component';
import { BelayModeComponent } from './belay-mode/belay-mode.component';
import { TagsComponent } from './tags/tags.component';
import { Route, EndingMode, ClimbingGrade } from 'src/app/models/route';
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
  }

  onOverallStateSelectionEnd(event: boolean) {
    this.newRoute.succeded = event;
    this.routeGrade.show();
  }
  onClose() {
    this.display = false;
  }
  onRouteGradeSelectionEnd(event: ClimbingGrade) {
    this.newRoute.grade = event;
    this.belayMode.show();
  }
  onRouteGradeBack() {
    this.overallState.show();
  }
  onBelayModeSelectionEnd(event: any) {
    this.newRoute.belayMode = event.belayMode;
    this.tags.show(this.newRoute.succeded)
  }
  onBelayModeBack() {
    this.routeGrade.show();
  }
  onTagsSelectionEnd(event: any) {
    this.newRoute.endingMode = event.endingMode
    this.routeService.logRoute(this.newRoute as Route)
    
    if (event.repeat) {
      this.newRoute = {} as Route
      this.onRouteGradeBack()
    } else {
      this.display = false
    }
  }

  onTagsBack() {
    this.belayMode.show()
  }
}
