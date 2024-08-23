import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskedInput',
  standalone: true
})
export class MaskedInputPipe implements PipeTransform {

  transform(input: string, mask: string): string {
    if (!input || !mask) return input;

    let result = '';
    let inputIndex = 0;

    for (let i = 0; i < mask.length; i++) {
      if (mask[i] === '*') {
        result += input[inputIndex] || '';
        inputIndex++;
      } else {
        result += mask[i];
      }
    }

    return result;
  }
  // transform(input: string): string {
  //   let mask='(***) ***-****'
  //   if (!input || !mask) return input;

  //   let result = '';
  //   let inputIndex = 0;

  //   for (let i = 0; i < mask.length; i++) {
  //     if (mask[i] === '*') {
  //       result += input[inputIndex] || '';
  //       inputIndex++;
  //     } else {
  //       result += mask[i];
  //     }
  //   }
  //   console.log('result',result)
  //   return result;
  // }

}
