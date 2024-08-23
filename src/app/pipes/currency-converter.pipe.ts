import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConverter',
  standalone: true
})
export class CurrencyConverterPipe implements PipeTransform {

  transform(value: number, exchangeRate: number): number {
    if (isNaN(value) || isNaN(exchangeRate)) return value;
    return value * exchangeRate;
  }

}
