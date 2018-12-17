import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'clg-route-grade',
  templateUrl: './route-grade.component.html',
  styleUrls: ['./route-grade.component.scss']
})
export class RouteGradeComponent implements OnInit {
  set2 = [
    {key: 0, value:'4a'},
    {key: 1, value:'4a+'},
    {key: 2, value:'4b'},
    {key: 3, value:'4b+'},
    {key: 4, value:'4c'},
    {key: 5, value:'4c+'},
    {key: 6, value:'5a'},
    {key: 7, value:'5a+'},
    {key: 8, value:'5b'},
    {key: 9, value:'5b+'},
    {key: 10, value:'5c'},
    {key: 11, value:'5c+'},
    {key: 12, value:'6a'},
    {key: 13, value:'6a+'},
    {key: 14, value:'6b'},
    {key: 15, value:'6b+'},
    {key: 16, value:'6c'},
    {key: 17, value:'6c+'},
    {key: 18, value:'7a'},
    {key: 19, value:'7a+'},
    {key: 20, value:'7b'},
    {key: 21, value:'7b+'},
    {key: 22, value:'7c'},
    {key: 23, value:'7c+'},
    {key: 24, value:'8a'},
    {key: 25, value:'8a+'},
    {key: 26, value:'8b'},
    {key: 27, value:'8b+'},
    {key: 28, value:'8c'},
    {key: 29, value:'8c+'},
    {key: 30, value:'9a'},]
    item2 = {key: 2, value: '4b'}

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
  onInvalidInput() {
    console.log('%c WARN => Invalid Input value!', 'color: red; font-weight: bold;')
  }

  onValueChange() {
    console.log('%c INFO => Input value changed to:', 'color: green; font-weight: bold;', this.item2)
  }
}
