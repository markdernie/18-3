import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomPlaceholderImage',
  standalone: true
})
export class RandomPlaceholderImagePipe implements PipeTransform {

  transform(width: number = 200, height: number = 150): string {
    const colors = ['333333', '666666', '999999', 'CCCCCC'];
    const patterns = ['abstract', 'animals', 'business', 'food', 'nature', 'people', 'sports', 'technics', 'transport'];
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomPattern = patterns[Math.floor(Math.random() * patterns.length)];

    return `https://via.placeholder.com/${width}x${height}/${randomColor}/${randomPattern}`;
  }

}
