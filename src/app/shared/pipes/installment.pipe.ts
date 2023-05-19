import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'installment',
})
export class InstallmentPipe implements PipeTransform {
  transform(value: number): number {
    const installment = value / 24;

    return installment;
  }
}
