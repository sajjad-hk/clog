import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'clg-overall-state',
  templateUrl: './overall-state.component.html',
  styleUrls: ['./overall-state.component.scss']
})
export class OverallStateComponent implements OnInit {

  display = false;
  @Output() finished: EventEmitter<any> = new EventEmitter();
  @Output() back: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  show() {
    console.log('display');
    this.display = true;
  }

  hide() {
    this.display = false;
  }
  onNext() {
    this.display = false;
    timer(400)
      .subscribe(() => this.finished.emit());
  }
  onBack() {
    this.display = false;
    timer(400)
      .subscribe(() => this.back.emit());
  }

}
