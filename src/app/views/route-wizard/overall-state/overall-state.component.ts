import { Component, OnInit, Output, EventEmitter } from '@angular/core'
@Component({
  selector: 'clg-overall-state',
  templateUrl: './overall-state.component.html',
  styleUrls: ['./overall-state.component.scss']
})
export class OverallStateComponent implements OnInit {

  display = true;
  succeded: Boolean;
  @Output() finished: EventEmitter<Boolean> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() { }

  show() {
    this.display = true;
  }

  hide() {
    this.display = false;
  }

  onNext() {
    this.display = false;
    this.finished.emit(this.bool(this.succeded));
  }

  onClose() {
    this.display = false;
    this.close.emit();
  }

  bool(value: any): Boolean {
    if (value === 'true') {
      return true
    } 
    if (value === 'false') {
      return false
    }
  }

}
