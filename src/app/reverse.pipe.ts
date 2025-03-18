import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): string {
    if (value == null) return '';  // Handles both null and undefined
    return value.split('').reverse().join('');
  }
}
