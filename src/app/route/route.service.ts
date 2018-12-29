import { Injectable } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Route } from '../models/route';
import { Observable } from 'rxjs';
import { switchMap, shareReplay } from 'rxjs/operators'
import * as _ from 'lodash';

import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { FirestoreService } from '../common/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  routesRef: AngularFirestoreCollection<any>;

  constructor(private auth: AuthService,
              private db: FirestoreService) { }

   removeRoute() {
   }

   /**
    * 
    * @param route route to log 
    * Logs the route to routes collection with uid reference
    */
   async logRoute(route: Route) {
      const uid = await this.auth.uid()
      const data = {
        uid: uid,
        ...route
      }
      this.db.add(`routes`, data)
   }

   /**
    * Gets all current user logged routes 
    * Ordered with creation time
    * First 25 of all routes
    */
   get routes(): Observable<Route[]> {
      return this.auth.user$.pipe(
        switchMap( user => 
            this.db.col$('routes', (ref: any) => 
              ref
                .where('uid', '==', user ? user.uid : null)
                .orderBy('createdAt', 'desc')
                .limit(25)
          )
        ),
        shareReplay(1)
      ) as Observable<Route[]>
   }

  trackById(idx: number, route: Route) {
    return route.id
  }

}
