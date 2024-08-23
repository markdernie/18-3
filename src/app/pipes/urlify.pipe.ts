import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlify',
  standalone: true
})
export class UrlifyPipe implements PipeTransform {

  transform(input: string): string {
    if (!input) return '';
    return input
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/[^\w-]+/g, ''); // Remove non-word characters except hyphens
  }

}
