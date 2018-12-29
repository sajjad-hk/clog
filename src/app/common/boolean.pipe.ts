import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolean'
})
export class BooleanPipe implements PipeTransform {

  transform(value: any): string {
    let answer: string
    
    if (value === true || value === 'true') {
      answer = 'Yes'
    } else if (value === false || value === 'false') {
      answer = 'No'
    } else {
      answer = undefined
    }
    return  answer
  }

}
