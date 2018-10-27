import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'clg-route-grade',
  templateUrl: './route-grade.component.html',
  styleUrls: ['./route-grade.component.scss']
})
export class RouteGradeComponent implements OnInit {

  display = false;
  grade: string;
  gradeType: string;
  @Output() finished: EventEmitter<any> = new EventEmitter();
  @Output() back: EventEmitter<any> = new EventEmitter();
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
    this.finished.emit({gradeType: this.gradeType, grade: this.grade});
  }
  onBack() {
    this.display = false;
    this.back.emit();
  }
  onClose() {
    this.display = false;
    this.close.emit();
  }

}
