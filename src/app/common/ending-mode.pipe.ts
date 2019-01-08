import { Pipe, PipeTransform } from '@angular/core';
import { EndingMode } from '../models/route';
import * as _ from 'lodash'

@Pipe({
  name: 'endingMode'
})
export class EndingModePipe implements PipeTransform {

  transform(value: EndingMode): any {
    if (!_.isNil(value) && value.flash) {
      return 'FL'
    } 
    if (!_.isNil(value) && value.onSight) {
      return 'OS'
    }
    return null;
  }
}
