import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArray',
  standalone: true
})
export class FilterArrayPipe implements PipeTransform {
  transform(items: any[], property: string, filterValue: any): any[] {
    if (!items) return [];
    console.log('AAAitems',items)
    return items.filter(item => item[property] === filterValue);
  }
}
