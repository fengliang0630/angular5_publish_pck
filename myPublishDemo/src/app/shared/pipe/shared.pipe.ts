import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shared'
})
export class SharedPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    value = value - 1;
    return value;
  }

}
