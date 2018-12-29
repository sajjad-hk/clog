import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingSpinnerService {

  spinner: EventEmitter<boolean> = new EventEmitter()
  constructor() { }

  showSpinner() {
    this.spinner.emit(true)
  }

  hideSpinner() {
    this.spinner.emit(false)
  }

  get spinnerEmitter() {
    return this.spinner
  }

}
