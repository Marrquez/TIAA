import { Pipe, PipeTransform } from '@angular/core';
/**
 * find the given text on the name column
 * Usage:
 *   array | filter: filterText
 */
@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform {
  transform(employeeList, filterText) {
    if (!filterText || filterText.length <= 2) {
      return employeeList;
    } else if (employeeList) {
      return employeeList.filter(function(e){
        return e.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1
      });
    }
  }
}
