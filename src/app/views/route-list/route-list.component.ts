import { Component, OnInit, Input } from "@angular/core";
import { Route } from "src/app/models/route";
import { RouteService } from "src/app/route/route.service";
import { Observable, of } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import * as _ from "lodash";

@Component({
  selector: "clg-route-list",
  templateUrl: "./route-list.component.html",
  styleUrls: ["./route-list.component.scss"]
})
export class RouteListComponent implements OnInit {
  routes: Observable<any[]>;

  constructor(public routeService: RouteService) { }

  ngOnInit() {
    this.routes = this.routeService.routes
      .pipe(map(data => transfromRoutes(data) ))
  }
}

const transfromRoutes = (data: any) => {
  let routemap = []
  data.forEach(element => {
    element.createdAt = timestampsToDate(element.createdAt);
    if ((routemap.filter( it => it.k === element.createdAt)).length > 0) {
      routemap.filter( it => it.k === element.createdAt)[0].v.push(element)
    } else {
      routemap.push({k: element.createdAt, v: [element]})
    }
  });
  return routemap
};

const timestampsToDate = (timestamps: any) => {
  const date = new Date(1970, 0, 1);
  date.setSeconds(timestamps.seconds);
  return date.toLocaleDateString("en-US");
};