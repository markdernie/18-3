import { Pipe, PipeTransform } from '@angular/core';
import { DateTime } from "luxon";

@Pipe({
  name: 'formatdate',
  standalone: true
})
export class FormatdatePipe implements PipeTransform {

  transform(value: number, ...args: string[]): string {
    let now=DateTime.now()
    let dt1
    if (!value) {
      
    } 
    else {
      value=999999
    }
       dt1=DateTime.fromMillis(value)
    
    
    return dt1.toString()
  }

}
