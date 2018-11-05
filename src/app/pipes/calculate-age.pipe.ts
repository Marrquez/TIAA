import { Pipe, PipeTransform } from '@angular/core';
/**
 * Calculate the age base on the given bod date
 * Usage:
 *   dob | calculateAge
*/
@Pipe({name: 'calculateAge'})
export class CalculateAgePipe implements PipeTransform {
  transform(dob: any): number {
    var timeDiff = Math.abs(Date.now() - dob);
    //Used Math.floor instead of Math.ceil
    //so 26 years and 140 days would be considered as 26, not 27.
    return Math.floor((timeDiff / (1000 * 3600 * 24))/365);
  }
}
