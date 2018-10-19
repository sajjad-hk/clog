import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'clg-belay-mode',
  templateUrl: './belay-mode.component.html',
  styleUrls: ['./belay-mode.component.scss']
})
export class BelayModeComponent implements OnInit {

  display = false;
  @Output() finished: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();
  @Output() back: EventEmitter<any> = new EventEmitter();
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
    timer(400)
      .subscribe(() => this.finished.emit());
  }
  onBack() {
    this.display = false;
    timer(400)
      .subscribe(() => this.back.emit());
  }

}
