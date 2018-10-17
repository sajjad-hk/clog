import { Injectable } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Route } from '../models/route';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  routesRef: AngularFirestoreCollection<any>;

  constructor(private authService: AuthService,
              private afs: AngularFirestore) {
                authService.user.subscribe(user => {
                  if (!_.isNil(user)) {
                    this.routesRef = this.afs.doc(`users/${user.uid}`).collection('routes');
                  }
                });
   }

   addRoute(route: Route) {
     return this.routesRef.add(route);
   }

   allRoutes(): AngularFirestoreCollection<any> {
     return this.routesRef;
   }

}
