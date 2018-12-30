import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ClimbingGrade, GRADE_BASE, IGrade } from 'src/app/models/route';

@Component({
  selector: 'clg-route-grade',
  templateUrl: './route-grade.component.html',
  styleUrls: ['./route-grade.component.scss']
})
export class RouteGradeComponent implements OnInit {

    CONFIG = GRADE_BASE
    isFR = true
    isPL = false
    display = false;
    gradeType: string;
    grade: ClimbingGrade = { 
      gradeType: 'FRENCH', 
      gradeValue: GRADE_BASE.FR_FIRST as IGrade
    }

  @Output() finished: EventEmitter<ClimbingGrade> = new EventEmitter();
  @Output() back: EventEmitter<void> = new EventEmitter();
  @Output() close: EventEmitter<void> = new EventEmitter();
  constructor() { }

  ngOnInit() { }

  onGradeTypeChange(event: any) {
    console.log({event})
    switch(event.value) {
      case 'FRENCH':
        this.isFR = true
        this.isPL = false
        this.grade.gradeValue = GRADE_BASE.FR_FIRST
        break
      case 'POLISH':
        this.isFR = false
        this.isPL = true
        this.grade.gradeValue = GRADE_BASE.PL_FIRST
        break
    }
    this.grade.gradeType = event.value
  }

  show() {
    this.display = true;
  }

  hide() {
    this.display = false;
  }

  onNext() {
    this.display = false;
    this.finished.emit(this.grade);
  }

  onBack() {
    this.display = false;
    this.back.emit();
  }

  onClose() {
    this.display = false;
    this.close.emit();
  }
  onInvalidInput() {
    console.log('%c WARN => Invalid Input value!', 'color: red; font-weight: bold;')
  }

  onValueChange() {
    console.log('%c INFO => Input value changed to:', 'color: green; font-weight: bold;', this.grade)
  }
}
