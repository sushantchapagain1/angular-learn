import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendGenerate',
})
export class AppendGeneratePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
    // add logic here.
  }
}
