import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tax'
})
export class TaxPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let gst = 0.12
    let courierCharge = 150
    return value * gst + courierCharge;
  }

}
