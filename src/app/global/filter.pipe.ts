import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})

export class FilterPipe implements PipeTransform {
  transform(items: any[], term: string): any {
    if (term) {
      return items.filter(item => item.name.toLowerCase().indexOf(term.toLowerCase()) > -1);
    } else return items
  }
}
