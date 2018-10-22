import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'clg-overall-state',
  templateUrl: './overall-state.component.html',
  styleUrls: ['./overall-state.component.scss']
})
export class OverallStateComponent implements OnInit {

  display = true;
  succeded: boolean;
  @Output() finished: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  show() {
    this.display = true;
  }

  hide() {
    this.display = false;
  }
  onNext() {
    this.display = false;
    this.finished.emit({succeded: this.succeded});
  }
  onClose() {
    this.display = false;
    this.close.emit();
  }

}
