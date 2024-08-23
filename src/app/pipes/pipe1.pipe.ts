import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe1',
  standalone: true
})
export class Pipe1Pipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  // transform(value: string): string {
  //   return `⭐️ ${value} ⭐️`;

  // }
  transform(value: string): string {
    let reverse = '';
    for (let i = value.length - 1; i >= 0; i--) {
        reverse += value[i];
    }
    return reverse;
}

}
