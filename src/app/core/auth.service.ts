import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { Route } from '../models/route';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { auth } from 'firebase/app';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { FirestoreService } from '../common/firestore.service';
import { take, map } from 'rxjs/operators'
import { LoadingSpinnerService } from '../common/loading-spinner.service';

@Injectable({ providedIn: 'root' })
export class AuthService {

  user$: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private db: FirestoreService,
    private router: Router,
    private spinner: LoadingSpinnerService
  ) {
    /**
     *  Get auth data, then get firestote user document || null
     */
      this.user$ = this.afAuth.authState.pipe(
        switchMap( user => (user ? db.doc$(`users/${user.uid}`) : of(null)) )
      )

      this.handleRedirect()
  }

  /**
   * Sets user data to firestore on login
   * @param user user info
   */
  private updateUserData(user: User) {

    const path = `users/${user.uid}`
    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    }

    return this.userDocExists(user.uid) ? this.db.update(path, data) : this.db.set(path, data)
  }

  async userDocExists(id: string) {
    let exists = false
    await this.db.col('users').doc(id).get().subscribe( doc => {
      exists = doc.exists
    })
    return exists
  }

  uid() {
    return this.user$
      .pipe(
        take(1), 
        map( u => u && u.uid)
      )
      .toPromise()
  }

  async signOut() {
    await this.afAuth.auth.signOut()
    this.router.navigate(['/login']);
  }

  setRedirect(val: any) {
    localStorage.setItem('authRedirect', val)
  }

  async isRedirect() {
    return await localStorage.getItem('authRedirect')
  }

  async googleLogin() {
    try {

      let user: any
      await this.setRedirect('true')
      const provider = new auth.GoogleAuthProvider()
      user = await this.afAuth.auth.signInWithRedirect(provider)

      return await this.updateUserData(user)
    } catch(error) {

      console.log('%c ERROR => At google login!', 'color: red; font-weight: bold;', error)
    }
  }

  private async handleRedirect() {
    this.spinner.showSpinner()
    if((await this.isRedirect()) !== 'true') {
      return null
    }
    this.spinner.showSpinner()
    const result = await this.afAuth.auth.getRedirectResult()

    if( result.user ) {
      await this.updateUserData(result.user)
      this.router.navigate(['/dashboard']);
    }

    await this.setRedirect('false')

    this.spinner.hideSpinner()

    return result
  }

}
