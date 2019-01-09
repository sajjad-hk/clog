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
  @Output() finished: EventEmitter<any> = new EventEmitter();
  @Output() back: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() { }

  onChange(e: any) {

    switch(e.id) {
      case 'FLASH':
          if(this.endingMode.flash)
            this.endingMode.onSight = !this.endingMode.flash
      break
      case 'OS':
        if(this.endingMode.onSight)
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

  onNext(repeat: boolean) {
    this.display = false;
    this.finished.emit({ endingMode: this.endingMode, repeat: repeat});
  }

  onBack() {
    this.display = false;
    this.back.emit();
  }

  onClose() {
    
  }

}
