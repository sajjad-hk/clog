import { Component, OnInit } from '@angular/core';
import { LoadingSpinnerService } from 'src/app/common/loading-spinner.service';

@Component({
  selector: 'clg-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent implements OnInit {

  visible: boolean = false
  constructor(private spinner: LoadingSpinnerService) { }

  ngOnInit() {

    this.spinner.spinnerEmitter.subscribe( (show: boolean) => this.visible = show )
  }

}
