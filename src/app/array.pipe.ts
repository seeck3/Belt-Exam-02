import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ArrayPipe'
})
export class ArrayPipe implements PipeTransform {

  transform(value, args: any[] = null): any {
    return Object.keys(value).map(key => Object.assign({ key }, value[key]));
  }

}
