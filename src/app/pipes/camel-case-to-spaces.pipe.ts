import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCaseToSpaces',
  standalone: true
})
export class CamelCaseToSpacesPipe implements PipeTransform {

  transform(camelCaseText: string): string {
    if (!camelCaseText) return '';
    return camelCaseText.replace(/([a-z])([A-Z])/g, '$1 $2');
  }

}
