import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celsius',
})
export class CelsiusPipe implements PipeTransform {
  celsius!: number;
  result!: string;

  transform(value: number): string {
    this.celsius = Math.floor(((value - 32) * 5) / 9);

    return (this.result = `${this.celsius}°C`);
  }
}
