import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'csvToArray',
  standalone: true
})
export class CsvToArrayPipe implements PipeTransform {

  transform(csvData: string): string[] {
    if (!csvData) return [];

    // Split the CSV string into an array
    return csvData.split(',');
  }

}
