import { Component, OnInit, ViewChild } from '@angular/core';
import {DialogModule} from 'primeng/dialog';
import { OverallStateComponent } from './overall-state/overall-state.component';
import { RouteGradeComponent } from './route-grade/route-grade.component';
import { BelayModeComponent } from './belay-mode/belay-mode.component';
import { TagsComponent } from './tags/tags.component';
import { Observable } from 'rxjs';

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
  constructor() { }

  ngOnInit() { }

  show() {
    this.display = true;
    this.overallState.show();
  }

  onOverallStateSelectionEnd() {
    this.routeGrade.show();
  }
  onClose() { }
  onRouteGradeSelectionEnd() {
    this.belayMode.show();
  }
  onRouteGradeBack() {
    this.overallState.show();
  }
  onBelayModeSelectionEnd() {
    this.tags.show();
  }
  onBelayModeBack() {
    this.routeGrade.show();
  }
  onTagsSelectionEnd() {
    this.display = false;
  }
  onTagsBack() {
    this.belayMode.show();
  }
}
