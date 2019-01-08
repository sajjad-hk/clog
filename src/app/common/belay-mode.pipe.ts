import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'belayMode'
})
export class BelayModePipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case 'Lead':
        return 'LD'
      case 'Auto':
        return 'AU'
      case 'Toprope':
        return 'TR'
      default:
        return null;
    }
  }
}
