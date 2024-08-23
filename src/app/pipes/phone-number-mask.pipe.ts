import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumberMask',
  standalone: true
})
export class PhoneNumberMaskPipe implements PipeTransform {

  transform(phoneNumber: string): string {
    if (!phoneNumber) return '';
    // Add your custom logic for phone number masking and formatting
    return 'masked phone number'
    // Example: (123) ***-****
  }

}
