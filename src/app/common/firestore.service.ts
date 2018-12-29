import { Injectable } from '@angular/core'
import {AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection, DocumentChangeAction} from '@angular/fire/firestore'
import { Observable } from 'rxjs'
import {map} from 'rxjs/operators'
import * as firebase from 'firebase/app'

type CollectionPredicate<T> = string | AngularFirestoreCollection<T>;
type DocPredicate<T> = string | AngularFirestoreDocument<T>;

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private afs: AngularFirestore) { }


   col<T>(ref: CollectionPredicate<T>, queryFn? : any) {
      return typeof ref === 'string' ? this.afs.collection<T>(ref, queryFn) : ref
   }

   doc<T>(ref: DocPredicate<T>): AngularFirestoreDocument<T> {
      return typeof ref === 'string' ? this.afs.doc<T>(ref) : ref
   }

   /*************************
    *     Get Data
    *************************/

    doc$<T> (ref: DocPredicate<T>): Observable<T> {
        return this.doc(ref).snapshotChanges()
          .pipe( map( doc => {
            return doc.payload.data() as T
          })) 
    }

    col$<T>(ref: CollectionPredicate<T>, queryFn? : any): Observable<T[]> {
      return this.col(ref, queryFn).snapshotChanges()
        .pipe( map( docs => {
          return docs.map( a => a.payload.doc.data())  as T[]
        }))
    }

    /**
     *  With Ids
     */
    colWithIds$<T>(ref: CollectionPredicate<T>, queryFn? : any): Observable<any[]> {
      return this.col(ref, queryFn).snapshotChanges().pipe( map( (actions: DocumentChangeAction<T>[]) => {
        return actions.map( a => {
            const data: Object = a.payload.doc.data() as T
            const id = a.payload.doc.id
            return { id, ...data }
        })
      }))
    }

    /**
     *  Firebase server Timestamp
     */
    get timestamp() {
      return firebase.firestore.FieldValue.serverTimestamp()
    }

    /****************************
     *    CRUD With Timestamp
     ****************************/

    set<T>(ref: DocPredicate<T>, data: any) {
      const timestamp = this.timestamp
      return this.doc(ref).set({
        ...data,
        updatedAt: timestamp,
        createdAt: timestamp
      })
    }

    update<T>(ref: DocPredicate<T>, data: any): Promise<void> {
      return this.doc(ref).update({
        ...data,
        updatedAt: this.timestamp,
      });
    }
    
    delete<T>(ref: DocPredicate<T>): Promise<void> {
      return this.doc(ref).delete();
    }
    
    add<T>(ref: CollectionPredicate<T>, data): Promise<firebase.firestore.DocumentReference> {
      const timestamp = this.timestamp;
      return this.col(ref).add({
        ...data,
        updatedAt: timestamp,
        createdAt: timestamp,
      });
    }

    geopoint(lat: number, lng: number) {
      return new firebase.firestore.GeoPoint(lat, lng)
    }

}
