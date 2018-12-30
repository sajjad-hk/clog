import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EndingMode } from 'src/app/models/route';

@Component({
  selector: 'clg-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  endingMode = {
    flash: false,
    onSight: false
  } as EndingMode

  display = false;
  @Output() finished: EventEmitter<EndingMode> = new EventEmitter();
  @Output() back: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() { }

  onChange(e: any) {

    switch(e.id) {
      case 'FLASH':
        this.endingMode.onSight = !this.endingMode.flash
      break
      case 'OS':
        this.endingMode.flash = !this.endingMode.onSight
      break
    }
  }

  show() {
    this.display = true;
  }

  hide() {
    this.display = false;
  }

  onNext() {
    this.display = false;
    this.finished.emit(this.endingMode);
  }

  onBack() {
    this.display = false;
    this.back.emit();
  }

  onClose() {
    
  }

}
