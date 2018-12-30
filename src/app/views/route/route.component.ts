import { Component, OnInit, Input } from '@angular/core';
import { Route } from 'src/app/models/route';
import { FirestoreService } from 'src/app/common/firestore.service';

@Component({
  selector: 'clg-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent implements OnInit {

  @Input() route: Route;
  constructor(private db: FirestoreService) { }

  ngOnInit() { }

  stringfy(value: string) {
    return value.replace('+', '-plus')
  }

  onDelete(id: string) {
    this.db.delete(`routes/${id}`)
  }

}
